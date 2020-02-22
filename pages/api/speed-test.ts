import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    currentTime: string
}

export default (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ currentTime: Date() })
}