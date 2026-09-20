import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project title', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Project photo', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: ['Ongoing', 'Completed', 'Upcoming'] },
      initialValue: 'Ongoing',
    }),
    defineField({ name: 'partners', title: 'Partners / collaborators', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'link', title: 'External link (optional)', type: 'url' }),
  ],
  preview: { select: { title: 'title', subtitle: 'status', media: 'image' } },
})
