import { MongoClient } from "mongodb";

function initMongoClient() {
  const client = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.on("open", (_) => {
    console.log("DB connected");
  });

  client.on("topologyClosed", (_) => {
    console.log("DB disconnected.");
  });

  global.mongoClient = client;
  return client;
}

function initMongoDB() {
  const db = mongoClient.db("prod");
  global.mongodb = db;
  return db;
}

const mongoClient = global.mongoClient || initMongoClient();

const mongodb = global.mongodb || initMongoDB();

export { mongodb };
