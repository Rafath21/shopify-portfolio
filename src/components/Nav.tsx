"use client";

import React, { useState } from 'react';
import Link from 'next/link';
// Import email icon
import { FaEnvelope } from 'react-icons/fa';
// Import hamburger/close icons
import { FaBars, FaTimes } from 'react-icons/fa';

// TODO: Add social icons (GitHub, LinkedIn, etc.)
const Nav = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // Reverted Nav styles to original dark theme
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex-shrink-0">
             <Link href="/" className="text-xl font-bold text-slate-200 hover:text-white">
               Rafath Unnisa
             </Link>
             {/* TODO: Replace with your actual name or logo */}
          </div>

          {/* Right side: Navigation Links */}
          <div className="hidden md:block">
            {/* Combine nav links and email icon */}
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/#about" className="text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/#experience" className="text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Experience
              </Link>
              <Link href="/#skills" className="text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Skills
              </Link>
              {/* Email Icon Link */}
              <a 
                href="mailto:rafathsweb@gmail.com"
                aria-label="Email Rafath Unnisa"
                title="Email Rafath Unnisa"
                className="text-slate-300 hover:text-white p-2 rounded-md"
              >
                <span className="sr-only">Email</span>
                <FaEnvelope className="h-5 w-5" /> { /* Adjusted size */ }
              </a>
            </div>
          </div>
          {/* Mobile Menu Button */}
           <div className="-mr-2 flex md:hidden">
             <button 
               type="button" 
               onClick={toggleMobileMenu}
               className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white" 
               aria-controls="mobile-menu" 
               aria-expanded={isMobileMenuOpen}
             >
               <span className="sr-only">Open main menu</span>
               {/* Toggle icon based on state */}
               {isMobileMenuOpen ? (
                  <FaTimes className="block h-6 w-6" aria-hidden="true" />
               ) : (
                  <FaBars className="block h-6 w-6" aria-hidden="true" />
               )}
             </button>
           </div>
        </div>
      </div>

      {/* Mobile menu - Conditionally apply 'block' or 'hidden' */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 border-t border-slate-700">
          <Link href="/#about" className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>About</Link>
          <Link href="/#experience" className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Experience</Link>
          <Link href="/#skills" className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Skills</Link>
          <a 
            href="mailto:rafathsweb@gmail.com"
            className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-label="Email Rafath Unnisa"
            onClick={toggleMobileMenu}
          >
             Email Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav; 