"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Coffee,
  MapPin,
  Mail,
  Globe,
  MessageCircle,
  Share2,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/animation";

const footerLinks = {
  explore: [
    { href: "/menu", label: "Our Menu" },
    { href: "/our-story", label: "Our Story" },
    { href: "/spaces", label: "Spaces" },
    { href: "/locations", label: "Locations" },
  ],
  menu: [
    { href: "/menu#hot-drinks", label: "Hot Drinks" },
    { href: "/menu#cold-drinks", label: "Cold Drinks" },
    { href: "/menu#food", label: "Food & Bites" },
    { href: "/menu#bakery", label: "Bakery" },
  ],
  company: [
    { href: "#careers", label: "Careers" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#press", label: "Press" },
    { href: "#partners", label: "Partners" },
  ],
};

const socialLinks = [
  { href: "#", icon: Globe, label: "Website" },
  { href: "#", icon: MessageCircle, label: "Chat" },
  { href: "#", icon: Share2, label: "Share" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-forest text-cream/90" id="footer">
      {/* Newsletter Banner */}
      <div className="border-b border-cream/10">
        <div className="container-bv py-12 lg:py-16">
          <FadeIn direction="up" className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-cream mb-2">
                Join the BrewVerse
              </h3>
              <p className="text-cream/60 text-sm lg:text-base">
                Get exclusive offers, new menu alerts, and a free drink on your birthday.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md"
              id="newsletter-form"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-cream/10 border border-cream/15 rounded-l-full text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-matcha/50 focus:bg-cream/15 transition-all duration-300"
                  id="newsletter-email"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 bg-matcha text-forest font-semibold text-sm rounded-r-full hover:bg-matcha/90 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                id="newsletter-submit"
              >
                {isSubscribed ? (
                  "Subscribed ✓"
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-bv py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <FadeIn delay={0}>
              <Link href="/" className="flex items-center gap-2.5 mb-5 group">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cream/10 group-hover:bg-cream/20 transition-all duration-300">
                  <Coffee className="w-5 h-5 text-matcha" strokeWidth={2.5} />
                </div>
                <span className="font-heading text-xl font-bold text-cream">
                  BrewVerse
                </span>
              </Link>
              <p className="text-cream/50 text-sm leading-relaxed mb-6 max-w-xs">
                Where every sip tells a story. Crafted with care, served with soul —
                more than coffee, it&apos;s a community.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-cream/10 hover:bg-matcha/20 text-cream/60 hover:text-matcha transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Explore Links */}
          <FadeIn delay={0.1}>
            <h4 className="font-heading font-semibold text-cream text-sm uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-matcha text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Menu Links */}
          <FadeIn delay={0.15}>
            <h4 className="font-heading font-semibold text-cream text-sm uppercase tracking-widest mb-4">
              Menu
            </h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-matcha text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Company Links */}
          <FadeIn delay={0.2}>
            <h4 className="font-heading font-semibold text-cream text-sm uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-matcha text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Contact */}
          <FadeIn delay={0.25}>
            <h4 className="font-heading font-semibold text-cream text-sm uppercase tracking-widest mb-4">
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-matcha mt-0.5 shrink-0" />
                <p className="text-cream/50 text-sm leading-relaxed">
                  123 Artisan Lane
                  <br />
                  Portland, OR 97201
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-matcha mt-0.5 shrink-0" />
                <a
                  href="mailto:hello@brewverse.com"
                  className="text-cream/50 hover:text-matcha text-sm transition-colors duration-300"
                >
                  hello@brewverse.com
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-bv py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            © {new Date().getFullYear()} BrewVerse Coffee Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-cream/40 hover:text-cream/70 text-xs transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-cream/40 hover:text-cream/70 text-xs transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-cream/40 hover:text-cream/70 text-xs transition-colors duration-300"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
