"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeIn } from "@/components/animation";

const testimonials = [
  {
    name: "Ava Chen",
    role: "Freelance Designer",
    text: "BrewVerse is my second office. The WiFi is blazing, the matcha is otherworldly, and I've met half my clients here. I don't just come for the coffee — I come for the energy.",
    rating: 5,
    initials: "AC",
    color: "bg-matcha/20 text-forest",
  },
  {
    name: "Marcus Williams",
    role: "Startup Founder",
    text: "We literally built our MVP at BrewVerse. The cold brew kept us alive through all-nighters, and the community events connected us with our first angel investor. This place is magic.",
    rating: 5,
    initials: "MW",
    color: "bg-latte/30 text-espresso",
  },
  {
    name: "Sophie Laurent",
    role: "Art Student",
    text: "The Creator Space changed my life. I had my first exhibition at a BrewVerse Gallery Night. Where else can you paint, drink incredible chai, and sell your art — all in one place?",
    rating: 5,
    initials: "SL",
    color: "bg-sage/20 text-forest",
  },
  {
    name: "James Okoye",
    role: "Remote Engineer",
    text: "I've worked from every coffee shop in Portland. BrewVerse is the only one where the music, lighting, and vibe are actually designed for deep work. And the espresso? Best in the city.",
    rating: 5,
    initials: "JO",
    color: "bg-forest/10 text-forest",
  },
  {
    name: "Priya Sharma",
    role: "Book Club Organizer",
    text: "Our book club has been meeting at BrewVerse for two years. They always set up the lounge perfectly for us, and the seasonal lattes give us something new to obsess over every month.",
    rating: 5,
    initials: "PS",
    color: "bg-matcha/15 text-forest",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="section-padding bg-oat" id="testimonials">
      <div className="container-bv">
        {/* Section Header */}
        <FadeIn className="text-center mb-12 lg:mb-16">
          <span className="inline-block font-accent italic text-sage text-lg mb-3">
            Community Voices
          </span>
          <h2 className="text-espresso mb-5">
            What Our <span className="text-gradient">People</span> Say
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto text-base lg:text-lg">
            Don&apos;t take our word for it — hear from the BrewVerse community.
          </p>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={0.15}>
          <div className="relative">
            {/* Embla Viewport */}
            <div ref={emblaRef} className="overflow-hidden rounded-2xl">
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 lg:pl-6"
                  >
                    <motion.div
                      initial={{ opacity: 0.5, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-cream rounded-2xl p-6 lg:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 border border-forest/5"
                    >
                      {/* Quote icon */}
                      <Quote className="w-8 h-8 text-matcha/40 mb-4" strokeWidth={1.5} />

                      {/* Stars */}
                      <div className="flex items-center gap-0.5 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-gold text-gold"
                          />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="text-charcoal/70 text-sm leading-relaxed flex-1 mb-6">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-forest/5">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold ${testimonial.color}`}
                        >
                          {testimonial.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-espresso">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-charcoal/50">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-cream shadow-lg border border-forest/10 text-forest hover:bg-forest hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10"
              aria-label="Previous testimonial"
              id="testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-cream shadow-lg border border-forest/10 text-forest hover:bg-forest hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10"
              aria-label="Next testimonial"
              id="testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-forest"
                    : "w-2 bg-forest/20 hover:bg-forest/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
