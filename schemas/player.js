export default {
  name: 'player',
  title: 'Player',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 100 },
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'fideTitle',
      title: 'FIDE Title',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'FIDE Rating',
      type: 'number',
    },
  ],
};
