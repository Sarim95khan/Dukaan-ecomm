import React, { FC } from 'react';
import { Image as IImage } from 'sanity';
import { client } from '../../../../sanity/lib/client';

type Props = {
  params: {
    cat: string;
  };
};

interface IIProduct {
  productName: string;
  _id: string;
  productDescription: string;
  productPrice: number;
  productImage: IImage;
  productCategory: {
    name: string;
  };
}

const Category: FC<Props> = async ({ params: { cat } }) => {
  const category = cat;
//   const res: [IIProduct] =
//     await client.fetch(`*[_type=='product' && productCategory =='${category}']{
//           productName,
//           _id,
//           productDescription,
//           productPrice,
//           productImage,
//           productCategory ->{
//             name`
//           }
//         }`);

  console.log(category);
  return <div>Category:{category}</div>;
};

export default Category;
