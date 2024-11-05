import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const dbUri = process.env.LOCALDB as string;

const mongodbConnect = async () => {
  const client = await MongoClient.connect(dbUri)
    .catch((e) => console.log(e))
    .then((connection) => connection);

  return client;
};

const db = await mongodbConnect();

export default db;
