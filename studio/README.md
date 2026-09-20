# Poatob Portfolio - Sanity Studio

This is the content-editing dashboard (the "admin panel") for
Dr. Samuel Poatob's portfolio website. It is a separate small app from the
website itself, connected to the same Sanity project.

See the main `uew-portfolio/README.md` for full setup instructions
(Step A and Step D, plus the "Deploying" and "Day-to-day" sections all
apply directly to this folder).

Quick start once a Sanity project exists and `projectId` is filled in to
`sanity.config.js` / `sanity.cli.js`:

```
npm install
npm run dev       # edit content locally at http://localhost:3333
npm run deploy    # publish the Studio to a permanent, free web address
```

## Schema overview (`schemaTypes/`)

| File | Powers |
|---|---|
| siteSettings.js | Name, title, bio, profile photo, CV upload, contact details, social links, research interests |
| qualification.js | Qualifications |
| employment.js | Employment History |
| teachingExperience.js | Teaching Experience |
| specialization.js | Areas of Specialization |
| position.js | Positions Held |
| membership.js | Professional Memberships (UTAG, NaSSA, etc.) |
| grant.js | Grants (ongoing & awarded) |
| project.js | Projects |
| publication.js | Publications |
| award.js | Awards & Honours |
| post.js | Blog / Insights / Updates (one type, filtered by category) |
| consultancyService.js | Consultancy & Speaking services listed on the site |

`structure.js` only changes how these are grouped in the sidebar - it does
not add or remove any content.
