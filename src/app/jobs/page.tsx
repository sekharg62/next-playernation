import ContactSupport from "@/components/ContactSupport";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs | PlayerNation",
  description: "Join the PlayerNation team and help build the future of grassroots football analytics.",
};

export default function JobsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <ContactSupport mailtoSubject="PlayerNation - Job Application" />

      {/* <p className="text-center text-sm text-muted">
        Learn more about us on the{" "}
        <Link
          href="/"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          home page
        </Link>{" "}
        or reach out via our{" "}
        <Link
          href="/partnership"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          Partnership
        </Link>{" "}
        page.
      </p> */}
    </div>
  );
}
