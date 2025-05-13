// src/pages/Testimonials.jsx
import React from 'react';
import Layout from '../components/Layout';

const Testimonials = () => (
  <Layout>
    <section
      id="testimonials"
      className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 md:px-8 text-center flex items-center justify-center"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded shadow text-left">
            <p className="italic mb-3 text-gray-800">
              “They built me a beautiful site in days. Super professional.”
            </p>
            <p className="font-semibold text-gray-900">— Jane D., Shopify Seller</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded shadow text-left">
            <p className="italic mb-3 text-gray-800">
              “I didn’t know where to start. This made it easy!”
            </p>
            <p className="font-semibold text-gray-900">— Omar B., Fitness Coach</p>
          </div>

          {/* Placeholder/CTA */}
          <div className="bg-white p-6 rounded shadow col-span-full text-center text-gray-500 italic mt-6">
            Google reviews integration coming soon...
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
