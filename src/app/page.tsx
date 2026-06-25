import AdvantagesSection from "@/components/AdvantagesSection";
import DownloadCtaSection from "@/components/DownloadCtaSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import GalleryReviewSection from "@/components/GalleryReviewSection";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import { SITE_URL } from "@/constants";
import { fetchTotalUserCount } from "@/services/authApiServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlayerNation | Football match stats & highlights",
  description:
    "Upload match footage to get automated football stats, player ratings, and highlight videos—built for grassroots players, coaches, teams, and parents.",
  keywords: [
    "PlayerNation",
    "football analytics",
    "soccer analytics",
    "match stats",
    "player stats",
    "player ratings",
    "highlight videos",
    "automated highlights",
    "grassroots football",
    "youth football",
    "coach analysis",
    "team performance",
    "match analysis",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "PlayerNation | Football match stats & highlights",
    description:
      "Automated football stats, player ratings, and highlight videos from your match footage.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/squareBrandLogo.svg`,
        alt: "PlayerNation",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "PlayerNation | Football match stats & highlights",
    description:
      "Automated football stats, player ratings, and highlight videos from your match footage.",
    images: [`${SITE_URL}/squareBrandLogo.svg`],
  },
};

export default async function Home() {
  const totalUserCount = await fetchTotalUserCount();

  return (
    <>
      <HeroSection totalUserCount={totalUserCount} />
      <GalleryReviewSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <AdvantagesSection />
      <FaqSection />
      <ReviewSection />
      <DownloadCtaSection totalUserCount={totalUserCount} />
    </>
  );
}
