export default {
  name: 'aboutSlimjet',
  title: 'aboutSlimjet',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'body',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'mainImage',
      title: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}