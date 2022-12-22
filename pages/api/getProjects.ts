import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { Projects } from '../../typings'
import { client } from '../../sanity'

const query = groq`
*[_type == "projects" && dateTime(_updatedAt) < dateTime(now())]
`

type Data = {
    projects: Projects[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const projects: Projects[] = await client.fetch(query)
    res.status(200).json({ projects })
}
