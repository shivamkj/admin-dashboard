import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConfig = { connected: false, mongoClient: mongoClient };

mongoClient.on("open", (_) => {
  dbConfig.connected = true;
  console.log("DB connected");
});

mongoClient.on("topologyClosed", (_) => {
  dbConfig.connected = false;
  console.log("DB disconnected.");
});

const mongodb = mongoClient.db("prod");

export { mongodb, dbConfig };
