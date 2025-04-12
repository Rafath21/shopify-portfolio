import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="mb-4 scroll-mt-24 md:mb-6 lg:mb-8 lg:scroll-mt-24" aria-label="Work experience">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl mb-4">
          Experience
        </h2>
        <ol className="group/list">
          {/* === First Experience Item (Kite) === */}
          <li className="mb-6">
            <a 
              href="https://apps.shopify.com/kite-free-gift" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 hover:!opacity-100 lg:group-hover/list:opacity-50"
              aria-label="Kite Shopify App (opens in a new tab)"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to 2025">
                2024 — 2025 
                <div className="mt-1 normal-case font-semibold text-sm text-teal-300">
                  Kite
                </div>
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  Discounting App Powered By Shopify Functions 
                </h3>
                <p className="mt-2 text-sm leading-normal">
                   Kite is a game-changer for Shopify merchants, and I&apos;m proud to have played a key role in its development. Leading the Custom Functions feature built with Rust, I tackled niche, complex challenges to deliver highly tailored solutions that merchants love. Hundreds of stores now rely on Kite&apos;s seamless Shopify API integration, and once they&apos;re onboarded, they never look back. My work focused on crafting clean, efficient code to ensure a flawless experience, helping merchants unlock new possibilities for their businesses.
                </p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Shopify Functions
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Rust
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </li>
          {/* === Second Experience Item (GiftKart) === */}
          <li className="mb-6">
            <a 
              href="https://apps.shopify.com/giftkart"
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 hover:!opacity-100 lg:group-hover/list:opacity-50"
              aria-label="GiftKart Shopify App (opens in a new tab)"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2022 to 2025">
                2022 — 2025 
                <div className="mt-1 normal-case font-semibold text-sm text-teal-300">
                   GiftKart
                </div>
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  GiftKart & Cashbacks
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Giftkart transforms how Shopify merchants handle gift cards and cashbacks, with seamless Klaviyo integration that elevates personalized email campaigns. I played a key role in developing this app, particularly building the Issue Gift Cards in Bulk feature. This tool lets merchants customize branding and effortlessly manage abandoned checkouts, refunds, and store credits. By leveraging clean code and Shopify APIs, I helped create a reliable, daily go-to solution that empowers merchants to boost engagement and grow their stores.
                </p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Gift Cards
                    </div>
                  </li>
                   <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Store Credit
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Klaviyo
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Bulk Operations
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Shopify APIs
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </li>
           {/* === Third Experience Item (Checkout Wizard) === */}
          <li className="mb-6">
            <a 
              href="https://apps.shopify.com/checkout-pro"
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 hover:!opacity-100 lg:group-hover/list:opacity-50"
              aria-label="Checkout Wizard Shopify App (opens in a new tab)"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2023 to 2025">
                2023 — 2025 
                <div className="mt-1 normal-case font-semibold text-sm text-teal-300">
                  Checkout Wizard
                </div>
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  Checkout Wizard App
                </h3>
                <p className="mt-2 text-sm leading-normal">
                   Checkout Wiz is a merchant favorite, empowering Shopify Plus stores to customize checkouts with endless conditions for a tailored experience. I led the development of this app, harnessing Shopify API integration to solve unique merchant challenges. My work helped countless Plus merchants enhance their checkout flows, drive higher conversions, and streamline operations. By focusing on merchant needs, I built a tool that transforms e-commerce workflows and keeps stores thriving daily.
                </p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Checkout Extensibility
                    </div>
                  </li>
                   <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Shopify Plus
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      React
                    </div>
                  </li>
                   <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Shopify APIs
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </li>
          {/* === Fourth Experience Item (Easy Bundles) === */}
          <li className="mb-6">
            <a 
              href="https://apps.shopify.com/bundle-builder" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 hover:!opacity-100 lg:group-hover/list:opacity-50"
              aria-label="Easy Bundles Shopify App (opens in a new tab)"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2022 to 2023">
                2022 — 2023 
                <div className="mt-1 normal-case font-semibold text-sm text-teal-300">
                  Easy Bundles
                </div>
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  Easy Bundles Builder App
                </h3>
                <p className="mt-2 text-sm leading-normal">
                   Easy Bundles transforms Shopify stores with a powerful bundle builder that delivers instant ROI through endless customization options. I led the development of the full-page bundle builder pages, harnessing Shopify API integration to create seamless, engaging experiences. My work empowered merchants to craft tailored bundles that boost sales and captivate customers. Easy Bundles has become a daily driver for stores looking to elevate their growth and streamline product offerings.
                </p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Bundles
                    </div>
                  </li>
                   <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Shopify APIs
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Storefront
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </li>
        </ol>
        {/* <div className="mt-12">
          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
            <span>
              View Full <span className="inline-block">Résumé</span>
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;