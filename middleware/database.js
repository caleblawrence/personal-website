import { MongoClient } from 'mongodb';

console.log("mongo URI", process.env.mongodb_uri);

const client = new MongoClient(process.env.mongodb_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


export default async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);
  return next();
}