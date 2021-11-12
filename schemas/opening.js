export default {
  name: 'opening',
  title: 'Opening',
  type: 'document',
  fields: [
    {
      name: 'opening',
      title: 'Opening',
      type: 'string',
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'piece',
      title: 'Piece',
      type: 'string',
      options: {
        list: [
          { title: 'Black', value: 'black' },
          { title: 'White', value: 'white' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'moves',
      title: 'Moves',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'opening', maxLength: 100 },
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [{ type: 'openingResource' }],
    },
  ],
};
