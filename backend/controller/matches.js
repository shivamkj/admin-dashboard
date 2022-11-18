import { ObjectId } from "mongodb";
import { mongodb } from "../database/mongodb.js";
import { basicUserDetails } from "./shared.js";
import { getOneUser } from "./users.js";

const cricket = mongodb.collection("matches");
const soccer = mongodb.collection("footballmatches");

const teams = mongodb.collection("teams");
const venues = mongodb.collection("venues");
const userroles = mongodb.collection("userroles");

const teamSelect = { name: true, logo: true };

export const getAllMatches = async (page, limit, gameType) => {
  const collection = getGameCollection(gameType);
  const cursor = await collection.find(
    {},
    {
      sort: { updatedAt: -1 },
      skip: page * limit,
      limit: limit,
      projection: {
        id: true,
        matchStatus: true,
        teamOne: true,
        teamTwo: true,
        matchVenue: true,
      },
    }
  );

  const matches = [];
  while (await cursor.hasNext()) {
    const doc = await cursor.next();

    doc["teamOne"] = await teams.findOne(
      { _id: doc.teamOne.teamId },
      { projection: teamSelect }
    );
    doc["teamTwo"] = await teams.findOne(
      { _id: doc.teamTwo.teamId },
      { projection: teamSelect }
    );

    doc["matchVenue"] = await venues.findOne(
      { _id: doc.matchVenue },
      { projection: { name: true, address: { city: true } } }
    );
    matches.push(doc);
  }

  return {
    data: matches,
    total: await collection.estimatedDocumentCount(),
    page: page,
    limit: limit,
  };
};

export const getOneMatch = async (matchId, gameType) => {
  const match = await getGameCollection(gameType).findOne(
    {
      _id: ObjectId(matchId),
    },
    {
      projection: { viewers: false },
    }
  );

  match.venue = await venues.findOne({
    _id: match.matchVenue,
  });

  match.teamOne.team = await teams.findOne({
    _id: match.teamOne.teamId,
  });
  match.teamTwo.team = await teams.findOne({
    _id: match.teamTwo.teamId,
  });

  return match;
};

export const getMatchOfficials = async (matchId) => {
  const scorerCursor = await userroles.find({
    resourceId: ObjectId(matchId),
    role: "scorer",
    resourceName: "match",
  });
  const scorers = [];
  while (await scorerCursor.hasNext()) {
    const doc = await scorerCursor.next();
    doc["user"] = await getOneUser(doc.user);
    scorers.push(doc);
  }

  const streamersCursor = await userroles.find({
    resourceId: ObjectId(matchId),
    role: "streamer",
    resourceName: "match",
  });
  const streamers = [];
  while (await streamersCursor.hasNext()) {
    const doc = await streamersCursor.next();
    doc["user"] = await getOneUser(doc.user);
    streamers.push(doc);
  }

  return { scorers, streamers };
};

const getGameCollection = (gameType) => {
  return gameType == 0 ? cricket : soccer;
};
