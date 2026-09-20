import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'qualification',
  title: 'Qualification',
  type: 'document',
  fields: [
    defineField({ name: 'degree', title: 'Degree / Qualification', type: 'string' }),
    defineField({ name: 'institution', title: 'Institution', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'year', title: 'Year completed', type: 'string' }),
    defineField({ name: 'details', title: 'Details (thesis title, honours, etc.)', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'degree', subtitle: 'institution' } },
})
