import type { NextApiRequest, NextApiResponse } from 'next';
import { generateContent } from '../../utils/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { input } = req.body;
  const result = await generateContent(input);
  res.status(200).json({ result });
}
