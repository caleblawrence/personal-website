import { MongoClient } from 'mongodb';

console.log("mongo URI", process.env.mongodb_uri);

// env variables in now are too hard
let mongodb_uri = 'mongodb+srv://caleblawrence:testpass@personalwebsite-6wydn.mongodb.net/test?retryWrites=true&w=majority';

const client = new MongoClient(mongodb_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


export default async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('hello');
  return next();
}