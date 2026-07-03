import { ArrowRight, Mail, MessageCircle, MapPin, Camera } from "lucide-react";
import { Marquee } from "../components/Marquee";

export default function Contact() {
  return (
    <div className="animate-in fade-in duration-700 bg-surface">
      {/* Hero Marquee */}
      <Marquee
        inverted
        text="Get In Touch • Wholesale Enquiries • Global Shipping • 24/7 Support • Premium Accessories • "
      />

      {/* Contact Section: Split Screen */}
      <section className="flex flex-col md:flex-row min-h-[819px]">
        {/* Visual Side */}
        <div className="hidden md:block md:w-1/2 relative overflow-hidden bg-surface-container">
          <div
            className="absolute inset-0 grayscale opacity-90 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZMC79bCaLCLYanvHu8hmurJykfhZg8hJ3EAczqCcq_Xg5V9k1Vi9ei6xEt4wRewxcKNKQpzrsjAYXGO2R6xGBf05POx43B7Cx76apQ2PY0AX2yZOXZQI3RdXKPQJuNRdpnG95e8RYj4lymP2oSbFlPg-Z9ewyJE8FD4ddrgiqtY2Us3LJEVscd2rdqGQRRi6pmPsgfTuII7fqADhI7Jw7DFRZKiObGRyoGDMzbg55uYl-24PV59xrYy2ZhFOpeokSp75BXLBTt8c')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          <div className="absolute bottom-margin-desktop left-margin-desktop text-on-primary">
            <p className="font-label-caps text-label-caps mb-2 uppercase tracking-widest">
              Established 2024
            </p>
            <h2 className="text-headline-lg max-w-md leading-tight">
              The Standard of Excellence.
            </h2>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-margin-mobile md:px-margin-desktop py-section-padding bg-surface">
          <span className="font-label-caps text-label-caps text-primary mb-stack-sm uppercase tracking-[0.25em]">
            Connect
          </span>
          <h1 className="text-headline-lg-mobile md:text-headline-lg text-primary mb-stack-lg leading-tight">
            Get in Touch
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-12 max-w-lg">
            Whether you are seeking wholesale partnerships or have a specific
            product inquiry, our concierge team is available to assist with your
            journey.
          </p>

          {/* Actions Container */}
          <div className="flex flex-col gap-6 w-full max-w-md">
            {/* WhatsApp Button */}
            <a
              href="#"
              className="group flex items-center justify-between bg-whatsapp text-on-primary rounded-full px-8 py-5 transition-transform active:scale-95 shadow-md"
            >
              <div className="flex items-center gap-4">
                <MessageCircle fill="white" />
                <span className="font-label-caps text-label-caps text-[14px] uppercase tracking-widest">
                  Chat on WhatsApp
                </span>
              </div>
              <ArrowRight className="transition-transform group-hover:translate-x-2" />
            </a>

            {/* Email & Instagram Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:hello@accessorieshub.com"
                className="flex flex-col p-6 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group"
              >
                <Mail className="text-primary mb-4" />
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
                  Email Us
                </span>
                <span className="text-on-surface-variant font-body-md mt-1 break-all">
                  hello@accessorieshub.com
                </span>
              </a>
              <a
                href="#"
                className="flex flex-col p-6 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group"
              >
                <Camera className="text-primary mb-4" />
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
                  Instagram
                </span>
                <span className="text-on-surface-variant font-body-md mt-1">
                  @accessories_hub
                </span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-outline-variant my-12"></div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-outline" />
              <div>
                <p className="font-body-md font-bold text-primary">
                  Global Headquarters
                </p>
                <p className="text-on-surface-variant text-body-md">
                  120 Fashion Avenue, 4th Floor
                  <br />
                  Design District, New York 10018
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Strip */}
      <section className="bg-primary text-on-primary py-24 px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-container-max mx-auto">
          <h3 className="text-headline-md mb-8">
            Join the inner circle for exclusive drops.
          </h3>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto items-center">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-transparent border-0 border-b-2 border-on-primary py-4 px-0 placeholder:text-primary-fixed-dim text-body-md focus:ring-0 focus:border-secondary-fixed transition-all outline-none"
            />
            <button
              type="button"
              className="bg-on-primary text-primary font-label-caps text-label-caps px-10 py-4 rounded-full hover:bg-secondary-fixed transition-colors w-full md:w-auto uppercase tracking-widest"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
