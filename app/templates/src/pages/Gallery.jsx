// src/pages/Gallery.jsx
import React from 'react';
import Layout from '../components/Layout';

const images = [
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
];

const Gallery = () => (
  <Layout>
    <section
      id="gallery"
      className="min-h-screen px-4 py-16 sm:px-6 md:px-8 bg-white text-center"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-10">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="w-full h-auto rounded shadow object-cover"
          />
        ))}
      </div>
    </section>
  </Layout>
);

export default Gallery;
