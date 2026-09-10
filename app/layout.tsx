import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "BrewVerse — Where Every Sip Tells a Story",
    template: "%s | BrewVerse Coffee",
  },
  description:
    "BrewVerse is a premium coffee experience — craft-roasted beans, community spaces, and a culture that brings people together. More than coffee, it's a movement.",
  keywords: [
    "coffee",
    "cafe",
    "premium coffee",
    "community",
    "co-working cafe",
    "BrewVerse",
    "artisan coffee",
    "specialty coffee",
  ],
  openGraph: {
    title: "BrewVerse — Where Every Sip Tells a Story",
    description:
      "Craft-roasted coffee, community spaces, and culture. BrewVerse is more than a café — it's where stories begin.",
    type: "website",
    locale: "en_US",
    siteName: "BrewVerse Coffee",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrewVerse — Where Every Sip Tells a Story",
    description:
      "Craft-roasted coffee, community spaces, and culture. BrewVerse is more than a café — it's where stories begin.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <LenisProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
