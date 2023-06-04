/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import { urlForImage } from '../../sanity/lib/image';

const Card: FC<{ item: any }> = ({ item }) => {
  return (
    <>
      <img
        src={urlForImage(item.productImage).url()}
        alt="Product Image"
        className="h-[200px] w-full max-h-[200px] mx-auto object-cover object-center rounded-xl"
      />
      <div className="text-left mt-4 px-2">
        <h3>Item : {item.productName}</h3>
        <h3>Price : ${item.productPrice}</h3>
        <h3>Category : {item.productCategory.name}</h3>
      </div>
      <div className="text-center">
        <button className="button-primary">Add to Cart</button>
      </div>
    </>
  );
};

export default Card;
