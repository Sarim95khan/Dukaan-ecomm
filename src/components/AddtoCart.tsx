'use client';
import { counterActions } from '@/store/slice/cartSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const AddtoCart = () => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(counterActions.addToCart({ quantity: 1 }));
    toast.success('Item added successfully');
  };
  return (
    <div>
      <button onClick={addToCart} className="p-2 bg-yellow-400">
        Add to Cart
      </button>
    </div>
  );
};

export default AddtoCart;
