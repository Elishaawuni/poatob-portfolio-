import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'specialization',
  title: 'Area of Specialization',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Area of specialization', type: 'string' }),
    defineField({ name: 'description', title: 'Short description', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Display order', type: 'number', description: 'Lower numbers appear first.' }),
  ],
})
