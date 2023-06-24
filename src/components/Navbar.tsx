'use client';
import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '@/store/store';
import { totalProductQtySelector } from '@/store/feature/cartSlice';

import CartBtn from './CartBtn';

const NavBar = () => {
  const totalQty = useAppSelector(totalProductQtySelector);

  return (
    <div className="sticky top-0 bg-gray-200 flex justify-between items-center max-w-7xl px-10 py-4 shadow-md">
      <Link href="/">
        <h3 className="text-2xl font-bold">Dukaan</h3>
      </Link>

      <div className="flex gap-x-10">
        <div className="hidden md:flex justify-evenly items-center font-semibold gap-x-10">
          <Link href={'/'}>
            <span>Home</span>
          </Link>
          <Link href={'/category/male'}>
            <span>Male</span>
          </Link>
          <Link href={'/category/female'}>
            <span>Female</span>
          </Link>
        </div>
        <Link href={'/cart'}>
          <CartBtn />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
