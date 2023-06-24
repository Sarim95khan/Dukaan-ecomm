'use client';
import { CartItems } from '@/interfaces';
import getStripePromise from '@/lib/stripe';
import React, { FC } from 'react';

interface Props {
  item: CartItems[];
}

const Checkout: FC<Props> = ({ item }) => {
  const handleCheckout = async () => {
    const stripe = await getStripePromise();
    const response = await fetch('/api/stripe-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
      body: JSON.stringify(item),
    });
    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };
  return (
    <div className="flex items-center mt-2">
      <button
        className="bg-yellow-400 p-2 rounded-lg mx-auto w-1/3 shadow-sm hover:shadow-xl font-bold
    hover:scale-105 transition duration-300"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
