import React from 'react';

const NavBar = () => {
  return (
    <div className="sticky top-0 bg-gray-200 flex justify-between items-center max-w-7xl px-10 py-4 shadow-md">
      <h3 className="text-2xl font-bold">Dukaan</h3>
      <div className="hidden md:flex justify-between items-center font-semibold gap-x-10">
        <span>Home</span>
        <span>Products</span>
        <span>Category</span>
        <span>Cart</span>
      </div>
    </div>
  );
};

export default NavBar;
