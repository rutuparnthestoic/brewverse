"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animation";
import {
  Laptop,
  Users,
  Palette,
  ArrowRight,
  Wifi,
  Coffee,
  Zap,
  Calendar,
  Mic,
  Brush,
  Clock,
  Monitor,
  Headphones,
  BookOpen,
  Music,
  Camera,
  Heart,
  Star,
  MapPin,
} from "lucide-react";

/* ============================================
   SPACES DATA
   ============================================ */
const spaces = [
  {
    id: "work",
    label: "Work",
    icon: Laptop,
    heroTitle: "Your Office, Reimagined",
    heroSubtitle: "Productivity meets great coffee",
    heroDescription:
      "Ditch the sterile cubicle. BrewVerse Work Spaces offer high-speed WiFi, standing desks, private nooks, and unlimited pour-overs — all in a space designed to help you flow.",
    image: "/images/space-work.png",
    features: [
      { icon: Wifi, label: "1Gbps WiFi", desc: "Ultra-fast, always reliable" },
      { icon: Coffee, label: "Unlimited Coffee", desc: "Fuel your focus" },
      { icon: Zap, label: "Power Everywhere", desc: "Every seat, every table" },
      { icon: Monitor, label: "Standing Desks", desc: "Ergonomic options available" },
      { icon: Headphones, label: "Quiet Zones", desc: "Deep work, no distractions" },
      { icon: Clock, label: "Open Early", desc: "6 AM – 10 PM daily" },
    ],
    testimonial: {
      text: "BrewVerse is my second office. The WiFi is blazing, the matcha is otherworldly, and I've met half my clients here.",
      author: "Ava Chen",
      role: "Freelance Designer",
    },
    color: "from-forest to-sage",
    accent: "matcha",
  },
  {
    id: "meet",
    label: "Meet",
    icon: Users,
    heroTitle: "Where Connections Brew",
    heroSubtitle: "Community over competition",
    heroDescription:
      "BrewVerse isn't just a coffee shop — it's a living room for your city. Book our lounge for a book club, host a meetup, or just slide into a conversation with the person next to you.",
    image: "/images/space-meet.png",
    features: [
      { icon: Calendar, label: "Event Hosting", desc: "Private rooms available" },
      { icon: Users, label: "Community Nights", desc: "Weekly themed events" },
      { icon: Mic, label: "Open Mic Fridays", desc: "Share your talent" },
      { icon: BookOpen, label: "Book Clubs", desc: "Monthly curated reads" },
      { icon: Heart, label: "Charity Events", desc: "Give back together" },
      { icon: Music, label: "Live Music", desc: "Local artists featured" },
    ],
    testimonial: {
      text: "Our book club has been meeting at BrewVerse for two years. They always set up the lounge perfectly for us.",
      author: "Priya Sharma",
      role: "Book Club Organizer",
    },
    color: "from-latte to-espresso",
    accent: "latte",
  },
  {
    id: "create",
    label: "Create",
    icon: Palette,
    heroTitle: "Fuel Your Creativity",
    heroSubtitle: "Art, music, and everything in between",
    heroDescription:
      "Our Creator Spaces are designed for the dreamers, the makers, and the rebels. Sketch, paint, write, code — whatever your medium, we've got the space, the vibe, and the caffeine.",
    image: "/images/space-create.png",
    features: [
      { icon: Brush, label: "Art Supplies", desc: "Brushes, pens, canvases" },
      { icon: Palette, label: "Gallery Nights", desc: "Monthly art showcases" },
      { icon: Zap, label: "Residencies", desc: "Month-long artist stays" },
      { icon: Camera, label: "Content Studio", desc: "Ring lights & backdrops" },
      { icon: Music, label: "Music Corner", desc: "Guitars & keyboards" },
      { icon: Star, label: "Mentorship", desc: "Connect with pros" },
    ],
    testimonial: {
      text: "I had my first exhibition at a BrewVerse Gallery Night. Where else can you paint, drink chai, and sell art — all in one place?",
      author: "Sophie Laurent",
      role: "Art Student",
    },
    color: "from-sage to-matcha",
    accent: "sage",
  },
];

/* ============================================
   GALLERY IMAGES (reusing existing images)
   ============================================ */
const galleryImages = [
  { src: "/images/space-work.png", alt: "Coworking space", span: "col-span-2 row-span-2" },
  { src: "/images/space-meet.png", alt: "Lounge gathering", span: "col-span-1 row-span-1" },
  { src: "/images/space-create.png", alt: "Creative studio", span: "col-span-1 row-span-1" },
  { src: "/images/spaces-gallery-nook.png", alt: "Reading nook", span: "col-span-1 row-span-1" },
  { src: "/images/story-community.png", alt: "Community event", span: "col-span-1 row-span-1" },
  { src: "/images/story-barista.png", alt: "Barista at work", span: "col-span-2 row-span-1" },
];

/* ============================================
   UPCOMING EVENTS
   ============================================ */
const upcomingEvents = [
  { date: "Sep 15", title: "Open Mic Night", location: "Portland, Pearl District", type: "Music" },
  { date: "Sep 20", title: "Latte Art Masterclass", location: "NYC, SoHo", type: "Workshop" },
  { date: "Sep 25", title: "Gallery Night: Autumn", location: "LA, Silver Lake", type: "Art" },
  { date: "Oct 1", title: "BrewVerse Book Club", location: "All Locations", type: "Community" },
];

/* ============================================
   COMPONENT
   ============================================ */
export default function SpacesPage() {
  const [activeSpace, setActiveSpace] = useState(spaces[0]);

  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-forest overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full blur-[100px] opacity-15"
            style={{ background: "radial-gradient(circle, #A7F3D0, transparent)" }}
          />
          <div
            className="absolute bottom-[10%] left-[15%] w-56 h-56 rounded-full blur-[80px] opacity-10"
            style={{ background: "radial-gradient(circle, #D97706, transparent)" }}
          />
        </div>

        <div className="relative z-10 container-bv text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block font-accent italic text-gold text-lg mb-3"
          >
            Beyond the Cup
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-cream mb-4"
          >
            Our <span className="text-matcha">Spaces</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-cream/60 max-w-2xl mx-auto text-base lg:text-lg"
          >
            BrewVerse isn&apos;t just a café. It&apos;s a workspace, a meeting
            point, a creative studio, and a second home — designed for every side
            of you.
          </motion.p>
        </div>
      </section>

      {/* ============================================
          SPACE TABS — Detailed View
          ============================================ */}
      <section className="section-padding bg-cream" id="space-details">
        <div className="container-bv">
          {/* Tab Buttons */}
          <FadeIn className="flex justify-center mb-12 lg:mb-16">
            <div className="inline-flex bg-oat rounded-full p-1.5 shadow-sm">
              {spaces.map((space) => (
                <button
                  key={space.id}
                  onClick={() => setActiveSpace(space)}
                  className={`flex items-center gap-2 px-5 lg:px-7 py-2.5 lg:py-3 rounded-full text-sm font-semibold transition-all duration-400 ${
                    activeSpace.id === space.id
                      ? "bg-forest text-white shadow-md"
                      : "text-charcoal/60 hover:text-forest"
                  }`}
                  id={`spaces-tab-${space.id}`}
                >
                  <space.icon className="w-4 h-4" />
                  {space.label}
                </button>
              ))}
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSpace.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top: Image + Description */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 mb-12 lg:mb-16">
                {/* Image */}
                <div className="w-full lg:w-3/5">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src={activeSpace.image}
                      alt={activeSpace.heroTitle}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${activeSpace.color} opacity-15 group-hover:opacity-25 transition-opacity duration-500`}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <activeSpace.icon className="w-5 h-5 text-sage" />
                    <span className="text-sage text-sm font-semibold uppercase tracking-wider">
                      {activeSpace.heroSubtitle}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-heading font-bold text-espresso mb-4">
                    {activeSpace.heroTitle}
                  </h2>
                  <p className="text-charcoal/60 leading-relaxed mb-8">
                    {activeSpace.heroDescription}
                  </p>
                  <Link
                    href="#events"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-forest text-white font-semibold rounded-full hover:bg-forest/90 transition-all duration-300 shadow-md text-sm w-fit"
                  >
                    Book a {activeSpace.label} Space
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {activeSpace.features.map((feature, i) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-oat rounded-xl p-4 text-center group hover:bg-forest hover:text-white transition-all duration-400"
                  >
                    <feature.icon className="w-5 h-5 text-forest group-hover:text-matcha mx-auto mb-2 transition-colors" strokeWidth={1.5} />
                    <p className="text-xs font-semibold text-espresso group-hover:text-white transition-colors mb-0.5">
                      {feature.label}
                    </p>
                    <p className="text-[10px] text-charcoal/40 group-hover:text-white/70 transition-colors">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-oat rounded-2xl p-6 lg:p-8 border border-forest/5">
                <p className="text-charcoal/70 text-sm lg:text-base leading-relaxed italic mb-4">
                  &ldquo;{activeSpace.testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center text-xs font-bold text-forest">
                    {activeSpace.testimonial.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-espresso">
                      {activeSpace.testimonial.author}
                    </p>
                    <p className="text-xs text-charcoal/50">
                      {activeSpace.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ============================================
          UPCOMING EVENTS
          ============================================ */}
      <section className="section-padding bg-oat" id="events">
        <div className="container-bv">
          <FadeIn className="text-center mb-12">
            <span className="inline-block font-accent italic text-sage text-lg mb-3">
              What&apos;s Happening
            </span>
            <h2 className="text-espresso mb-4">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            staggerDelay={0.08}
          >
            {upcomingEvents.map((event) => (
              <StaggerItem key={event.title}>
                <div className="bg-cream rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 group border border-forest/5 cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 bg-matcha/15 text-forest text-[10px] font-bold rounded-full uppercase">
                      {event.type}
                    </span>
                    <span className="text-xs font-semibold text-gold">
                      {event.date}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-espresso text-sm mb-2 group-hover:text-forest transition-colors">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-charcoal/40">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs">{event.location}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ============================================
          PHOTO GALLERY
          ============================================ */}
      <section className="section-padding bg-cream" id="gallery">
        <div className="container-bv">
          <FadeIn className="text-center mb-12">
            <span className="inline-block font-accent italic text-sage text-lg mb-3">
              Inside BrewVerse
            </span>
            <h2 className="text-espresso">
              The <span className="text-gradient">Gallery</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[220px]">
            {galleryImages.map((img, index) => (
              <FadeIn key={img.src} delay={index * 0.08} className={img.span}>
                <div className="relative w-full h-full rounded-xl overflow-hidden group cursor-pointer">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/30 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-cream font-heading font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
