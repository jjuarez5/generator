// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
      <h1 className="text-2xl font-bold text-blue-600">YourBrand</h1>
      <nav className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-base">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link to="/gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
        <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
        <Link to="/testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;
