import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { Skills } from '../../typings'
import { client } from '../../sanity'

const query = groq`
*[_type == "skills"]
`

type Data = {
    skills: Skills[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const skills: Skills[] = await client.fetch(query)
    res.status(200).json({ skills })
}
