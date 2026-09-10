import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find a BrewVerse near you. With over 500 locations across 12 countries, your next great cup of coffee is just around the corner.",
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
