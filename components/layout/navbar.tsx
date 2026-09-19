"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Coffee } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/spaces", label: "Spaces" },
  { href: "/locations", label: "Locations" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream/90 backdrop-blur-xl shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="container-bv flex items-center justify-between h-20">
          {/* SVG Filter for exact Espresso color (#2D1C15 -> rgb(45, 28, 21) -> 0.176, 0.110, 0.082) */}
          <svg width="0" height="0" className="absolute pointer-events-none">
            <filter id="colorize-forest">
              <feColorMatrix type="matrix" values="
                0 0 0 0.176 0
                0 0 0 0.110 0
                0 0 0 0.082 0
                0 0 0 1 0" 
              />
            </filter>
          </svg>

          {/* Logo */}
          <Link href="/" className="flex items-center group py-2 mt-1 md:mt-0" id="nav-logo">
            <img 
              src="/images/logo.png" 
              alt="BrewVerse Logo" 
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              style={{ filter: isScrolled ? "url(#colorize-forest)" : "none" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1" id="nav-desktop">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isScrolled
                      ? "text-charcoal hover:text-forest hover:bg-forest/10"
                      : "text-white hover:text-white hover:bg-white/15"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3" id="nav-cta">
            <Link
              href="/menu"
              className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-forest text-white hover:bg-forest/90 shadow-md hover:shadow-lg"
                  : "bg-white text-forest hover:bg-white/90"
              }`}
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
              isScrolled
                ? "text-espresso hover:bg-forest/10"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            id="nav-mobile-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            id="nav-mobile-menu"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-cream shadow-xl"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3.5 text-lg font-medium text-charcoal rounded-xl transition-all duration-300 hover:bg-forest/5 hover:text-forest hover:pl-6"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <Link
                      href="/menu"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center w-full px-6 py-3.5 text-base font-semibold rounded-full bg-forest text-white hover:bg-forest/90 transition-all duration-300 shadow-lg"
                    >
                      Order Now
                    </Link>
                  </motion.div>

                  {/* Social / Info */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 text-center text-sm text-charcoal/50"
                  >
                    Where Every Sip Tells a Story
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
