"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animation";
import {
  Leaf,
  Heart,
  Coffee,
  Lightbulb,
  ArrowDown,
  MapPin,
  TreePine,
  Sprout,
  Globe,
} from "lucide-react";

/* ============================================
   TIMELINE DATA
   ============================================ */
const timelineEvents = [
  {
    year: "2019",
    title: "The Spark",
    description:
      "Our founders embarked on a journey through the highlands of Ethiopia and Colombia, meeting farmers who poured generations of wisdom into every harvest. That trip planted the seed for BrewVerse.",
    image: "/images/story-coffee-farm.png",
    alt: "Coffee farm in the highlands at golden hour",
  },
  {
    year: "2020",
    title: "The First Roast",
    description:
      "In a small Portland warehouse, we set up our first roaster. 200 test batches later, we perfected our signature profile — smooth, complex, and unforgettable. The craft was born.",
    image: "/images/story-roasting.png",
    alt: "Coffee roasting facility with copper drum roaster",
  },
  {
    year: "2021",
    title: "Doors Open",
    description:
      "Our first BrewVerse café opened in Portland's Pearl District. Within weeks, the word was out: this wasn't just another coffee shop. It was a community.",
    image: "/images/story-barista.png",
    alt: "Barista crafting latte art in the cafe",
  },
  {
    year: "2023",
    title: "The Movement Grows",
    description:
      "50 locations across 5 countries. Creator Spaces. Open Mic Fridays. Artist residencies. BrewVerse became more than coffee — it became a lifestyle.",
    image: "/images/story-community.png",
    alt: "Community gathering event at BrewVerse",
  },
  {
    year: "2026",
    title: "500 and Beyond",
    description:
      "Today, 500+ locations in 12 countries. 100% ethically sourced. Zero-waste certified. And we're just getting started. The next chapter is yours to write.",
    image: "/images/story-cup-closeup.png",
    alt: "Perfect latte art in a ceramic cup",
  },
];

/* ============================================
   VALUES DATA
   ============================================ */
const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Zero-waste certified, 100% compostable packaging, and carbon-neutral shipping. We believe great coffee shouldn't cost the planet.",
    color: "bg-matcha/15 text-forest",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "Every BrewVerse is a gathering place. Free WiFi, event spaces, and Open Mic nights — because connection is our secret ingredient.",
    color: "bg-latte/20 text-espresso",
  },
  {
    icon: Coffee,
    title: "Craft",
    description:
      "Single-origin beans, 200+ hours of barista training, and an obsessive attention to detail. Every cup is a masterpiece.",
    color: "bg-sage/15 text-forest",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "From AI-powered flavor profiling to our app-based order system, we use technology to make your experience seamless.",
    color: "bg-forest/10 text-forest",
  },
];

/* ============================================
   JOURNEY MAP DOTS
   ============================================ */
const journeySteps = [
  { label: "Farm", icon: Sprout, description: "Ethically sourced from smallholder farms" },
  { label: "Import", icon: Globe, description: "Direct trade, no middlemen" },
  { label: "Roast", icon: Coffee, description: "Small-batch roasted in Portland" },
  { label: "Store", icon: MapPin, description: "Delivered fresh to 500+ locations" },
  { label: "Cup", icon: Heart, description: "Crafted by trained barista artists" },
];

/* ============================================
   COMPONENT
   ============================================ */
export default function OurStoryPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  // Parallax on hero
  useGSAP(
    () => {
      if (!heroImageRef.current || !heroRef.current) return;
      gsap.to(heroImageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden"
        id="story-hero"
      >
        <div
          ref={heroImageRef}
          className="absolute inset-0 -top-[10%] -bottom-[10%]"
        >
          <Image
            src="/images/story-coffee-farm.png"
            alt="Lush green coffee farm at golden hour"
            fill
            className="object-cover"
            quality={90}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/90 z-10" />

        <div className="relative z-20 container-bv text-center text-cream pt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block font-accent italic text-gold text-lg mb-4"
          >
            From Seed to Sip
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-cream mb-5 max-w-3xl mx-auto"
          >
            Our <span className="text-matcha">Story</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-cream/65 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A dream that started in a small kitchen and grew into a global
            movement. This is how BrewVerse came to be — and where we&apos;re
            headed next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 text-cream/40 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          TIMELINE
          ============================================ */}
      <section className="section-padding bg-cream" id="timeline">
        <div className="container-bv">
          <FadeIn className="text-center mb-16 lg:mb-20">
            <span className="inline-block font-accent italic text-sage text-lg mb-3">
              Our Journey
            </span>
            <h2 className="text-espresso">
              The <span className="text-gradient">BrewVerse</span> Timeline
            </h2>
          </FadeIn>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-forest/10 lg:-translate-x-px" />

            <div className="space-y-12 lg:space-y-20">
              {timelineEvents.map((event, index) => (
                <TimelineItem
                  key={event.year}
                  event={event}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          VALUES
          ============================================ */}
      <section className="section-padding bg-oat" id="values">
        <div className="container-bv">
          <FadeIn className="text-center mb-14 lg:mb-18">
            <span className="inline-block font-accent italic text-sage text-lg mb-3">
              What We Stand For
            </span>
            <h2 className="text-espresso mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              These aren&apos;t just words on a wall — they&apos;re the compass that
              guides every decision we make.
            </p>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-cream rounded-2xl p-6 lg:p-8 h-full shadow-sm hover:shadow-md transition-shadow duration-300 group border border-forest/5">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${value.color} mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-espresso mb-3">
                    {value.title}
                  </h3>
                  <p className="text-charcoal/55 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ============================================
          BEAN JOURNEY MAP
          ============================================ */}
      <section className="section-padding bg-forest" id="journey-map">
        <div className="container-bv">
          <FadeIn className="text-center mb-14 lg:mb-18">
            <span className="inline-block font-accent italic text-matcha/70 text-lg mb-3">
              Farm to Cup
            </span>
            <h2 className="text-cream mb-4">
              The <span className="text-matcha">Journey</span> of a Bean
            </h2>
            <p className="text-cream/50 max-w-xl mx-auto">
              Every BrewVerse cup travels thousands of miles before it reaches
              your hands. Here&apos;s how we ensure perfection at every step.
            </p>
          </FadeIn>

          {/* Journey Steps */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-cream/15" />

            <StaggerChildren
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4"
              staggerDelay={0.12}
            >
              {journeySteps.map((step, index) => (
                <StaggerItem key={step.label}>
                  <div className="text-center group">
                    {/* Icon circle */}
                    <div className="relative inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-cream/10 border border-cream/10 text-matcha mb-4 group-hover:bg-matcha/20 group-hover:border-matcha/30 transition-all duration-500">
                      <step.icon className="w-8 h-8 lg:w-9 lg:h-9" strokeWidth={1.5} />
                      {/* Step number */}
                      <span className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 bg-matcha text-forest text-xs font-bold rounded-full">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-cream text-sm mb-1.5">
                      {step.label}
                    </h4>
                    <p className="text-cream/40 text-xs leading-relaxed max-w-[160px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================
   TIMELINE ITEM COMPONENT
   ============================================ */
function TimelineItem({
  event,
  index,
  isLeft,
}: {
  event: (typeof timelineEvents)[number];
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0 pl-12 lg:pl-0 ${
        isLeft ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 lg:left-1/2 top-2 lg:top-1/2 w-8 h-8 -translate-x-0 lg:-translate-x-1/2 lg:-translate-y-1/2 flex items-center justify-center z-10"
      >
        <div className="w-4 h-4 rounded-full bg-forest border-4 border-cream shadow-md" />
      </motion.div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full lg:w-[45%] ${isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}
      >
        <span className="inline-block px-3 py-1 bg-forest/5 text-forest text-xs font-bold rounded-full mb-3">
          {event.year}
        </span>
        <h3 className="text-xl lg:text-2xl font-heading font-bold text-espresso mb-3">
          {event.title}
        </h3>
        <p className="text-charcoal/60 text-sm leading-relaxed">
          {event.description}
        </p>
      </motion.div>

      {/* Spacer for center dot */}
      <div className="hidden lg:block lg:w-[10%]" />

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-[45%]"
      >
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md group">
          <Image
            src={event.image}
            alt={event.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-500" />
        </div>
      </motion.div>
    </div>
  );
}
