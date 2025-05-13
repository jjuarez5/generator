// src/pages/Pricing.jsx
import React from 'react';
import Layout from '../components/Layout';

const Pricing = () => (
  <Layout>
    <section
      id="pricing"
      className="min-h-screen px-4 py-16 sm:px-6 md:px-8 bg-white text-center flex items-center justify-center"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Pricing Plans</h2>
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Starter Plan */}
          <div className="flex-1 border rounded-lg p-6 shadow text-left">
            <h3 className="text-xl font-semibold mb-3">Starter</h3>
            <p className="text-3xl font-bold mb-4">$299</p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li>✔ 1-page site</li>
              <li>✔ Contact form</li>
              <li>✔ Responsive design</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Choose Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="flex-1 border rounded-lg p-6 shadow text-left">
            <h3 className="text-xl font-semibold mb-3">Pro</h3>
            <p className="text-3xl font-bold mb-4">$599</p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li>✔ Multi-page site</li>
              <li>✔ SEO meta tags</li>
              <li>✔ Google Analytics integration</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
