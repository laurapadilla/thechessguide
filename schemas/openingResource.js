export default {
  name: 'openingResource',
  title: 'Opening Resource',
  type: 'object',
  fields: [
    {
      name: 'thumb',
      title: 'Thumbnail',
      type: 'image',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
  options: {
    hotspot: true,
  },
};
