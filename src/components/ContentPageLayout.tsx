import Link from "next/link";
import type { ReactNode } from "react";

type ContentPageLayoutProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function ContentPageLayout({
  title,
  description,
  children,
}: ContentPageLayoutProps) {
  return (
    <article className="border-b border-border">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
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
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </header>

        <div className="content-page mt-10 space-y-8 text-muted [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:leading-relaxed [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </article>
  );
}
