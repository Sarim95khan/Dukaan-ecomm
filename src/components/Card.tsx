/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import { urlForImage } from '../../sanity/lib/image';
import { Product } from '@/interfaces';

import Link from 'next/link';
import AddtoCart from './AddtoCart';

interface Props {
  item: Product;
}

const Card: FC<Props> = ({ item }) => {
  return (
    <div className="">
      <Link href={`/product/${item._id}`}>
        <img
          src={urlForImage(item.productImage).url()}
          alt="Product Image"
          className="h-[200px] w-full max-h-[200px] mx-auto object-cover object-center rounded-xl shadow-md
          hover:scale-105"
        />
      </Link>
      <div className="text-left mt-4 px-2">
        <h3>Item : {item.productName}</h3>
        <h3>Price : ${item.productPrice}</h3>
        <h3>Category : {item.productCategory.name}</h3>
      </div>
      <AddtoCart product={item} />
    </div>
  );
};

export default Card;
