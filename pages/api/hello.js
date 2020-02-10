import nextConnect from "next-connect";
import middleware from "../../middleware/middleware";

const handler = nextConnect();
handler.use(middleware);

// GET /api/user
handler.get(async (req, res) => {
  const doc = await req.db.collection("hello").find({}).limit(10).toArray(function (error, documents) {
    if (error) throw error;
    res.send(documents);
  });
});

// POST /api/user
handler.post(async (req, res) => {
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
