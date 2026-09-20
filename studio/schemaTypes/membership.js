import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'membership',
  title: 'Professional Membership',
  type: 'document',
  fields: [
    defineField({ name: 'organization', title: 'Organization full name', type: 'string' }),
    defineField({ name: 'acronym', title: 'Acronym', type: 'string', description: 'e.g. UTAG, NaSSA' }),
    defineField({ name: 'role', title: 'Role', type: 'string', initialValue: 'Member' }),
    defineField({ name: 'sinceYear', title: 'Member since', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo (optional)', type: 'image' }),
  ],
  preview: { select: { title: 'organization', subtitle: 'acronym' } },
})
