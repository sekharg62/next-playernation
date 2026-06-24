import ContactSupport from "@/components/ContactSupport";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs | PlayerNation",
  description:
    "Join the PlayerNation team and help build products that make sports more meaningful for everyone.",
};

export default function JobsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <ContactSupport
        title="Join Our Team"
        description="We're always looking for curious, driven people who want to build products that make sports more meaningful for everyone."
        reachOutLabel="Reach out at:"
        mailtoSubject="PlayerNation - Job Application"
      />
    </div>
  );
}
