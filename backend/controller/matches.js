import prisma from "../prisma.js";
import { basicUserDetails } from "./shared.js";

export const getAllMatches = async (page, limit, gameType) => {
  const matches = await getGameCollection(gameType).findMany({
    skip: page * limit,
    take: limit,
    select: {
      id: true,
      matchStatus: true,
      teamOne: true,
      teamTwo: true,
      venue: { select: { groundName: { select: { name: true } } } },
      createdAt: true,
    },
  });

  return matches;
};

export const getOneMatch = async (matchId, gameType) => {
  const match = await getGameCollection(gameType).findUniqueOrThrow({
    where: { id: matchId },
    include: { venue: true },
  });

  match.teamOne.team = await prisma.teams.findUniqueOrThrow({
    where: { id: match.teamOne.teamId },
  });
  match.teamTwo.team = await prisma.teams.findUniqueOrThrow({
    where: { id: match.teamTwo.teamId },
  });

  return match;
};

export const getMatchOfficials = async (matchId) => {
  const selectFilter = {
    id: true,
    userDetails: basicUserDetails,
  };

  const scorers = await prisma.userroles.findMany({
    where: {
      resourceId: matchId,
      role: "scorer",
      resourceName: "match",
    },
    select: selectFilter,
  });

  const streamers = await prisma.userroles.findMany({
    where: {
      resourceId: matchId,
      role: "streamer",
      resourceName: "match",
    },
    select: selectFilter,
  });

  return { scorers, streamers };
};

const getGameCollection = (gameType) => {
  return gameType == 0 ? prisma.matches : prisma.footballmatches;
};
