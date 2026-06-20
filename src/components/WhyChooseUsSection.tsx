import type { ReactNode } from "react";

type Reason = {
  title: string;
  description: string;
  icon: ReactNode;
};

const reasons: Reason[] = [
  {
    title: "Pro-level stats, for everyone",
    description:
      "Pass maps, shot charts, ratings and 100+ match stats — the kind of analysis pro clubs use, built for grassroots players, parents and coaches.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M4 19V5M4 19h16M8 15v-4M12 19V9M16 13V7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Highlights without the hassle",
    description:
      "Upload once and we pull your best moments automatically — goals, assists and big plays, trimmed and ready to share in minutes, not hours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M14.5 4.5l5 3v9l-5 3-5-3v-9l5-3z" strokeLinejoin="round" />
        <path d="M9.5 8.5v7l-5 3V11.5l5-3z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "One app, whole football journey",
    description:
      "Players track progress, parents stay in the loop, coaches give better feedback and clubs see the full picture — all connected in one place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="12" cy="8" r="3.25" />
        <path d="M6 19c0-3 2.5-5 6-5s6 2 6 5" strokeLinecap="round" />
        <path d="M4 12h2M18 12h2" strokeLinecap="round" />
      </svg>
    ),
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
            Why choose us?
          </h2>
          <p className="mt-4 text-muted">
            Player Nation gives you pro tools, zero complexity — so you can focus
            on playing, improving and sharing your game.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {reasons.map(({ title, description, icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/25 hover:bg-primary/5 sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                {icon}
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
