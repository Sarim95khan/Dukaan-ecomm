/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Image as IImage } from 'sanity';
import { client } from '../../../../sanity/lib/client';
import { urlForImage } from '../../../../sanity/lib/image';

type Props = {
  params: {
    id: string;
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

const Product = async ({ params: { id } }: Props) => {
  const res: [IIProduct] =
    await client.fetch(`*[_type=='product' && _id=='${id}']{
    productName,
    _id,
    productDescription,
    productPrice,
    productImage,
    productCategory ->{
      name
    }
  }`);
  console.log(res);

  return (
    <div className="max-w-7xl min-h-screen mx-auto p-10">
      {res.map((item) => {
        return (
          <div key={item._id} className="grid md:grid-cols-4 md:gap-x-4">
            <div className="col-span-2">
              <img
                src={urlForImage(item.productImage).url()}
                alt="Product Image"
                className=" mx-auto object-cover object-center rounded-xl"
              />
            </div>
            <div className="col-span-1">
              <h1>Item: {item.productName}</h1>
              <h1>Price: ${item.productPrice}</h1>
              <p>Category: {item.productCategory.name}</p>
              <p>Description: {item.productDescription}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
