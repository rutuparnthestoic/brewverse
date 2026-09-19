"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const words = ["Coffee", "Crafted", "to", "Perfection"];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // GSAP parallax on the background image
  useGSAP(
    () => {
      if (!imageRef.current || !sectionRef.current) return;

      gsap.to(imageRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Darken overlay on scroll
      gsap.to(overlayRef.current, {
        opacity: 0.85,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Parallax Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 -top-[15%] -bottom-[15%] z-0"
      >
        <Image
          src="/images/hero-bg.png"
          alt="BrewVerse cafe interior with warm lighting and cozy atmosphere"
          fill
          className="object-cover"
          quality={90}
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(45 28 21 / 0.75) 0%, rgba(45 28 21 / 0.55) 40%, rgba(45 28 21 / 0.7) 70%, rgba(45 28 21 / 0.95) 100%)",
        }}
      />

      {/* Floating ambient blobs */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{
            background: "radial-gradient(circle, #A7F3D0, transparent)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
          style={{
            background: "radial-gradient(circle, #D97706, transparent)",
            animation: "float 10s ease-in-out infinite 3s",
          }}
        />
        <div
          className="absolute top-[50%] right-[30%] w-[300px] h-[300px] rounded-full blur-[80px] opacity-10"
          style={{
            background: "radial-gradient(circle, #FFFFFF, transparent)",
            animation: "float 7s ease-in-out infinite 1.5s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-bv text-center text-cream px-4 pt-20">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block font-accent italic text-lg lg:text-xl text-gold mb-6">
            Where Every Sip Tells a Story
          </span>
        </motion.div>

        {/* Word-by-word heading reveal */}
        <h1 className="text-cream mb-8 max-w-5xl mx-auto flex flex-wrap justify-center gap-x-4 gap-y-1">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block ${
                word === "Perfection" ? "text-matcha" : ""
              }`}
              style={{ perspective: "600px" }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-cream/70 text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Not just a coffee shop — a movement. Ethically sourced, craft roasted,
          and served in spaces designed for you to create, connect, and thrive.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/menu"
            className="group relative px-8 py-4 bg-forest text-white font-semibold rounded-full overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl hover:bg-sage"
            id="hero-cta-menu"
          >
            <span className="relative z-10">Explore Our Menu</span>
          </Link>
          <Link
            href="/our-story"
            className="px-8 py-4 border-2 border-cream/30 text-cream font-semibold rounded-full hover:bg-cream/10 hover:border-cream/50 transition-all duration-400"
            id="hero-cta-story"
          >
            Our Story
          </Link>
        </motion.div>


      </div>
    </section>
  );
}
