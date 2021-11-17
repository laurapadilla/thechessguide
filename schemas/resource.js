export default {
  name: "resource",
  title: "Resource",
  type: "object",
  fields: [
    {
      name: "resourceName",
      title: "Resource Name",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
  options: {
    hotspot: true,
  },
};
