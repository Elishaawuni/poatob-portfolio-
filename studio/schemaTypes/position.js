import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'position',
  title: 'Position Held',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Position title', type: 'string' }),
    defineField({ name: 'organization', title: 'Organization / Committee', type: 'string' }),
    defineField({ name: 'startYear', title: 'Start year', type: 'string' }),
    defineField({ name: 'endYear', title: 'End year', type: 'string' }),
    defineField({ name: 'current', title: 'Currently holding this position', type: 'boolean', initialValue: false }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'title', subtitle: 'organization' } },
})
