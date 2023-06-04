'use client';
import React, { FC } from 'react';

const Cartbutton: FC<{ product_id: string }> = ({ product_id }) => {
  const handleAddcart = async () => {
    await fetch('/api/cart', {
      method: 'POST',
      body: JSON.stringify({
        product_id: product_id,
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
