import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-800 text-white text-center">
      {/* Content from page.tsx moved here */}
      <p>© {new Date().getFullYear()} Rafath Unnisa. All rights reserved.</p>
      {/* TODO: Add links, social icons etc. */}
    </footer>
  );
};

export default Footer;
