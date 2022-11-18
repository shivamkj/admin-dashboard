import { mongodb } from "../database/mongodb";

const supportCollection = mongodb.collection("supports");
const usersCollection = mongodb.collection("usersports");

export const getDeleteRequests = async (page, limit) => {
  const cursor = supportCollection.find(
    {
      reason: 3, // reason 3 is for delete requests
    },
    {
      sort: { updatedAt: -1 },
    }
  );

  const supportReq = [];
  while (await cursor.hasNext()) {
    const doc = await cursor.next();

    doc["user"] = await usersCollection.findOne(
      { _id: doc.authorId },
      {
        projection: {
          location: true,
          firstName: true,
          lastName: true,
          profileImage: true,
          email: true,
          mobileNumber: true,
          fUid: true,
        },
      }
    );
    supportReq.push(doc);
  }

  return { data: supportReq };
};
