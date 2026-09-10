"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/animation";
import { Laptop, Users, Palette, ArrowRight, Wifi, Coffee, Zap, Calendar, Mic, Brush } from "lucide-react";

const spaces = [
  {
    id: "work",
    label: "Work",
    icon: Laptop,
    title: "Your Office, Reimagined",
    subtitle: "Productivity meets great coffee",
    description:
      "Ditch the sterile cubicle. BrewVerse Work Spaces offer high-speed WiFi, standing desks, private nooks, and unlimited pour-overs — all in a space designed to help you flow. Whether you're a freelancer, a founder, or a remote worker, this is where your best work happens.",
    image: "/images/space-work.png",
    features: [
      { icon: Wifi, label: "1Gbps WiFi" },
      { icon: Coffee, label: "Unlimited Coffee" },
      { icon: Zap, label: "Power Outlets Everywhere" },
    ],
    color: "from-forest to-sage",
  },
  {
    id: "meet",
    label: "Meet",
    icon: Users,
    title: "Where Connections Brew",
    subtitle: "Community over competition",
    description:
      "BrewVerse isn't just a coffee shop — it's a living room for your city. Book our lounge for a book club, host a meetup, or just slide into a conversation with the person next to you. We believe the best ideas start with \"Hey, what are you drinking?\"",
    image: "/images/space-meet.png",
    features: [
      { icon: Calendar, label: "Event Hosting" },
      { icon: Users, label: "Community Nights" },
      { icon: Mic, label: "Open Mic Fridays" },
    ],
    color: "from-latte to-espresso",
  },
  {
    id: "create",
    label: "Create",
    icon: Palette,
    title: "Fuel Your Creativity",
    subtitle: "Art, music, and everything in between",
    description:
      "Our Creator Spaces are designed for the dreamers, the makers, and the rebels. Sketch, paint, write, code — whatever your medium, we've got the space, the vibe, and the caffeine to keep your creative fire burning. Monthly artist residencies and gallery nights included.",
    image: "/images/space-create.png",
    features: [
      { icon: Brush, label: "Art Supplies" },
      { icon: Palette, label: "Gallery Nights" },
      { icon: Zap, label: "Artist Residencies" },
    ],
    color: "from-sage to-matcha",
  },
];

export function SpacesSection() {
  const [activeSpace, setActiveSpace] = useState(spaces[0]);

  return (
    <section className="section-padding bg-cream" id="spaces-section">
      <div className="container-bv">
        {/* Section Header */}
        <FadeIn className="text-center mb-12 lg:mb-16">
          <span className="inline-block font-accent italic text-sage text-lg mb-3">
            Beyond the Cup
          </span>
          <h2 className="text-espresso mb-5">
            Spaces That <span className="text-gradient">Inspire</span>
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto text-base lg:text-lg">
            BrewVerse is more than coffee. It&apos;s a workspace, a meeting
            point, and a creative studio — all under one roof.
          </p>
        </FadeIn>

        {/* Tab Buttons */}
        <FadeIn delay={0.1} className="flex justify-center mb-10 lg:mb-14">
          <div className="inline-flex bg-oat rounded-full p-1.5 shadow-sm">
            {spaces.map((space) => (
              <button
                key={space.id}
                onClick={() => setActiveSpace(space)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-400 ${
                  activeSpace.id === space.id
                    ? "bg-forest text-white shadow-md"
                    : "text-charcoal/60 hover:text-forest"
                }`}
                id={`space-tab-${space.id}`}
              >
                <space.icon className="w-4 h-4" />
                {space.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Active Space Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSpace.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14"
          >
            {/* Image */}
            <div className="w-full lg:w-3/5">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={activeSpace.image}
                  alt={activeSpace.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${activeSpace.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                />

                {/* Feature pills floating on image */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {activeSpace.features.map((feature) => (
                    <div
                      key={feature.label}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-cream/90 backdrop-blur-sm rounded-full text-xs font-semibold text-espresso shadow-sm"
                    >
                      <feature.icon className="w-3.5 h-3.5 text-forest" />
                      {feature.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-2/5">
              <div className="flex items-center gap-2 mb-3">
                <activeSpace.icon className="w-5 h-5 text-sage" />
                <span className="text-sage text-sm font-semibold uppercase tracking-wider">
                  {activeSpace.subtitle}
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-espresso mb-5">
                {activeSpace.title}
              </h3>

              <p className="text-charcoal/60 leading-relaxed mb-8">
                {activeSpace.description}
              </p>

              <a
                href="/spaces"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-forest text-white font-semibold rounded-full hover:bg-forest/90 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                Explore {activeSpace.label} Spaces
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
