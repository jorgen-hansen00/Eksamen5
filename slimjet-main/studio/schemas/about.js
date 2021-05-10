export default {
  name: 'about',
  title: 'employees',
  type: 'document',
  fields: [
          {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'navn',
      title: 'Navn',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'portrettbilde',
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