import { prisma } from "../prisma.js";
import { basicUserDetails } from "./shared.js";

export const getAllPosts = async (page, limit) => {
  const userPosts = await prisma.userposts.findMany({
    skip: page * limit,
    take: limit,
    select: {
      id: true,
      content: true,
      userDetails: basicUserDetails,
    },
  });

  return userPosts;
};

export const getOnePost = async (postId) => {
  const post = await prisma.userposts.findUniqueOrThrow({
    where: { id: postId },
    include: { userDetails: basicUserDetails },
  });

  return post;
};
