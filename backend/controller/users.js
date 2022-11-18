import { ObjectId } from "mongodb";
import { mongodb } from "../database/mongodb.js";

const userCollection = mongodb.collection("usersports");

const userCollection2 = mongodb.collection("users");

export const getAllUsers = async (page, limit) => {
  const cursor = await userCollection.find(
    {},
    {
      sort: { createdAt: -1 },
      skip: page * limit,
      limit: limit,
      projection: {
        profileImage: true,
        firstName: true,
        lastName: true,
        location: true,
      },
    }
  );

  const users = [];
  await cursor.forEach((doc) => users.push(doc));

  return {
    data: users,
    total: await userCollection.estimatedDocumentCount(),
    page: page,
    limit: limit,
  };
};

export const getOneUser = async (userId) => {
  const user = await userCollection.findOne({
    _id: ObjectId(userId),
  });

  if (user == null) return null;

  user["usersCollection"] = await userCollection2.findOne({
    fuid: user.fuid,
  });

  return user;
};
