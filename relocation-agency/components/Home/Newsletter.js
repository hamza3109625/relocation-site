'use client'
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    setEmail('');
  };

  return (
    
    <div className='bg-gradient-to-r from-blue-400 to-purple-600' style={{backgroundImage:"url(/images/orange.jpg)"}}>
    <div className="max-w-4xl mx-auto p-12 mt-6  ">
      <h1 className="text-3xl font-semibold text-white mb-6 text-center">Subscribe to Our Newsletter</h1>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none w-full"
        />
        <button type="submit" className="bg-white text-gray-800 px-6 py-2 rounded-r">
          Subscribe
        </button>
      </form>
    </div>
    </div>
  );
};

export default Newsletter;
