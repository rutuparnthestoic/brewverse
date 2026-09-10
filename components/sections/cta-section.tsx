"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Gift, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animation";

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      id="cta-section"
      style={{
        background:
          "linear-gradient(135deg, #064E3B 0%, #1a5c3a 40%, #10B981 100%)",
      }}
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Circles */}
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-cream/5"
          style={{ animation: "spin-slow 30s linear infinite" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border border-cream/5"
          style={{ animation: "spin-slow 40s linear infinite reverse" }}
        />

        {/* Glow blobs */}
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-15"
          style={{
            background: "radial-gradient(circle, #A7F3D0, transparent)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full blur-[80px] opacity-10"
          style={{
            background: "radial-gradient(circle, #D97706, transparent)",
            animation: "float 6s ease-in-out infinite 2s",
          }}
        />

        {/* Scattered coffee bean shapes */}
        {[
          { top: "15%", left: "8%", size: 12, rotate: 30, delay: 0 },
          { top: "70%", left: "15%", size: 8, rotate: -45, delay: 1 },
          { top: "25%", left: "85%", size: 10, rotate: 60, delay: 2 },
          { top: "80%", left: "75%", size: 14, rotate: -20, delay: 0.5 },
          { top: "50%", left: "92%", size: 6, rotate: 110, delay: 1.5 },
        ].map((bean, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cream/8"
            style={{
              top: bean.top,
              left: bean.left,
              width: bean.size,
              height: bean.size * 1.6,
              transform: `rotate(${bean.rotate}deg)`,
              animation: `float ${5 + i}s ease-in-out infinite ${bean.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-bv text-center">
        <FadeIn>
          <span className="inline-block font-accent italic text-matcha/80 text-lg mb-4">
            Ready to join the movement?
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-cream text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Your Next Favorite
            <br />
            <span className="text-matcha">Cup Awaits</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-cream/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Walk in, grab a seat, and let us take care of the rest. Whether
            you&apos;re here for the coffee, the WiFi, or the community — you
            belong here.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/locations"
              className="group flex items-center gap-2.5 px-8 py-4 bg-cream text-forest font-semibold rounded-full hover:bg-matcha hover:text-forest transition-all duration-400 shadow-lg hover:shadow-xl"
              id="cta-locations"
            >
              <MapPin className="w-4 h-4" />
              Find a Location
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#rewards"
              className="group flex items-center gap-2.5 px-8 py-4 border-2 border-cream/30 text-cream font-semibold rounded-full hover:bg-cream/10 hover:border-matcha/50 transition-all duration-400"
              id="cta-rewards"
            >
              <Gift className="w-4 h-4 text-matcha" />
              Join BrewVerse Rewards
            </Link>
          </div>
        </FadeIn>

        {/* Trust badges */}
        <FadeIn delay={0.5}>
          <div className="flex items-center justify-center gap-8 mt-14 text-cream/30 text-xs uppercase tracking-widest">
            <span>500+ Locations</span>
            <span className="text-matcha/40">•</span>
            <span>12 Countries</span>
            <span className="text-matcha/40">•</span>
            <span>100% Ethical</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
