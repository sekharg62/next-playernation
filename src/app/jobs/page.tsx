import ContentPageLayout from "@/components/ContentPageLayout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jobs | Player Nation",
  description: "Join the Player Nation team and help build the future of grassroots football analytics.",
};

const openRoles = [
  {
    title: "Full Stack Engineer",
    location: "Onsite · Full-time",
    description:
      "Build and ship features across our web and mobile stack — from match upload pipelines to stats dashboards used by players worldwide.",
  },
  
];

export default function JobsPage() {
  return (
    <ContentPageLayout
      title="Jobs"
      description="Help us bring pro-level stats and highlights to every player. We're building the platform grassroots football deserves."
    >
      <section>
        <h2>Why Player Nation?</h2>
        <ul>
          <li>Work on a product used by players, coaches, and parents every matchday</li>
          <li>Remote-first team with flexible working hours</li>
          <li>Shape the future of sports analytics at the grassroots level</li>
          <li>Competitive compensation and equity for early team members</li>
        </ul>
      </section>

      <section>
        <h2>Open roles</h2>
        <div className="mt-4 space-y-4">
          {openRoles.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-primary/25 sm:p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
                <span className="text-sm text-primary">{role.location}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed sm:text-base">
                {role.description}
              </p>
              <a
                href={`mailto:play@statmagic.xyz?subject=Application%20-%20${encodeURIComponent(role.title)}`}
                className="mt-4 inline-flex text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Apply →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Don&apos;t see your role?</h2>
        <p>
          We&apos;re always looking for talented people who love football and great
          products. Send your CV and a short note about what you&apos;d bring to the team
          at{" "}
          <a
            href="mailto:play@statmagic.xyz?subject=Player%20Nation%20-%20General%20Application"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            play@statmagic.xyz
          </a>
          .
        </p>
      </section>

      <section>
        <p className="text-sm">
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
    </ContentPageLayout>
  );
}
