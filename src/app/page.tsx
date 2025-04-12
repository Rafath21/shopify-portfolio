import React from 'react';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
// import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="flex flex-col pt-24 lg:pt-0"> {/* Adjusted padding for consistency */}
      <About />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      {/* Simple text footer */}
      <footer className="mt-16 mb-4 text-sm text-slate-500">
         <p className="text-center">Built by Rafath with Next.js & Tailwind CSS. Inspired by Brittany Chiang.</p>
         {/* TODO: Replace Your Name */}
         {/* TODO: Add link to Brittany Chiang's site? */}
      </footer>
    </div>
  );
}