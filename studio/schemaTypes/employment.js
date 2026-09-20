import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'employment',
  title: 'Employment History',
  type: 'document',
  fields: [
    defineField({ name: 'role', title: 'Role / Job title', type: 'string' }),
    defineField({ name: 'institution', title: 'Institution / Employer', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'startYear', title: 'Start year', type: 'string' }),
    defineField({ name: 'endYear', title: 'End year', type: 'string', description: 'Leave blank if current.' }),
    defineField({ name: 'current', title: 'This is my current role', type: 'boolean', initialValue: false }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'role', subtitle: 'institution' } },
})
