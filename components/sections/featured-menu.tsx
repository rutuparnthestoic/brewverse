"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animation";

const featuredDrinks = [
  {
    name: "Velvet Caramel Latte",
    description:
      "Silky espresso with house-made caramel and steamed oat milk, topped with a golden drizzle.",
    price: "$5.95",
    image: "/images/drink-caramel-latte.png",
    tag: "Best Seller",
    tagColor: "bg-latte text-espresso",
  },
  {
    name: "Zen Matcha",
    description:
      "Ceremonial-grade matcha whisked with oat milk and a hint of vanilla. Calm in a cup.",
    price: "$6.25",
    image: "/images/drink-matcha-latte.png",
    tag: "Fan Favorite",
    tagColor: "bg-matcha text-forest",
  },
  {
    name: "Midnight Cold Brew",
    description:
      "24-hour steeped cold brew with notes of dark chocolate and smoked maple.",
    price: "$5.50",
    image: "/images/drink-cold-brew.png",
    tag: "New",
    tagColor: "bg-forest text-cream",
  },
  {
    name: "The Perfect Espresso",
    description:
      "Double-shot single-origin espresso with a velvety golden crema. Pure, bold, unforgettable.",
    price: "$4.25",
    image: "/images/drink-espresso.png",
    tag: null,
    tagColor: "",
  },
  {
    name: "Golden Chai",
    description:
      "Spiced chai brewed with cardamom, cinnamon, and star anise. Warming and aromatic.",
    price: "$5.75",
    image: "/images/drink-chai-latte.png",
    tag: "Seasonal",
    tagColor: "bg-latte/80 text-espresso",
  },
  {
    name: "Berry Bliss Smoothie",
    description:
      "Wild blueberries, raspberries, and açaí blended with oat yogurt. Vibrant and refreshing.",
    price: "$6.95",
    image: "/images/drink-berry-smoothie.png",
    tag: "Vegan",
    tagColor: "bg-sage text-cream",
  },
];

export function FeaturedMenu() {
  return (
    <section className="section-padding bg-cream" id="featured-menu">
      <div className="container-bv">
        {/* Section Header */}
        <FadeIn className="text-center mb-14 lg:mb-20">
          <span className="inline-block font-accent italic text-sage text-lg mb-3">
            Signature Sips
          </span>
          <h2 className="text-espresso mb-5">
            Crafted to <span className="text-gradient">Perfection</span>
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto text-base lg:text-lg">
            Every cup is a story — from ethically sourced beans to our
            baristas&apos; artistry. Discover the drinks people can&apos;t stop
            talking about.
          </p>
        </FadeIn>

        {/* Drink Cards Grid */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {featuredDrinks.map((drink) => (
            <StaggerItem key={drink.name}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-60 lg:h-64 overflow-hidden">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Tag Badge */}
                  {drink.tag && (
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${drink.tagColor}`}
                    >
                      {drink.tag}
                    </div>
                  )}

                  {/* Price (shows on hover) */}
                  
                </div>

                {/* Text Content */}
                <div className="p-5 lg:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-heading font-bold text-espresso group-hover:text-forest transition-colors duration-300">
                      {drink.name}
                    </h3>
                    <span className="text-sm font-semibold text-sage lg:hidden">
                      {drink.price}
                    </span>
                  </div>
                  <p className="text-charcoal/55 text-sm leading-relaxed">
                    {drink.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-forest via-matcha to-sage scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* View Full Menu CTA */}
        <FadeIn className="text-center mt-12 lg:mt-16" delay={0.3}>
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-forest text-white font-semibold rounded-full hover:bg-forest/90 transition-all duration-400 shadow-md hover:shadow-lg"
            id="featured-menu-cta"
          >
            Explore Full Menu
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
