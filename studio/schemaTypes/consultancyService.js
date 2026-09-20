import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'consultancyService',
  title: 'Consultancy Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Service title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: { list: ['book', 'mic', 'compass', 'chart', 'cap'] },
      description: 'book = curriculum, mic = speaking, compass = supervision, chart = evaluation, cap = general academic',
    }),
    defineField({ name: 'order', title: 'Display order', type: 'number' }),
  ],
})
