import { ObjectId } from "mongodb";
import { mongodb } from "../database/mongodb.js";

const tournamentCollection = mongodb.collection("tournaments");

export const getAllTournaments = async (page, limit) => {
  const cursor = await tournamentCollection.find(
    {},
    {
      sort: { createdAt: -1 },
      skip: page * limit,
      limit: limit,
      projection: {
        id: true,
        logo: true,
        name: true,
        edition: true,
        tournamentStatus: { status: true },
      },
    }
  );

  const tournaments = [];
  await cursor.forEach((doc) => tournaments.push(doc));

  return {
    data: tournaments,
    total: await tournamentCollection.estimatedDocumentCount(),
    page: page,
    limit: limit,
  };
};

export const getOneTournament = async (tournamentId) => {
  const tournament = await tournamentCollection.findOne({
    _id: ObjectId(tournamentId),
  });

  return tournament;
};
