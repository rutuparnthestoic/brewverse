"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/animation";
import { Globe, TreePine, Heart, Sprout } from "lucide-react";

// Counter animation hook
function useCounter(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

const stats = [
  { value: 500, suffix: "+", label: "Locations Worldwide", icon: Globe },
  { value: 12, suffix: "", label: "Countries & Growing", icon: TreePine },
  { value: 100, suffix: "%", label: "Ethically Sourced", icon: Heart },
  { value: 50, suffix: "K+", label: "Community Members", icon: Sprout },
];

const storyBlocks = [
  {
    image: "/images/story-coffee-farm.png",
    alt: "Lush green coffee farm at golden hour",
    title: "Born from the Bean",
    text: "It started with a single question: what if coffee could be both extraordinary and ethical? In 2019, our founders traveled to the highlands of Ethiopia and Colombia, meeting farmers who poured generations of wisdom into every harvest. That journey became BrewVerse — a promise that every cup honors the hands that grew it.",
    accent: "Our roots run deep — from soil to soul.",
  },
  {
    image: "/images/story-barista.png",
    alt: "Barista crafting latte art",
    title: "Crafted by Artisans",
    text: "Our baristas aren't employees — they're artists. Each one undergoes 200+ hours of training in extraction science, latte art, and flavor profiling. We don't just make coffee; we choreograph an experience. From the grind to the pour, every step is intentional, every cup a canvas.",
    accent: "200+ hours of training per barista. Every pour is art.",
  },
];

export function OurStorySection() {
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.5 });

  return (
    <section className="bg-oat" id="our-story-section">
      {/* Section Header */}
      <div className="section-padding pb-0">
        <div className="container-bv text-center">
          <FadeIn>
            <span className="inline-block font-accent italic text-sage text-lg mb-3">
              Our Journey
            </span>
            <h2 className="text-espresso mb-5">
              More Than <span className="text-gradient">Coffee</span>
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto text-base lg:text-lg">
              From a dream in a small kitchen to a global movement — this is the
              story of how BrewVerse came to be.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Story Blocks — Alternating image/text */}
      <div className="section-padding">
        <div className="container-bv space-y-16 lg:space-y-24">
          {storyBlocks.map((block, index) => (
            <div
              key={block.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-16`}
            >
              {/* Image */}
              <FadeIn
                direction={index % 2 === 0 ? "left" : "right"}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src={block.image}
                    alt={block.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-700" />
                </div>
              </FadeIn>

              {/* Text */}
              <FadeIn
                direction={index % 2 === 0 ? "right" : "left"}
                delay={0.15}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-espresso mb-4">
                  {block.title}
                </h3>
                <p className="text-charcoal/65 leading-relaxed mb-6">
                  {block.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-matcha rounded-full" />
                  <p className="font-accent italic text-sage text-sm">
                    {block.accent}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Counters */}
      <div
        ref={counterRef}
        className="bg-forest py-16 lg:py-20"
      >
        <div className="container-bv">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cream/10 text-matcha mb-4 group-hover:bg-matcha/20 transition-colors duration-300">
                    <stat.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                    <CounterDisplay
                      value={stat.value}
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  </div>
                  <p className="text-cream/50 text-sm">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for counter display
function CounterDisplay({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const count = useCounter(value, 2000, isInView);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
