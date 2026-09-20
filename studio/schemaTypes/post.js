import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog / Insight / Update',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: 'Click "Generate" — this becomes the web address of the post.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Blog (long-form article)', value: 'blog' },
          { title: 'Insight (short reflection)', value: 'insight' },
          { title: 'Update (news / project update)', value: 'update' },
          { title: 'News', value: 'news' },
        ],
        layout: 'radio',
      },
      initialValue: 'blog',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'excerpt', title: 'Short summary', type: 'text', rows: 2, description: 'Shown on the listing card.' }),
    defineField({ name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', title: 'Publish date', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
  ],
  orderings: [
    { title: 'Publish date, newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
})
