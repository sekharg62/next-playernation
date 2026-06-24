import ContactSupport from "@/components/ContactSupport";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnership | PlayerNation",
  description:
    "Media inquiries, brand partnerships, and collaboration opportunities with PlayerNation.",
};

export default function PartnershipPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <ContactSupport mailtoSubject="PlayerNation - Partnership Inquiry" />

    {/*   <p className="text-center text-sm text-muted">
        Follow us on{" "}
        <a
          href="https://www.instagram.com/playernationhq/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          Instagram
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/company/playernation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          LinkedIn
        </a>
        . Looking to join the team? See our{" "}
        <Link
          href="/jobs"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          Jobs
        </Link>{" "}
        page.
      </p> */}
    </div>
  );
}
