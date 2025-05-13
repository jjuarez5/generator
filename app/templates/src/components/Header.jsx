import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: replace with any icon lib

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">YourBrand</h1>
        <button
          className="sm:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className="hidden sm:flex gap-6 text-base">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="sm:hidden px-4 pb-4">
    <nav className="flex flex-col gap-4 text-base items-center text-center">
      <Link to="/" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
      <Link to="/about" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
      <Link to="/gallery" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Gallery</Link>
      <Link to="/pricing" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Pricing</Link>
      <Link to="/testimonials" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Testimonials</Link>
      <Link to="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
    </nav>
  </div>
)}

    </header>
  );
};

export default Header;
