import nextConnect from "next-connect";
import middleware from "../../middleware/middleware";

const handler = nextConnect();

handler.use(middleware);

// GET /api/user
handler.get(async (req: any, res: any) => {
  const doc = await req.db.collection("hello").findOne({});
  res.json(doc);
});

// POST /api/user
handler.post(async (req: any, res: any) => {
  const { name, email, message } = req.body;

  if (!message) {
    res.json({
      message: "no message sent"
    });
  }

  await req.db.collection("hello").insertOne({ name, email, message });

  return res.status(201).json({
    message: "message sent"
  });
});

export default handler;
