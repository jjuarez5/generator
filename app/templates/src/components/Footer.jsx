// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6 text-center">
    <div className="text-sm">
      &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
    </div>
    <div className="mt-2 text-xs text-gray-400">
      Built with ❤️ using React + Tailwind CSS
    </div>
  </footer>
);

export default Footer;
