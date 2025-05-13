// src/pages/Home.jsx
import React from 'react';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <section className="min-h-screen bg-blue-600 text-white flex flex-col items-center justify-center text-center px-4 py-16 sm:px-6 md:px-8">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          We Build Websites That Convert
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
          Launch your online presence in days, not weeks.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-all text-base sm:text-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  </Layout>
);

export default Home;
