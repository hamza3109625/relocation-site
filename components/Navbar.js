"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <div className="flex justify-end space-x-4">
            <PhoneNumberLink countryCode="+1" number="123-456-7890" />
            <span>|</span>
            <PhoneNumberLink countryCode="+44" number="987-654-3210" />
            <span>|</span>
            <PhoneNumberLink countryCode="+91" number="456-789-0123" />
          </div>
        </div>
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image
              src="/images/Logo3.png"
              alt="Logo"
              width={128}
              height={128}
              className="object-contain h-full"
            />
          </div>
          <div className="items-center hidden space-x-5 md:flex">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/about">ABOUT US</NavLink>
            <NavLink href="/contact">CONTACT US</NavLink>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/about">ABOUT US</NavLink>
            <NavLink href="/contact">CONTACT US</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

// Custom NavLink component to replace <a> tags
const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className={`text-gray-950 hover:text-orange-600 transition-all block px-3 py-2 rounded-md text-sm font-medium`}
    >
      {children}
    </Link>
  );
};

const PhoneNumberLink = ({ countryCode, number }) => {
  return (
    <a
      href={`tel:${countryCode}${number}`}
      className="transition-all text-gray-950 hover:text-orange-600"
    >
      {countryCode} {number}
    </a>
  );
};

export default Navbar;
