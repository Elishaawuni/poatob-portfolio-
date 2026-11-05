import { useEffect, useState } from 'react'
import { sanityFetch } from './sanity'
import * as Q from './queries'
import * as fallback from '../data/fallbackData'

const initialState = {
  loading: true,
  settings: fallback.settings,
  education: fallback.education,
  employment: fallback.employment,
  teaching: fallback.teaching,
  specializations: fallback.specializations,
  positions: fallback.positions,
  memberships: fallback.memberships,
  grants: fallback.grants,
  projects: fallback.projects,
  publications: fallback.publications,
  awards: fallback.awards,
  posts: fallback.posts,
  consultancyServices: fallback.consultancyServices,
   gallery: fallback.gallery
}

/** Fetches every content type once and merges with fallback demo content. */
export function useSiteData() {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    let mounted = true

    async function load() {
      const [
        settings,
        education,
        employment,
        teaching,
        specializations,
        positions,
        memberships,
        grants,
        projects,
        publications,
        awards,
        posts,
        consultancyServices,
        gallery,
      ] = await Promise.all([
        sanityFetch(Q.SETTINGS_QUERY, {}, fallback.settings),
        sanityFetch(Q.EDUCATION_QUERY, {}, fallback.education),
        sanityFetch(Q.EMPLOYMENT_QUERY, {}, fallback.employment),
        sanityFetch(Q.TEACHING_QUERY, {}, fallback.teaching),
        sanityFetch(Q.SPECIALIZATION_QUERY, {}, fallback.specializations),
        sanityFetch(Q.POSITIONS_QUERY, {}, fallback.positions),
        sanityFetch(Q.MEMBERSHIPS_QUERY, {}, fallback.memberships),
        sanityFetch(Q.GRANTS_QUERY, {}, fallback.grants),
        sanityFetch(Q.PROJECTS_QUERY, {}, fallback.projects),
        sanityFetch(Q.PUBLICATIONS_QUERY, {}, fallback.publications),
        sanityFetch(Q.AWARDS_QUERY, {}, fallback.awards),
        sanityFetch(Q.POSTS_QUERY, {}, fallback.posts),
        sanityFetch(Q.CONSULTANCY_QUERY, {}, fallback.consultancyServices),
        sanityFetch(Q.GALLERY_QUERY, {}, fallback.gallery),
      ])

      if (mounted) {
        setData({
          loading: false,
          settings,
          education,
          employment,
          teaching,
          specializations,
          positions,
          memberships,
          grants,
          projects,
          publications,
          awards,
          posts,
          consultancyServices,
          gallery,
        })
      }
    }

    load()
    return () => {
      mounted = false
    }
  }, [])

  return data
}
