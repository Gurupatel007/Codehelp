import React from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const {cart} = useSelector((state) => state);

  return (
    <header className="bg-white border-b">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
        <img 
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" 
            alt="ShopHub Logo" 
            className="h-10 w-10 mr-2"
          />
            <span className="text-xl font-semibold text-gray-800">ShopHub</span>
        </NavLink>

        <div className="flex items-center space-x-4">
          <NavLink to="/" className="text-gray-700 hover:text-gray-900 transition duration-300">
            <FaHome className="text-xl" />
          </NavLink>

          <NavLink to="/cart" className="text-gray-700 hover:text-gray-900 transition duration-300 relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {cart.length}
            </span>
          </NavLink>
          
        </div>
      </nav>
    </header>
  );
}

export default Navbar;