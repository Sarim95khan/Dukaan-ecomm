'use client';
import React, { FC } from 'react';

const Cartbutton: FC<{ item: any }> = ({ item }) => {
  const handleAddcart = async () => {
    await fetch('/api/cart', {
      method: 'POST',
      body: JSON.stringify({
        product_id: item,
      }),
    });
  };
  return (
    <div>
      <button onClick={handleAddcart} className="button-primary">
        Add to Cart
      </button>
    </div>
  );
};

export default Cartbutton;
