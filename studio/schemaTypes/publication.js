import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'authors', title: 'Authors', type: 'string', description: 'e.g. Poatob, S., & Mensah, A.' }),
    defineField({ name: 'outlet', title: 'Journal / Publisher / Conference', type: 'string' }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['Journal Article', 'Book', 'Book Chapter', 'Conference Paper', 'Technical Report'] },
    }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'doiOrLink', title: 'DOI or link', type: 'url' }),
    defineField({ name: 'file', title: 'PDF upload (optional)', type: 'file', options: { accept: '.pdf' } }),
  ],
  preview: { select: { title: 'title', subtitle: 'year' } },
})
