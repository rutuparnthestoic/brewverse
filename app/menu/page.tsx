"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/animation";
import { Search, SlidersHorizontal, ShoppingBag } from "lucide-react";
import { menuItems, menuCategories, type CategoryId } from "@/lib/menu-data";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-forest overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full blur-[100px] opacity-15"
            style={{
              background: "radial-gradient(circle, #A7F3D0, transparent)",
            }}
          />
          <div
            className="absolute bottom-[10%] left-[5%] w-56 h-56 rounded-full blur-[80px] opacity-10"
            style={{
              background: "radial-gradient(circle, #D97706, transparent)",
            }}
          />
        </div>

        <div className="relative z-10 container-bv text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block font-accent italic text-gold text-lg mb-3"
          >
            What&apos;s Brewing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-cream mb-4"
          >
            Our <span className="text-matcha">Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-cream/60 max-w-xl mx-auto text-base lg:text-lg"
          >
            From craft-roasted espressos to artisan bites — every item is made
            with intention and love.
          </motion.p>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-20 z-30 bg-cream/95 backdrop-blur-xl border-b border-forest/5 shadow-sm">
        <div className="container-bv py-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Search */}
            <div className="relative w-full sm:w-auto sm:flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search drinks, food, tags..."
                className="w-full pl-10 pr-4 py-2.5 bg-oat border border-forest/8 rounded-full text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-forest/25 focus:ring-2 focus:ring-forest/5 transition-all duration-300"
                id="menu-search"
              />
            </div>

            {/* Category Pills — Scrollable on mobile */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto scrollbar-hide">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-forest text-white shadow-sm"
                      : "bg-oat text-charcoal/60 hover:bg-forest/10 hover:text-forest"
                  }`}
                  id={`menu-cat-${cat.id}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="section-padding bg-cream" id="menu-grid">
        <div className="container-bv">
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-charcoal/50 text-sm">
              Showing{" "}
              <span className="font-semibold text-charcoal">
                {filteredItems.length}
              </span>{" "}
              {filteredItems.length === 1 ? "item" : "items"}
              {activeCategory !== "all" && (
                <span>
                  {" "}
                  in{" "}
                  <span className="text-forest font-semibold">
                    {
                      menuCategories.find((c) => c.id === activeCategory)
                        ?.label
                    }
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                    layout: { duration: 0.4 },
                  }}
                >
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 lg:h-52 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {/* Hover overlay with "Add" button */}
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <motion.button
                          initial={false}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-5 py-2.5 bg-cream text-forest text-xs font-bold rounded-full shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Order
                        </motion.button>
                      </div>

                      {/* Tags */}
                      {item.tags.length > 0 && (
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                          {item.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 bg-cream/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-forest uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Price badge */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-forest/90 backdrop-blur-sm rounded-full text-xs font-bold text-cream">
                        {item.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 lg:p-5 flex-1 flex flex-col">
                      <h3 className="text-base font-heading font-bold text-espresso mb-1.5 group-hover:text-forest transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-charcoal/50 text-xs leading-relaxed flex-1">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="h-0.5 bg-gradient-to-r from-forest via-matcha to-sage scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <FadeIn className="text-center py-20">
              <div className="text-6xl mb-4">☕</div>
              <h3 className="text-xl font-heading font-bold text-espresso mb-2">
                No items found
              </h3>
              <p className="text-charcoal/50 text-sm">
                Try adjusting your search or filter to find what you&apos;re
                looking for.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-6 py-2.5 bg-forest text-white text-sm font-semibold rounded-full hover:bg-forest/90 transition-all duration-300"
              >
                Clear Filters
              </button>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
