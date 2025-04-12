import React from 'react';
import Image from 'next/image'; // Import Image if using Next.js Image component

const Projects = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl mb-8">
          Projects
        </h2>
        <ul className="group/list">
          {/* Placeholder Project Item - Repeat this structure */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    href="https://example.com" // Replace with project link
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Project Name (opens in a new tab)" // Replace with project name
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Placeholder Project Title {/* Replace with project name */}
                      {/* Optional Link Icon */}
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                  Placeholder project description. Short explanation of the project, its purpose, and your role. For example: Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
                  {/* TODO: Replace placeholder text */}
                </p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                   {/* Placeholder Tech Tags */}
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Node.js
                    </div>
                  </li>
                   <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Spotify API
                    </div>
                  </li>
                   {/* TODO: Add actual technologies */}
                </ul>
              </div>
              {/* Optional: Project Image */}
              {/* <Image alt="Placeholder project image" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color: "transparent"}} src="/path/to/your/image.png"/> */}
            </div>
          </li>
          {/* Add more <li/> items for other projects */}
        </ul>
        <div className="mt-12">
          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="/archive" aria-label="View Full Project Archive">
            <span>
              View Full Project <span className="inline-block">Archive{/* Arrow Icon */}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;