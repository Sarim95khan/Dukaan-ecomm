'use client';
import CartItemCard from '@/components/CartItemCard';
import Checkout from '@/components/Checkout';
import { totalPriceSelector } from '@/store/feature/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import React, { useEffect } from 'react';

const CartPage = () => {
  const totalPrice = useAppSelector(totalPriceSelector);
  const cartItem = useAppSelector((state) => state.cart.cartItems);

  // to store persist data
  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cartItem]);
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-4 items-center py-2 px-10 font-bold mt-4 border shadow-lg">
        <p>Image</p>
        <p>Name</p>
        <p>Counter</p>
        <p>Price</p>
      </div>
      {cartItem.map((item) => (
        <CartItemCard key={item.product._id} cartItem={item} />
      ))}
      {cartItem.length > 0 ? (
        <div>
          <p className="px-10 py-4 text-2xl shadow-md">
            Total Price : <span>{totalPrice}</span>
          </p>
          <Checkout item={cartItem} />
        </div>
      ) : (
        <p className="px-10 py-4 text-2xl shadow-md">Cart is Empty</p>
      )}
    </div>
  );
};

export default CartPage;
