import AdvantagesSection from "@/components/AdvantagesSection";
import DownloadCtaSection from "@/components/DownloadCtaSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import GalleryReviewSection from "@/components/GalleryReviewSection";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import { fetchTotalUserCount } from "@/services/authApiServices";

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
