import React from 'react';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
// Icons for social links
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'; // Using fa6 for newer X icon
// import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="flex flex-col pt-24 lg:pt-0"> {/* Adjusted padding for consistency */}
      <About />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      {/* Updated Footer */}
      <footer className="mt-16 mb-4 text-sm text-center text-slate-500">
        {/* Social Links Container */}
        <div className="flex justify-center gap-6 mb-4">
          <a 
            href="https://www.linkedin.com/in/rafath-unnisa-45b0bb227/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="block hover:text-slate-200 transition-colors duration-300"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://x.com/rafathsweb" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter) (opens in a new tab)"
            className="block hover:text-slate-200 transition-colors duration-300"
          >
            <span className="sr-only">X (formerly Twitter)</span>
             {/* Using FaXTwitter from fa6 */}
            <FaXTwitter className="h-6 w-6" /> 
          </a>
        </div>
         {/* Copyright Text */}
         <p>Built by Rafath Unnisa with Next.js & Tailwind CSS.</p>
         {/* Optional: Add link to inspiration site */}
         {/* <p>Inspired by Brittany Chiang.</p> */}
      </footer>
    </div>
  );
}