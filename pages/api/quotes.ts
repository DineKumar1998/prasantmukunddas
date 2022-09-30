// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'assets');

  //Read the json data file image.data.json
  const fileContents = await fs.readFile(jsonDirectory + '/quotes.data.json', 'utf8')

  //Return the content of the data file in json format
  res.status(200).json(fileContents)
}
