import prisma from "../prisma.js";

export const getAllTournaments = async (page, limit) => {
  const tournaments = await prisma.tournaments.findMany({
    skip: page * limit,
    take: limit,
    select: {
      id: true,
      logo: true,
      name: true,
    },
  });

  return tournaments;
};

export const getOneTournament = async (tournamentId) => {
  const tournament = await prisma.tournaments.findUniqueOrThrow({
    where: { id: tournamentId },
  });

  return tournament;
};
