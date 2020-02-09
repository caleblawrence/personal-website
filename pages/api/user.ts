import nextConnect from "next-connect";
import middleware from "../../middleware/middleware";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req: any, res: any) => {
  const doc = await req.db.collection("hello").findOne({});

  res.json(doc);
});

export default handler;
