"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animation";
import { Search, MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react";

/* ============================================
   LOCATIONS DATA
   ============================================ */
const locations = [
  {
    id: "flagship-portland",
    name: "Portland Flagship Roastery",
    address: "1234 Pearl District NW",
    city: "Portland, OR 97209",
    type: "Roastery & Café",
    image: "/images/story-roasting.png",
    hours: "6:00 AM - 10:00 PM",
    status: "Open Now",
    features: ["Roastery Tours", "Reserve Bar", "Work Spaces", "Outdoor Seating"],
    distance: "0.8 miles",
  },
  {
    id: "soho-nyc",
    name: "SoHo Studio",
    address: "456 Spring Street",
    city: "New York, NY 10012",
    type: "Creator Space",
    image: "/images/space-create.png",
    hours: "7:00 AM - 11:00 PM",
    status: "Open Now",
    features: ["Creator Studio", "Event Space", "Gallery Walls"],
    distance: "2,440 miles",
  },
  {
    id: "silver-lake-la",
    name: "Silver Lake Lounge",
    address: "789 Sunset Blvd",
    city: "Los Angeles, CA 90026",
    type: "Community Café",
    image: "/images/space-meet.png",
    hours: "6:30 AM - 9:00 PM",
    status: "Open Now",
    features: ["Lounge Seating", "Live Music", "Community Board"],
    distance: "820 miles",
  },
  {
    id: "bkc-mumbai",
    name: "BKC Reserve",
    address: "Jio World Drive, Bandra Kurla Complex",
    city: "Mumbai, MH 400051",
    type: "Reserve Café",
    image: "/images/hero-bg.png",
    hours: "8:00 AM - 11:30 PM",
    status: "Open Now",
    features: ["Reserve Bar", "Exclusive Merch", "Premium Lounge"],
    distance: "3.2 km",
  },
  {
    id: "cp-delhi",
    name: "Connaught Place Studio",
    address: "A Block, Inner Circle, Connaught Place",
    city: "New Delhi, DL 110001",
    type: "Work Café",
    image: "/images/space-work.png",
    hours: "7:30 AM - 10:00 PM",
    status: "Open Now",
    features: ["Work Spaces", "Heritage Building", "Fast WiFi"],
    distance: "12.5 km",
  },
  {
    id: "indiranagar-blr",
    name: "Indiranagar Roastery",
    address: "100 Feet Road, HAL 2nd Stage",
    city: "Bengaluru, KA 560038",
    type: "Roastery & Café",
    image: "/images/spaces-gallery-nook.png",
    hours: "7:00 AM - 11:00 PM",
    status: "Open Now",
    features: ["Live Roasting", "Outdoor Seating", "Community Board"],
    distance: "5.1 km",
  },
];

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = locations.filter((loc) => {
    const query = searchQuery.toLowerCase();
    return (
      loc.name.toLowerCase().includes(query) ||
      loc.city.toLowerCase().includes(query) ||
      loc.type.toLowerCase().includes(query)
    );
  });

  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-forest overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 right-0 w-full h-full opacity-20"
            style={{
              backgroundImage: 'radial-gradient(#A7F3D0 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div
            className="absolute top-[20%] left-[10%] w-96 h-96 rounded-full blur-[120px] opacity-20"
            style={{ background: "radial-gradient(circle, #10B981, transparent)" }}
          />
        </div>

        <div className="relative z-10 container-bv text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block font-accent italic text-gold text-lg mb-3"
          >
            Find Your Third Place
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-cream mb-6"
          >
            Our <span className="text-matcha">Locations</span>
          </motion.h1>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest/50 z-10" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, neighborhood, or zip code..."
              className="w-full pl-12 pr-32 py-4 bg-cream rounded-full text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-4 focus:ring-matcha/30 shadow-xl transition-all duration-300"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-forest text-white font-semibold rounded-full hover:bg-forest/90 transition-colors text-sm">
              Search
            </button>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          LOCATIONS LIST
          ============================================ */}
      <section className="section-padding bg-cream min-h-[50vh]">
        <div className="container-bv">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-forest/10">
            <h2 className="text-xl font-heading font-bold text-espresso">
              {searchQuery ? "Search Results" : "Nearby Locations"}
            </h2>
            <p className="text-sm font-semibold text-charcoal/50">
              {filteredLocations.length} locations found
            </p>
          </div>

          <StaggerChildren
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            staggerDelay={0.1}
          >
            <AnimatePresence mode="popLayout">
              {filteredLocations.map((loc) => (
                <StaggerItem key={loc.id}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 group border border-forest/5 flex flex-col sm:flex-row h-full">
                    {/* Image */}
                    <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                      <Image
                        src={loc.image}
                        alt={loc.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 30vw"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-cream/90 backdrop-blur-md rounded-full text-[10px] font-bold text-forest uppercase tracking-wider">
                        {loc.type}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 w-full sm:w-3/5 flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-heading font-bold text-espresso group-hover:text-forest transition-colors">
                          {loc.name}
                        </h3>
                        <span className="text-xs font-semibold text-charcoal/40 whitespace-nowrap ml-4">
                          {loc.distance}
                        </span>
                      </div>

                      <div className="space-y-2 mb-5">
                        <p className="text-charcoal/60 text-sm flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                          <span>
                            {loc.address}
                            <br />
                            {loc.city}
                          </span>
                        </p>
                        <p className="text-charcoal/60 text-sm flex items-center gap-2">
                          <Clock className="w-4 h-4 text-sage shrink-0" />
                          <span
                            className={
                              loc.status.includes("Open")
                                ? "text-forest font-semibold"
                                : "text-latte font-semibold"
                            }
                          >
                            {loc.status}
                          </span>
                          <span className="text-charcoal/30">•</span>
                          {loc.hours}
                        </p>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                        {loc.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 bg-oat text-charcoal/60 text-xs rounded-md"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 pt-4 border-t border-forest/5">
                        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-forest text-white text-sm font-semibold rounded-full hover:bg-forest/90 transition-colors">
                          Order Here
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-forest/10 text-forest text-sm font-semibold rounded-full hover:bg-forest/5 transition-colors">
                          Directions
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}

              {filteredLocations.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-20"
                >
                  <MapPin className="w-12 h-12 text-forest/20 mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-espresso mb-2">
                    No locations found
                  </h3>
                  <p className="text-charcoal/50 text-sm max-w-md mx-auto mb-6">
                    We couldn't find any BrewVerse locations matching "{searchQuery}". Try a different city or zip code.
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="px-6 py-2.5 bg-forest text-white text-sm font-semibold rounded-full hover:bg-forest/90 transition-colors"
                  >
                    View All Locations
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
