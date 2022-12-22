import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const client = createClient({
    projectId,
    dataset,
    useCdn: typeof document !== 'undefined',
})

export const urlFor = (source: any) => {
    return createImageUrlBuilder(client).image(source)
}
