import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings & Bio',
  type: 'document',
  fields: [
    defineField({ name: 'fullName', title: 'Full name', type: 'string', initialValue: 'Dr. Samuel Poatob' }),
    defineField({ name: 'title', title: 'Title / Rank', type: 'string', initialValue: 'Senior Lecturer' }),
    defineField({ name: 'department', title: 'Department', type: 'string', initialValue: 'Department of Social Studies' }),
    defineField({ name: 'institution', title: 'Institution', type: 'string', initialValue: 'University of Education, Winneba (UEW), Ghana' }),
    defineField({ name: 'tagline', title: 'Homepage tagline', type: 'text', rows: 2, description: 'One or two sentences shown in the hero banner.' }),
    defineField({ name: 'profileImage', title: 'Profile photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Full biography', type: 'text', rows: 12, description: 'Separate paragraphs with a blank line.' }),
    defineField({
      name: 'researchInterests',
      title: 'Research interests',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Short list — one interest per line.',
    }),
    defineField({ name: 'email', title: 'Email address', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone number', type: 'string' }),
    defineField({ name: 'officeLocation', title: 'Office location', type: 'string' }),
    defineField({ name: 'officeHours', title: 'Office hours', type: 'string' }),
    defineField({ name: 'cvFile', title: 'CV (PDF upload)', type: 'file', options: { accept: '.pdf' } }),
    defineField({ name: 'availableForConsultancy', title: 'Currently available for consultancy?', type: 'boolean', initialValue: true }),
    defineField({
      name: 'socialLinks',
      title: 'Social / academic profile links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform (e.g. Google Scholar, ORCID, LinkedIn)', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    }),
  ],
})
