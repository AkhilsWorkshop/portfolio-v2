import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'github',
      title: 'Github',
      type: 'string',
    }),
    defineField({
      name: 'demo',
      title: 'Demo',
      type: 'string',
    }),
    defineField({
      name: 'mobileImg',
      title: 'MobileImg',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'desktopImg',
      title: 'DesktopImg',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [],
    }),
  ],
})
