import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partnership | Player Nation",
  description:
    "Media inquiries, brand partnerships, and collaboration opportunities with Player Nation.",
};


export default function PartnershipPage() {
  return (
          
      

    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

     


      <section>
        <h2>Send a message</h2>
        <p>
          Tell us about your outlet, audience, or organization and what you have
          in mind — we typically respond within 2 business days.
        </p>
        <div className="mt-6">
          <ContactForm
            subject="Player Nation - Partnership Inquiry"
            heading="Partnership inquiry"
            description="Include a brief description of your outlet, audience, or organization and what you're looking for."
          />
        </div>
      </section>

      <section>
        <p className="text-sm text-muted mt-6">
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
        </p>
      </section>
    </div>
  );
}
