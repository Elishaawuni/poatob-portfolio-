# Dr. Samuel Poatob — Portfolio Website

A portfolio website for **Dr. Samuel Poatob**, Senior Lecturer in the Department of
Social Studies, University of Education, Winneba (UEW), Ghana.

Built with **React (Vite)** on the front end and **Sanity.io** as a free, self-serve
content management system, so Dr. Poatob can add, edit, or remove content —
publications, blog posts, photos, CV, grants, and everything else — himself,
at any time, without ever needing to contact a developer.

Contact and consultation-booking requests are sent using **Web3Forms**, a free
form backend that emails submissions straight to Dr. Poatob's inbox — no
server of our own required.

---

## 1. What's in this project

```
uew-portfolio/        <- the website itself (this folder)
studio/                <- the Sanity Studio (the admin/editing tool) - separate project
```

The website and the Studio are two separate small applications that share
one content database (your free Sanity project). You deploy each one once;
after that, Dr. Poatob only ever needs the Studio's web address to make changes.

### Sections included on the site
About / Biography, Research Interests, Areas of Specialization, Qualifications,
Employment History, Teaching Experience, Positions Held, Professional
Memberships (UTAG, NaSSA pre-filled), Grants (ongoing & awarded), Projects,
Publications, Awards & Honours, Blog / Insights / Updates (one flexible
content type with category filters), CV download, Consultancy & Speaking
services, and a Contact / Consultation-booking form.

---

## 2. One-time setup (developer or a tech-savvy friend does this once)

### Step A - Create the free Sanity project

1. Go to sanity.io and sign up (free tier is enough).
2. From the `studio` folder, log in and initialise:
   ```
   cd studio
   npm install
   npx sanity login
   npx sanity init --project-name "Poatob Portfolio" --dataset production
   ```
   When asked "Would you like to use the existing configuration files?", say **yes**
   - the schema is already written for you.
3. This gives you a **Project ID**. Copy it into two places:
   - `studio/sanity.config.js` and `studio/sanity.cli.js` (`projectId: '...'`)
   - `uew-portfolio/.env` -> `VITE_SANITY_PROJECT_ID=...`

### Step B - Get a free Web3Forms key (powers the Contact / Booking form)

1. Go to web3forms.com.
2. Enter the email address that should receive enquiries (Dr. Poatob's email).
3. Copy the **Access Key** you're given.
4. Paste it into `uew-portfolio/.env` -> `VITE_WEB3FORMS_ACCESS_KEY=...`

No account or password is required for Web3Forms - the key is tied to the
destination email only.

### Step C - Install and run the website locally

```
cd uew-portfolio
npm install
npm run dev
```

Visit the printed local address (usually http://localhost:5173). The site
will already show realistic placeholder content - replace it via the Studio
(Step D) whenever you're ready.

### Step D - Run the Studio (the editing dashboard) locally

```
cd studio
npm install
npm run dev
```

This opens the Studio in your browser (usually http://localhost:3333),
where Dr. Poatob can log in with his own Sanity account and start editing.

---

## 3. Deploying so it's live on the internet

### Deploy the website (pick one, both are free)
- **Vercel**: import the `uew-portfolio` folder as a project at vercel.com,
  add the two environment variables from `.env` in the Vercel dashboard, and deploy.
- **Netlify**: same idea at netlify.com - build command `npm run build`,
  publish directory `dist`.

### Deploy the Studio (the admin tool)
From the `studio` folder:
```
npx sanity deploy
```
This publishes the Studio to a free address like
`https://poatob-portfolio.sanity.studio` - this is the link Dr. Poatob
bookmarks and uses forever to manage his own content. He logs in with his
own email/Google account, so access is entirely under his control (you can
also add him as an "Editor" member of the Sanity project from
sanity.io/manage so he doesn't need admin rights).

---

## 4. How Dr. Poatob manages content day-to-day

Once logged into the Studio, the left-hand menu is grouped exactly by
section - "Qualifications," "Publications," "Blog / Insights / Updates,"
and so on. To add anything:

1. Click the relevant section in the sidebar.
2. Click **Create new**.
3. Fill in the fields (photos and files are uploaded by dragging them in -
   this covers the profile picture, CV PDF, publication PDFs, project
   photos, and award images).
4. Click **Publish**.

Changes appear on the live website within a few seconds - no rebuild, no
redeploy, no developer required. The same applies to editing or deleting
existing entries.

The **CV** is just a file upload on the "Site Settings & Bio" page - replacing
it there instantly updates the "Download CV" button on the site.

The **Blog / Insights / Updates** section is a single flexible content type:
when creating a new post, Dr. Poatob simply picks a category (Blog, Insight,
Update, or News) and the site automatically files it under the right tab.

---

## 5. Suggestions included beyond the original list

A few things were added because they're standard (and expected) on an
academic portfolio, and cost nothing extra to maintain:
- **SEO/social meta tags** so links shared on WhatsApp, Twitter/X, or
  LinkedIn show a proper title and description.
- **Office hours & location** fields, alongside email/phone, for students
  and collaborators.
- **A "currently accepting consultancy" toggle**, so the Consultancy section
  can honestly reflect availability each term without editing copy.
- **A publication/blog filter system** so growing lists stay easy to browse.
- **Reduced-motion and keyboard-focus support** for accessibility.

Natural next additions if useful later: a searchable publications list,
Google Scholar citation counts (via API), a newsletter sign-up, or a student
resources/downloads section - all straightforward to add as new Sanity
schema types following the same pattern.

---

## 6. Tech stack summary

| Layer | Technology |
|---|---|
| Frontend framework | React 18 + Vite |
| Styling | Tailwind CSS v4 (custom design tokens) |
| Routing | React Router |
| Content/CMS | Sanity.io (free tier) |
| Rich text rendering | Portable Text |
| Contact/booking form | Web3Forms (free tier) |
| Icons | react-icons |

No custom backend server was built, per your request - Sanity and Web3Forms
both operate as free, managed services that the front end talks to directly.
