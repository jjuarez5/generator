// src/pages/About.jsx
import React from 'react';
import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-16 sm:px-6 md:px-8 bg-gray-100 text-center"
    >
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          About Us
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          We create high-converting, visually appealing websites tailored to your business goals.
          Let us handle the tech so you can focus on growth.
        </p>
      </div>
    </section>
  </Layout>
);

export default About;
