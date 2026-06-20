import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Player Nation",
  description: "The page you're looking for doesn't exist or has been moved.",
};

const helpfulLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/jobs", label: "Jobs" },
  { href: "/partnership", label: "Partnership" },
] as const;

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
          <Link
            href="/blog"
            className="inline-flex rounded-lg border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
          >
            Read the blog
          </Link>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted">Try one of these instead</p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {helpfulLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
