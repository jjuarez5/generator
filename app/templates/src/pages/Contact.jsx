// src/pages/Contact.jsx
import React from 'react';
import Layout from '../components/Layout';

const Contact = () => (
  <Layout>
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-16 sm:px-6 md:px-8 bg-gray-100"
    >
      <div className="w-full max-w-lg">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          Contact Us
        </h2>
        <form className="space-y-4" name="contact" method="post">
          <input
            type="text"
            name="contactName"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded text-base sm:text-lg"
          />
          <input
            type="email"
            name="contactEmail"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded text-base sm:text-lg"
          />
          <input
            type="tel"
            name="contactPhone"
            placeholder="xxx-xxx-xxxx"
            className="w-full p-3 border border-gray-300 rounded text-base sm:text-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded h-32 text-base sm:text-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 text-base sm:text-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  </Layout>
);

export default Contact;
