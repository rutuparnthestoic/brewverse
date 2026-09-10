import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the full BrewVerse menu — craft-roasted coffees, artisan teas, signature smoothies, fresh bakery, and wholesome bites. All ethically sourced, all delicious.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
