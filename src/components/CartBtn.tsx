'use client';
import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useAppSelector } from '@/store/store';
import { totalProductQtySelector } from '@/store/feature/cartSlice';

const CartBtn = () => {
  const totalQty = useAppSelector(totalProductQtySelector);
  return (
    <div className="relative">
      <ShoppingCartIcon className="w-10 h-10" />
      {!!totalQty && (
        <div
          key={totalQty}
          className="flex justify-center items-center bg-red-500 rounded-full absolute -top-2 -right-2 w-6 text-white
        animate-pingOnce"
        >
          {totalQty}
        </div>
      )}
    </div>
  );
};

export default CartBtn;
