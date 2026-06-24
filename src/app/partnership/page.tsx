import ContactSupport from "@/components/ContactSupport";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnership | PlayerNation",
  description:
    "Partner with PlayerNation — clubs, leagues, brands, creators, and organizations elevating the sports experience.",
};

export default function PartnershipPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <ContactSupport
        title="Partner With Us"
        description="Whether you're a club, league, brand, creator, media outlet, or organization looking to elevate the sports experience, we'd love to explore ways to work together."
        reachOutLabel="Reach out at:"
        mailtoSubject="PlayerNation - Partnership Inquiry"
      />
    </div>
  );
}
