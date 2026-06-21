import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jobs | Player Nation",
  description: "Join the Player Nation team and help build the future of grassroots football analytics.",
};


export default function JobsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      

      <section>
        <h2>Get in touch</h2>
        <p>
          Interested in joining the team? Send us your details and we&apos;ll be
          in touch.
        </p>
        <div className="mt-6">
          <ContactForm
            subject="Player Nation - Job Application"
            heading="Apply or say hello"
            description="Share your name, email, and a short message about the role you're interested in or what you'd bring to Player Nation."
          />
        </div>
      </section>

      <section >
        <p className="text-sm text-muted mt-6">
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
        </p>
      </section>
    </div>
  );
}
