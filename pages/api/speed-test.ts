import { NextApiResponse } from "next";

export default (res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ currentTime: Date() }));
};
