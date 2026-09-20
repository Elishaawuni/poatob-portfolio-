import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'grant',
  title: 'Grant',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Grant / project title', type: 'string' }),
    defineField({ name: 'funder', title: 'Funding body', type: 'string' }),
    defineField({ name: 'amount', title: 'Amount', type: 'string', description: 'Numbers only, e.g. 85,000' }),
    defineField({ name: 'currency', title: 'Currency', type: 'string', initialValue: 'GHS' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: [{ title: 'Ongoing', value: 'ongoing' }, { title: 'Awarded / Completed', value: 'awarded' }] },
      initialValue: 'ongoing',
    }),
    defineField({ name: 'year', title: 'Year awarded', type: 'string' }),
    defineField({ name: 'role', title: 'Your role', type: 'string', description: 'e.g. Principal Investigator, Co-Investigator' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'funder' } },
})
