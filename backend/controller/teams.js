import prisma from "../prisma.js";

export const getAllTeams = async (page, limit) => {
  const teams = await prisma.teams.findMany({
    skip: page * limit,
    take: limit,
    select: {
      id: true,
      name: true,
      shortName: true,
      logo: true,
      teamCity: true,
    },
  });

  return teams;
};

export const getOneTeam = async (teamId) => {
  const team = await prisma.teams.findUniqueOrThrow({
    where: { id: teamId },
  });

  return team;
};
