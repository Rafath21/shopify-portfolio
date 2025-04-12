import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const About = () => {
  return (
    <section id="about" className="mb-8 scroll-mt-24 md:mb-12 lg:mb-16 lg:scroll-mt-24" aria-label="About me">
      <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl mb-8">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div className="md:col-span-2">
          <p className="mb-4">
            Hey, I'm Rafath! I'm a Shopify developer passionate about creating tools that empower e-commerce businesses to thrive. 
          </p>
          <p className="mb-4">
             With 3-4 years of experience, I've helped build 
             <a 
               href="https://apps.shopify.com/partners/skai-lama" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:underline focus-visible:underline"
             >
               <span className="font-medium text-teal-300"> 7 public Shopify apps</span>
             </a>
             , including standouts like Kite and Checkout Wizard, which seamlessly integrate Shopify APIs and serve hundreds of merchants. 
          </p>
          <p className="mb-4">
            I specialize in clean code, solving tough challenges, and delivering solutions that drive sales and streamline operations. My goal? To craft apps and customizations that perfectly match your vision.
          </p>
          <p>
             Let's build something extraordinary together!
          </p>
        </div>
        <div className="md:col-span-1">
          <div className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
             <span className="text-slate-400">Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

