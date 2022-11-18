import { ObjectId } from "mongodb";
import { mongodb } from "../database/mongodb.js";
import { basicUserDetails } from "./shared.js";

const postCollection = mongodb.collection("userposts");

const userCollection = mongodb.collection("usersports");

export const getAllPosts = async (page, limit) => {
  const cursor = await postCollection.find(
    {},
    {
      sort: { createdAt: -1 },
      skip: page * limit,
      limit: limit,
      projection: {
        id: true,
        content: true,
        imageUrls: true,
        videos: true,
      },
    }
  );

  const posts = [];
  await cursor.forEach((doc) => posts.push(doc));

  return {
    data: posts,
    total: await postCollection.estimatedDocumentCount(),
    page: page,
    limit: limit,
  };
};

export const getOnePost = async (postId) => {
  const post = await postCollection.findOne({
    _id: ObjectId(postId),
  });

  post["userDetails"] = await userCollection.findOne(
    { _id: ObjectId(post.author) },
    { projection: basicUserDetails }
  );

  return post;
};
