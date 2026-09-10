import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spaces",
  description:
    "Discover BrewVerse Spaces — premium coworking cafes, community lounges, and creative studios. Work, meet, and create in spaces designed to inspire. Book your spot today.",
};

export default function SpacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
