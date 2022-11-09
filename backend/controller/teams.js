import { prisma, mongodb } from "../prisma.js";

const teamsCollection = mongodb.collection("teams");

export const getAllTeams = async (page, limit) => {
  const cursor = await teamsCollection.find(
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
    total: await teamsCollection.estimatedDocumentCount(),
    page: page,
    limit: limit,
  };
};

export const getOneTeam = async (teamId) => {
  const team = await prisma.teams.findUniqueOrThrow({
    where: { id: teamId },
  });

  return team;
};
