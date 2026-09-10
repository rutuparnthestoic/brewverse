"use client";

import { useRef } from "react";

const brandValues = [
  "Ethically Sourced",
  "Craft Roasted",
  "Community First",
  "Zero Waste",
  "Single Origin",
  "Oat Milk Standard",
  "Artist Friendly",
  "Plant Forward",
  "Local Roots",
  "Global Reach",
];

// Duplicate for seamless loop
const marqueeItems = [...brandValues, ...brandValues];

export function BrandMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative overflow-hidden bg-forest py-5 lg:py-6"
      id="brand-marquee"
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-forest to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-forest to-transparent z-10 pointer-events-none" />

      <div
        ref={containerRef}
        className="flex items-center whitespace-nowrap"
        style={{
          animation: "marquee 40s linear infinite",
          width: "max-content",
        }}
      >
        {marqueeItems.map((value, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-cream/80 text-sm lg:text-base font-medium tracking-wide px-6 lg:px-8">
              {value}
            </span>
            <span className="text-matcha text-lg">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
