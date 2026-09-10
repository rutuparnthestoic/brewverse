"use client";

import {
  HeroSection,
  BrandMarquee,
  FeaturedMenu,
  OurStorySection,
  SpacesSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* ============================================
          HERO — Cinematic parallax with word-by-word reveal
          ============================================ */}
      <HeroSection />

      {/* ============================================
          BRAND MARQUEE — Infinite scrolling brand values
          ============================================ */}
      <BrandMarquee />

      {/* ============================================
          FEATURED MENU — Signature drink cards
          ============================================ */}
      <FeaturedMenu />

      {/* ============================================
          OUR STORY — Alternating image/text + animated counters
          ============================================ */}
      <OurStorySection />

      {/* ============================================
          SPACES — Work / Meet / Create tabbed showcase
          ============================================ */}
      <SpacesSection />

      {/* ============================================
          TESTIMONIALS — Community voices carousel
          ============================================ */}
      <TestimonialsSection />

      {/* ============================================
          CTA — Find a Location + Join Rewards
          ============================================ */}
      <CTASection />
    </>
  );
}
