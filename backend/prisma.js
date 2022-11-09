import { PrismaClient } from "@prisma/client";
import { MongoClient } from "mongodb";

const prisma = new PrismaClient();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

const mongodb = mongoClient.db("dev");

export { prisma, mongodb };
