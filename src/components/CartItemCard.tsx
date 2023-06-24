import { CartItems } from '@/interfaces';
import Image from 'next/image';
import React, { FC } from 'react';
import { urlForImage } from '../../sanity/lib/image';
import QtyBtn from './QtyBtn';
import { useAppDispatch } from '@/store/store';
import { cartActions } from '@/store/feature/cartSlice';

interface Props {
  cartItem: CartItems;
}

const CartItemCard: FC<Props> = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-4 items-center px-10 py-2 border-b mt-2 ">
      <Image
        src={urlForImage(cartItem.product.productImage).url()}
        alt="Image"
        width={200}
        height={150}
        className="rounded-md"
      />
      <p>{cartItem.product.productName}</p>
      <div className="flex flex-col justify-center items-center ">
        <p>${cartItem.product.productPrice}</p>
        <p>&#xd7;</p>
        <QtyBtn
          onIncrease={() => dispatch(cartActions.increment(cartItem.product))}
          onDecrease={() => dispatch(cartActions.decrement(cartItem.product))}
          qty={cartItem.qty}
        />
      </div>
      <p>{cartItem.qty * cartItem.product.productPrice}</p>
    </div>
  );
};

export default CartItemCard;
