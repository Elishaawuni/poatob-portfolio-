import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teachingExperience',
  title: 'Teaching Experience',
  type: 'document',
  fields: [
    defineField({ name: 'courseTitle', title: 'Course / Subject title', type: 'string' }),
    defineField({ name: 'level', title: 'Level', type: 'string', description: 'e.g. Undergraduate, Postgraduate' }),
    defineField({ name: 'institution', title: 'Institution', type: 'string' }),
    defineField({ name: 'startYear', title: 'Start year', type: 'string' }),
    defineField({ name: 'endYear', title: 'End year', type: 'string' }),
    defineField({ name: 'current', title: 'Still teaching this course', type: 'boolean', initialValue: false }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'courseTitle', subtitle: 'level' } },
})
