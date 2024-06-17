'use client';
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-700 py-20 px-6 relative overflow-hidden">
      
      <div className="relative z-10 max-w-4xl mx-auto text-center text-black">
        <h1 className="text-6xl font-bold mb-4">Subscribe to Our Newsletter</h1>
        <p className="mb-8">
          Stay updated with the latest news, offers, and insights directly in your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center items-center w-full max-w-lg mx-auto mb-6">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none w-full"
          />
          <button type="submit" className="bg-white text-gray-800 px-6 py-2 rounded-lg">
            Subscribe
          </button>
        </form>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-2xl"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-2xl"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-2xl"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-2xl"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
