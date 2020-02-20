import nextConnect from 'next-connect';
import middleware from "../../middleware/middleware";
import { Request } from '../../interfaces/Request';
import { NextApiResponse } from 'next'

const handler = nextConnect();
handler.use(middleware);

// GET /api/user
handler.get(async (req: Request, res: NextApiResponse) => {
  await req.db.collection("hello").find({}).limit(10).toArray(function (error: string, documents: Array<any>) {
    if (error) throw error;
    res.send(documents);
  });
});

// POST /api/user
handler.post(async (req: Request, res: NextApiResponse) => {
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
