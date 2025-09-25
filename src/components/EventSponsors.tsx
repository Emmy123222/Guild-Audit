/// <reference path="../types/global.d.ts" />
import React from "react";
import twitter from "../assets/twitter.svg";
import GuildAudit from "../assets/Auditing.png";

// Local wrapper to safely render legacy <marquee> element without TS intrinsic typing
const Marquee: React.FC<React.HTMLAttributes<HTMLElement> & { scrollAmount?: number; behavior?: string; direction?: string; }>
  = ({ children, ...rest }) => React.createElement('marquee' as any, rest, children);

export const EventSponsors: React.FC = () => {
  // A small list repeated twice inside the marquee to create an endless loop with no gaps
  const items = Array.from({ length: 6 }, (_, i) => ({
    id: `guild-audit-${i}`,
    name: "Guild Audit",
    logo: GuildAudit,
    twitter: "https://x.com/GuildAcademy_",
  }));

  return (
    <section className="w-full py-12 text-center mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-3xl font-bold tracking-tight text-black ">
          Event Sponsors
        </h2>
        <p className="mt-2 text-sm text-black ">
          A special thanks to our generous sponsors who make this event possible.
        </p>

        <div className="mt-6 relative overflow-hidden rounded-lg">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white  to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white  to-transparent z-10" />

          <Marquee behavior="scroll" direction="left" scrollAmount={10}>
            <div className="flex flex-nowrap items-stretch gap-12 py-6">
              {items.map((item) => (
                <div key={`s1-${item.id}`} className="w-56 min-w-[14rem] flex-none text-center shadow-md">
                  <div className="block rounded-xl bg-white shadow-sm hover:shadow-md transition overflow-hidden border border-gray-200">
                    <div className="flex items-center justify-center p-6">
                      <img src={item.logo} alt={item.name} className="h-24 w-auto object-contain" />
                    </div>
                  </div>
                  <div className="mt-3 font-semibold text-black">{item.name}</div>
                  <div className="mt-2 flex justify-center">
                    <a
                      href={item.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 flex items-center gap-1"
                      aria-label={`${item.name} Twitter`}
                    >
                      <img src={twitter} alt="Twitter" className="h-5 w-5" />
                      <span className="text-sm">@GuildAcademy_</span>
                    </a>
                  </div>
                </div>
              ))}

              {items.map((item) => (
                <div key={`s2-${item.id}`} className="w-56 min-w-[14rem] flex-none text-center shadow-md" aria-hidden="true">
                  <div className="block rounded-xl bg-white shadow-sm hover:shadow-md transition overflow-hidden border border-gray-200">
                    <div className="flex items-center justify-center p-6">
                      <img src={item.logo} alt={item.name} className="h-24 w-auto object-contain" />
                    </div>
                  </div>
                  <div className="mt-3 font-semibold text-black">{item.name}</div>
                  <div className="mt-2 flex justify-center">
                    <a
                      href={item.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 flex items-center gap-1"
                      aria-label={`${item.name} Twitter`}
                    >
                      <img src={twitter} alt="Twitter" className="h-5 w-5" />
                      <span className="text-sm">@GuildAcademy_</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default EventSponsors;
