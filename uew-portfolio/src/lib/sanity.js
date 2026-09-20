import { createClient } from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'

// These come from environment variables so the developer never needs to
// touch this file again after setup. See .env.example / README.
export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || ''
export const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

export const isSanityConfigured = Boolean(projectId)

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null

const builder = isSanityConfigured ? createImageUrlBuilder(client) : null

/** Build a responsive image URL from a Sanity image reference. */
export function urlFor(source) {
  if (!source || !builder) return null
  return builder.image(source)
}

/** Safe fetch wrapper — returns fallback if Sanity isn't configured or the query fails. */
export async function sanityFetch(query, params = {}, fallback = null) {
  if (!isSanityConfigured) return fallback
  try {
    const result = await client.fetch(query, params)
    return result && (!Array.isArray(result) || result.length) ? result : fallback
  } catch (err) {
    console.warn('Sanity fetch failed, using fallback content:', err.message)
    return fallback
  }
}
