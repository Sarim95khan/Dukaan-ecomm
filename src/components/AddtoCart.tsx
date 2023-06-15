'use client';
import { Product } from '@/interfaces';
import { cartActions, productQtySelector } from '@/store/feature/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import QtyBtn from './QtyBtn';

interface Props {
  product: Product;
}
const AddtoCart: FC<Props> = ({ product }) => {
  const qty = useAppSelector((state) => productQtySelector(state, product._id));
  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <button
        onClick={() => dispatch(cartActions.increment(product))}
        className="button-primary "
      >
        Add to Cart
      </button>
    );
  return (
    <div>
      <QtyBtn
        onIncrease={() => dispatch(cartActions.increment(product))}
        onDecrease={() => dispatch(cartActions.decrement(product))}
        qty={qty}
      />
    </div>
  );
};

export default AddtoCart;
