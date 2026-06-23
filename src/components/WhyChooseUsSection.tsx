import Image from "next/image";
import type { ReactNode } from "react";

type Reason = {
  title: string;
  description: string;
  icon: ReactNode;
};

const reasons: Reason[] = [
  {
    title: "Any camera works",
    description:
      "AI camera, phone camera or anything in between. If you filmed it, we can analyze it.",
    icon: "/Camera.svg",
  },
  {
    title: "We deliver answers, not dashboards",
    description:
      "No tagging. No learning curve. Just the stats, highlights and insights you actually care about.",
    icon: "/brain.svg",
  },
  {
    title: "Builds your sporting identity",
    description:
      "PlayerNation is a living record of your performances, memories and milestones.",
    icon: "/Trophy.svg",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section aria-labelledby="why-choose-us-heading">
      <div className="mx-auto max-w-7.5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="why-choose-us-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Why PlayerNation?
          </h2>
         
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {reasons.map(({ title, description, icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/25 hover:bg-primary/5 sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Image src={icon as string} alt={title} width={24} height={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground sm:text-xl">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
