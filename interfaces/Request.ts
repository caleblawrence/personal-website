import { NextApiRequest } from 'next'
export interface Request extends NextApiRequest {
  db: any
}
