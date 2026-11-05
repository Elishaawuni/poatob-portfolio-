import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'galleryItem',
  title: 'Gallery Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'title', title: 'Title (optional)', type: 'string' }),
    defineField({
      name: 'caption',
      title: 'Description (optional)',
      type: 'text',
      rows: 3,
      description: 'Where and when was this taken? What is happening in the photo?',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Conferences', 'Fieldwork', 'Teaching', 'Events', 'Awards', 'Other'],
      },
      initialValue: 'Events',
    }),
    defineField({
      name: 'date',
      title: 'Date taken (optional)',
      type: 'date',
      initialValue: () => new Date().toISOString().slice(0, 10),
    }),
  ],
  orderings: [
    { title: 'Newest first', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
    prepare: ({ title, subtitle, media }) => ({
      title: title || 'Untitled photo',
      subtitle,
      media,
    }),
  },
})