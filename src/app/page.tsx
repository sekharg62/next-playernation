import AdvantagesSection from "@/components/AdvantagesSection";
import AppStoreBadge from "@/components/AppStoreBadge";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import GooglePlayBadge from "@/components/GooglePlayBadge";
import FeaturesSection from "@/components/FeaturesSection";
import GalleryReviewSection from "@/components/GalleryReviewSection";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GalleryReviewSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <AdvantagesSection />
      <BlogSection />

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7.5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border px-8 py-16 text-center sm:px-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Join Player Nation?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Download the app today and start your journey to becoming a top
                player.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <AppStoreBadge className="h-11" />
                <GooglePlayBadge className="h-11" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
