import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'award',
  title: 'Award / Honour',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Award title', type: 'string' }),
    defineField({ name: 'awardingBody', title: 'Awarding body', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
    defineField({ name: 'image', title: 'Photo / certificate image (optional)', type: 'image' }),
  ],
  preview: { select: { title: 'title', subtitle: 'awardingBody' } },
})
