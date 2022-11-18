import { ObjectId } from "mongodb";
import { mongodb } from "../database/mongodb.js";

const teamCollection = mongodb.collection("teams");

export const getAllTeams = async (page, limit) => {
  const cursor = await teamCollection.find(
    {},
    {
      sort: { createdAt: -1 },
      skip: page * limit,
      limit: limit,
      projection: {
        id: true,
        name: true,
        shortName: true,
        logo: true,
        teamCity: true,
        location: {
          address: true,
        },
      },
    }
  );

  const teams = [];
  await cursor.forEach((doc) => teams.push(doc));

  return {
    data: teams,
    total: await teamCollection.estimatedDocumentCount(),
    page: page,
    limit: limit,
  };
};

export const getOneTeam = async (teamId) => {
  const team = await teamCollection.findOne({
    _id: ObjectId(teamId),
  });

  return team;
};
