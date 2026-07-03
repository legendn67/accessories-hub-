import { MessageCircle } from "lucide-react";
import { Marquee } from "../components/Marquee";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="animate-in fade-in duration-700 bg-surface">
      {/* Hero Marquee */}
      <Marquee
        inverted
        text="Wholesale Quality • Global Shipping • Premium Accessories • No Compromise • Honest Prices • Built For Everyone • "
      />

      {/* Editorial Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-padding flex flex-col md:flex-row items-end gap-16">
        <div className="w-full md:w-1/2">
          <h1 className="text-display-xl uppercase leading-none mb-12">
            Our <br /> Story
          </h1>
          <p className="font-body-lg text-body-lg md:text-[24px] md:leading-[36px] max-w-xl text-on-surface-variant">
            We are Accessories Hub — a wholesale mobile accessories brand built
            for quality without compromise. Wide range. Honest prices. Built for
            everyone.
          </p>
          <div className="mt-16 flex gap-4">
            <Link
              to="/shop"
              className="px-10 py-5 bg-primary text-on-primary rounded-full font-label-caps text-label-caps hover:bg-on-surface-variant transition-colors uppercase tracking-widest"
            >
              View Wholesale Catalog
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-lg shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQoG-6lpJxc35QzoikN-2Sxsskn5o1riDCV2CiOS10s8zxhRiGOUYbjal6PxwyB75Twh-ELjAQ7pCcM4Jy4C5bUCW50rVsda_tqKd5ca1EDm9eWHzvmd86o8LRbJTDatTYcmfWyrrPWa1PUjqVtQMjaW36WKELufj-4LfI4cves8jK13H2UTNBXGmEFJ65Vb_AoyZmvXjxXt3LPPfkvp0duCF1nR4DJg98VW7AE9lNXVMYjuvENh-X56w0ltMWQmrDRbD3ZtFVDo8"
              alt="Minimalist Desk Setup"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary text-on-primary py-section-padding px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-gutter">
          <div>
            <span className="font-label-caps text-label-caps text-primary-fixed-dim block mb-6 uppercase tracking-widest">
              01 — Quality
            </span>
            <h3 className="text-headline-md mb-4 leading-tight">
              Precision Engineering
            </h3>
            <p className="text-primary-fixed font-body-md text-body-md">
              Every accessory is tested to meet rigorous industrial standards,
              ensuring longevity and peak performance for retail partners
              worldwide.
            </p>
          </div>
          <div>
            <span className="font-label-caps text-label-caps text-primary-fixed-dim block mb-6 uppercase tracking-widest">
              02 — Value
            </span>
            <h3 className="text-headline-md mb-4 leading-tight">
              Honest Pricing
            </h3>
            <p className="text-primary-fixed font-body-md text-body-md">
              By removing the middleman, we provide wholesale pricing that allows
              businesses to scale without sacrificing their margins or quality.
            </p>
          </div>
          <div>
            <span className="font-label-caps text-label-caps text-primary-fixed-dim block mb-6 uppercase tracking-widest">
              03 — Reach
            </span>
            <h3 className="text-headline-md mb-4 leading-tight">
              Global Network
            </h3>
            <p className="text-primary-fixed font-body-md text-body-md">
              Operating at the intersection of logistics and design, we ship
              high-end mobile tech to every corner of the globe within record
              timeframes.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Layout: The Ecosystem */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="text-headline-lg-mobile md:text-headline-lg uppercase mb-4 leading-tight">
            The Ecosystem
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A curated selection of essentials designed to integrate seamlessly
            into modern digital life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-lg group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFIuEkwM0904ambms8E9lLLUAFxZwUlomzy28W_mp-JBBjT-GJI6jz0LFqXN7McnuO2jtTXIlLJQgxeoCfr42UmKjn0AJTLwLaiwy8LtPh_1AwMOgyMhJ8RA_7_YLR2vyxH1IMCxRkywa77o1hIJfBcbbbLm_hHd5bboFZ3LCcQmbVEcqjvzZh8VfZRDgNveJCgDKPUBqAFvv6LAP4uwVeh6r5FdrE30f2k9YIqu6obmTRMjUHk0ZtneRl_1pcq_VMnGFIYVwcPJI"
              alt="Power Delivery"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <span className="text-white/60 font-label-caps text-label-caps mb-2 uppercase tracking-widest">
                Power Delivery
              </span>
              <h4 className="text-white text-headline-md leading-tight">
                Durability First
              </h4>
            </div>
          </div>
          <div className="md:col-span-2 relative overflow-hidden rounded-lg group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMUkwg4ZoXwcWRhy-NbKVn9CrKC4zx7Lcid0k-2zqNrLcGz3QYo60qpK5EmOQpVSRZJn4E_DTEqkfH4Oh0-3kwUidWbgJwHHc_AyjBMtiAU6T68fQlOdLfTsHOfDO4nc2CpDaVzhtBvpTDp2atUDEiWZRlx0qefeXKogEtiB3_jFmECuCH0BIm3wfquvg5nINDjlQRbgcrTUYqKZoDGpOqLvGVALCV9iJXBM9y6wd5dbvoxkxdChhwtho2_WBQErIG_ODSre-dIyg"
              alt="Protection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <span className="text-white/60 font-label-caps text-label-caps mb-2 uppercase tracking-widest">
                Protection
              </span>
              <h4 className="text-white text-headline-md leading-tight">
                Impact Ready
              </h4>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Unbhr50AOoDR89ZK7mkeAd0_ANdrDiVx7vHhRdxgy2cglwXb78cKYV3m8lfhL0qmfn3Am2xyUfGdZtfdTTZH68kPE6W7-4NLgzCHbOgljEMrQBsg2kkf3dx6X-4mv6gRC1DsQJnkopNVUT1AKM9hLy7AEg3TdTP9_0y1bgFgXYbse_d7ZBB5-_mfRR5b2XoV04YiD5eU41v8OMoHv5vfk1P0_3FKyQCxlWCepg5YkQt3jS1W5Sqyw3ptnNZOtbn2QisVEOWlCLI"
              alt="Audio Elite"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h4 className="text-white font-label-caps text-label-caps uppercase tracking-widest">
                Audio Elite
              </h4>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmTr-buUdKj-PH4pvtBzOC55XZQLPX1Y6-IvSlu_nVAVW0PtZ5JXqS6My_SPzLjFKdn3oD-fAazrwAZl0rwtu5d4v9aPxKwLp5FTJi0rR8EofGeDk_l6oZlKFWD-J636VnBuxcOgSdyTFZTuGPKFma47AYwXz6qBwHRABxRccvfDNKavpYD4xWGpVbLtlqFupe36Nqke788eQ1SN1Ti2H3q5OINiLiZeFIip4ETgmhUShyMX2ie3vGESDPryBb2uuQ8cr7DuSBAj4"
              alt="Always Charged"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h4 className="text-white font-label-caps text-label-caps uppercase tracking-widest">
                Always Charged
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Strip */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop text-center">
        <h2 className="text-headline-lg-mobile md:text-headline-lg uppercase mb-8 leading-tight">
          Ready to Partner?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto">
          Contact our wholesale team directly for custom quotes and global
          shipping details.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 bg-whatsapp text-white px-12 py-5 rounded-full font-label-caps text-label-caps hover:scale-105 transition-transform active:scale-95 uppercase tracking-widest"
        >
          <MessageCircle />
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}
