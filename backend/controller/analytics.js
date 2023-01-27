import { ObjectId } from "mongodb";
import { mongodb } from "../database/mongodb.js";
import { firbaseAuth } from "./external-tools/firebase.js";

const users = mongodb.collection("usersports");
const users2 = mongodb.collection("users");
const cricket = mongodb.collection("matches");
const soccer = mongodb.collection("footballmatches");
const tournamentCollection = mongodb.collection("tournaments");
const userroles = mongodb.collection("userroles");
const playerStats = mongodb.collection("playeraggregatestats");

export const getUserAnalytics = async (page, limit) => {
  const cursor = await users.find(
    {},
    {
      sort: { createdAt: 1 },
      skip: page * limit,
      limit: limit,
      projection: {
        id: true,
        firstName: true,
        lastName: true,
        location: true,
        fUid: true,
      },
    }
  );

  const matches = [];
  while (await cursor.hasNext()) {
    const doc = await cursor.next();

    // get details from firebase to check if user is genuine user
    // else break the loop and continue to next user
    try {
      const firebaseUser = await firbaseAuth.getUser(doc.fUid);
      // doc["firebaseUser"] = firebaseUser;
      if (firebaseUser.metadata.lastRefreshTime != null) {
        doc["lastUsedTime"] = formatDate(
          new Date(firebaseUser.metadata.lastRefreshTime)
        );
      }
      doc["createdTime"] = formatDate(
        new Date(firebaseUser.metadata.creationTime)
      );
      doc["fSource"] = firebaseUser.providerData[0].providerId;
    } catch (error) {
      continue;
    }

    const user2 = await users2.findOne(
      { fUid: doc.fUid },
      { projection: { provider: true } }
    );
    doc["aSource"] = user2?.provider;

    const userId = ObjectId(doc._id);
    const [
      cricketMatches,
      soccerMatches,
      tournament,
      cricketMatchViews,
      soccerMatchViews,
      socrer,
      streamer,
      player,
    ] = await Promise.all([
      cricket.findOne({ createdBy: userId }, { projection: {} }),
      soccer.findOne({ createdBy: userId }, { projection: {} }),
      tournamentCollection.findOne({ createdBy: userId }, { projection: {} }),
      cricket.findOne({ viewers: { $in: [userId] } }, { projection: {} }),
      soccer.findOne({ viewers: { $in: [userId] } }, { projection: {} }),
      userroles.findOne({ role: "scorer", user: userId }, { projection: {} }),
      userroles.findOne({ role: "streamer", user: userId }, { projection: {} }),
      playerStats.findOne({ playerId: userId }, { projection: {} }),
    ]);

    // add the required fields to the doc from the above queries
    doc["matchCreator"] = cricketMatches != null || soccerMatches != null;
    doc["tournamentCreator"] = tournament != null;
    doc["matchViewer"] = cricketMatchViews != null || soccerMatchViews != null;
    doc["scorer"] = socrer != null;
    doc["streamer"] = streamer != null;
    doc["player"] = player != null;

    // clean data
    doc["location"] = doc.location.city.replaceAll(",", "-");
    if (doc["firstName"]?.includes(","))
      doc["firstName"] = doc.firstName.replaceAll(",", "-");
    if (doc["lastName"]?.includes(","))
      doc["lastName"] = doc.lastName.replaceAll(",", "-");

    matches.push(doc);
  }

  return {
    data: matches,
    // total: await users.estimatedDocumentCount(),
    page: page,
    limit: limit,
  };
};

const pad = (num) => num.toString().padStart(2, "0");

function formatDate(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )} ${pad(date.getHours())}:${pad(date.getHours())}`;
}
