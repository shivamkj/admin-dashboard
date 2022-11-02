import prisma from "../prisma.js";

export const getAllUsers = async (page, limit) => {
  const users = await prisma.usersports.findMany({
    skip: page * limit,
    take: limit,
    select: {
      id: true,
      firstName: true,
      lastName: true,
      location: true,
    },
  });

  return users;
};

export const getOneUser = async (userId) => {
  const user = await prisma.usersports.findUniqueOrThrow({
    where: { id: userId },
    include: { userSource: { select: { provider: true, source: true } } },
  });

  return user;
};
