import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | PlayerNation",
  description: "The page you're looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center border-b border-border">
      <div className="mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          This page is off the pitch
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          The route you entered doesn&apos;t exist. It may have been moved,
          removed, or never made the squad.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
