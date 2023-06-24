import React from 'react';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h2 className="text-4xl text-gray-400 tracking-[7px]">
        Your Order is Confirmed
      </h2>
      <Link href={'/'}>
        <button className="p-4 bg-green-200">Return to Home</button>
      </Link>
    </div>
  );
};

export default SuccessPage;
