// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

type Image = {
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { requestType } = JSON.parse(req.body);

  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'assets');

  let fileName = '/image.data.json';

  if (requestType === 'about') {
    fileName = '/about.image.json';
  } else if (requestType === "youtubeVideos") {
    fileName = '/video.data.json';
  } else if (requestType === 'oldYatra') {
    fileName = '/yatra.list.json';
  } else if (requestType === "multimedia") {
    fileName = '/multimedia.json'
  }

  //Read the json data file image.data.json
  const fileContents = await fs.readFile(jsonDirectory + fileName, 'utf8')

  //Return the content of the data file in json format
  res.status(200).json(fileContents)
}
