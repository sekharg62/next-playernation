import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
  wide?: boolean;
};

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
  wide = false,
}: LegalPageLayoutProps) {
  return (
    <article className="border-b border-border">
      <div
        className={`mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${wide ? "max-w-7xl" : "max-w-3xl"}`}
      >
        <Link
          href="/"
          className="text-sm text-muted transition-colors hover:text-primary"
        >
          ← Back to home
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>
        </header>

        <div className="legal-content mt-10 space-y-8 text-muted [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_h4]:mt-4 [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:text-foreground [&_li]:leading-relaxed [&_ol]:mt-3 [&_ol]:list-[lower-alpha] [&_ol]:space-y-3 [&_ol]:pl-6 [&_ol_ol]:mt-2 [&_ol_ol]:list-[lower-roman] [&_ol_ol]:space-y-2 [&_ol_ol]:pl-6 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </article>
  );
}
