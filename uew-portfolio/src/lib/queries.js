// Centralised GROQ queries. Keeping them here means components stay clean
// and it's obvious what data each section needs from Sanity Studio.

export const SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  fullName, title, department, institution, tagline,
  "profileImage": profileImage.asset->url,
  email, phone, officeLocation, officeHours,
  "cvFile": cvFile.asset->url,
  "cvFileName": cvFile.asset->originalFilename,
  availableForConsultancy,
  socialLinks[]{platform, url},
  bio,
  researchInterests
}`

export const EDUCATION_QUERY = `*[_type == "qualification"] | order(year desc){
  _id, degree, institution, location, year, details
}`

export const EMPLOYMENT_QUERY = `*[_type == "employment"] | order(startYear desc){
  _id, role, institution, location, startYear, endYear, current, description
}`

export const TEACHING_QUERY = `*[_type == "teachingExperience"] | order(startYear desc){
  _id, courseTitle, level, institution, startYear, endYear, current, description
}`

export const SPECIALIZATION_QUERY = `*[_type == "specialization"] | order(order asc){
  _id, title, description
}`

export const POSITIONS_QUERY = `*[_type == "position"] | order(startYear desc){
  _id, title, organization, startYear, endYear, current, description
}`

export const MEMBERSHIPS_QUERY = `*[_type == "membership"] | order(sinceYear desc){
  _id, organization, acronym, role, sinceYear, "logo": logo.asset->url
}`

export const GRANTS_QUERY = `*[_type == "grant"] | order(year desc){
  _id, title, funder, amount, currency, status, year, role, description
}`

export const PROJECTS_QUERY = `*[_type == "project"] | order(year desc){
  _id, title, summary, "image": image.asset->url, status, partners, year, link
}`

export const PUBLICATIONS_QUERY = `*[_type == "publication"] | order(year desc){
  _id, title, authors, outlet, type, year, doiOrLink, "file": file.asset->url
}`

export const AWARDS_QUERY = `*[_type == "award"] | order(year desc){
  _id, title, awardingBody, year, description, "image": image.asset->url
}`

export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id, title, slug, category, excerpt, "coverImage": coverImage.asset->url,
  publishedAt, tags
}`

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, category, excerpt, "coverImage": coverImage.asset->url,
  publishedAt, tags, body
}`

export const CONSULTANCY_QUERY = `*[_type == "consultancyService"] | order(order asc){
  _id, title, description, icon
}`

export const AWARDED_PUBLICATION_COUNT = `count(*[_type == "publication"])`
