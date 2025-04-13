import React from 'react';
import Image from 'next/image'; // Re-added import

const About = () => {
  return (
    <section id="about" className="mb-4 scroll-mt-24 md:mb-6 lg:mb-8 lg:scroll-mt-24" aria-label="About me">
      <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl mb-4">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 items-start">
        <div className="md:col-span-2 leading-normal">
          <p className="mb-4">
            Hey, I&apos;m Rafath! I&apos;m a Shopify developer passionate about creating tools that empower e-commerce businesses to thrive. 
          </p>
          <p className="mb-4">
             With 3-4 years of experience, I&apos;ve helped build 
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
             Let&apos;s build something extraordinary together!
          </p>
        </div>
        <div className="md:col-span-2 pt-2 flex justify-center">
          <Image 
            src="/shopify_expert.jpg" 
            alt="Photo of Rafath Unnisa" 
            width={800} // Increased size significantly
            height={800} // Increased size significantly
            className="rounded-lg object-cover transition-all duration-300 group-hover:scale-105" 
            priority 
          />
          {/* Note: Ensure the actual file extension (.jpg, .png, etc.) matches the src path */}
        </div>
      </div>
    </section>
  );
};

export default About;

