import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "From a dream in a small kitchen to 500+ locations worldwide — discover the BrewVerse story. Learn about our journey, values, and commitment to ethically sourced, craft-roasted coffee.",
};

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
