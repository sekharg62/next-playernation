import ContentPageLayout from "@/components/ContentPageLayout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partnership | Player Nation",
  description:
    "Media inquiries, brand partnerships, and collaboration opportunities with Player Nation.",
};

const collaborationTypes = [
  {
    title: "Media & press",
    description:
      "Request interviews, product demos, logos, screenshots, or background on Player Nation and the Statmagic team.",
  },
  {
    title: "Creators & influencers",
    description:
      "Partner with us to showcase match stats, highlights, and player ratings with your audience — football creators welcome.",
  },
  {
    title: "Clubs & academies",
    description:
      "Bring Player Nation to your squad, academy, or league. We work with grassroots clubs and development programs worldwide.",
  },
  {
    title: "Brand partnerships",
    description:
      "Co-marketing, sponsorships, and integrations with brands aligned with youth sport, performance, and community.",
  },
];

export default function PartnershipPage() {
  return (
    <ContentPageLayout
      title="Partnership"
      description="Partner with Player Nation — whether you're covering the story, growing your community, or bringing pro tools to your club."
    >
      <section>
        <h2>Work with us</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {collaborationTypes.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-primary/25 sm:p-6"
            >
              <h3 className="text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed sm:text-base">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Press kit</h2>
        <p>
          For logos, brand assets, and product screenshots, email us with
          &quot;Press kit request&quot; in the subject line. We typically respond within
          2 business days.
        </p>
        <ul>
          <li>Player Nation logo and brand guidelines</li>
          <li>App screenshots and product overview</li>
          <li>Founder quotes and company background</li>
          <li>Key stats and user milestones on request</li>
        </ul>
      </section>

      <section>
        <h2>Get in touch</h2>
        <p>
          For press, partnerships, or collaboration inquiries, contact us at{" "}
          <a
            href="mailto:play@statmagic.xyz?subject=Player%20Nation%20-%20Partnership"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            play@statmagic.xyz
          </a>
          . Include a brief description of your outlet, audience, or organization and
          what you have in mind.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:play@statmagic.xyz?subject=Player%20Nation%20-%20Press%20Inquiry"
            className="inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
          >
            Press inquiry
          </a>
          <a
            href="mailto:play@statmagic.xyz?subject=Player%20Nation%20-%20Partnership"
            className="inline-flex rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
          >
            Partnership proposal
          </a>
        </div>
      </section>

      <section>
        <p className="text-sm">
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
    </ContentPageLayout>
  );
}
