import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.DATABASE_URL);

const mongodb = mongoClient.db("prod");

export { mongodb };
