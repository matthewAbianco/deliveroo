export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of Dish",
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
    },
    {
      name: "price",
      type: "number",
      title: "Price in CAD",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Dish",
    },
  ],
}
