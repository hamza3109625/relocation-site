"use client";
import React, { useState } from "react";
import Reveal from "../Reveal";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    setEmail("");
  };

  return (
    <div className="relative px-6 py-20 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-700">
      <div className="relative z-10 max-w-4xl mx-auto text-center text-black">
        <Reveal className="mb-4 text-6xl font-bold">
          Subscribe to Our Newsletter
        </Reveal>
        <Reveal className="mb-8">
          Stay updated with the latest news, offers, and insights directly in
          your inbox.
        </Reveal>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center w-full max-w-lg mx-auto mb-6"
        >
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 text-gray-800 bg-white rounded-lg"
          >
            Subscribe
          </button>
        </form>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-2xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-2xl">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
