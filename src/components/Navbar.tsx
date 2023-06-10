'use client';
import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '@/store/slice/cartSlice';
import { RootState } from '@/store/store';

const NavBar = () => {
  const cartValue = useSelector(
    (state: RootState) => state.counterReducer.totalQuantity
  );
  return (
    <div className="sticky top-0 bg-gray-200 flex justify-between items-center max-w-7xl px-10 py-4 shadow-md">
      <Link href="/">
        <h3 className="text-2xl font-bold">Dukaan</h3>
      </Link>
      <div className="hidden md:flex justify-between items-center font-semibold gap-x-10">
        <Link href={'/'}>
          <span>Home</span>
        </Link>
        <span>Products</span>
        <span>Category</span>
        <Link href={'/cart'}>
          <span>Cart</span>
          {cartValue}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
