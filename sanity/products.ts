import { defineType } from 'sanity';
import { category } from './category';

export const products = defineType({
  name: 'product',
  title: 'Product Name',
  type: 'document',
  fields: [
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'productDescription',
      title: 'Product Description',
      type: 'text',
    },
    {
      name: 'productPrice',
      title: 'Product Price',
      type: 'number',
    },
    {
      name: 'productImage',
      title: 'Product Image',
      type: 'image',
    },
    {
      name: 'productCategory',
      title: 'Product Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
});
