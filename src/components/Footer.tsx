import Link from "next/link";
import BrandIcon from "./BrandIcon";
import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";
import ManageCookiesButton from "./ManageCookiesButton";
import SectionLink from "./SectionLink";

const footerLinkSections = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/#features", label: "Features", sectionId: "features" },
      { href: "/jobs", label: "Jobs" },
      { href: "/partnership", label: "Partnership" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacypolicy", label: "Privacy Policy" },
      { href: "/termsandconditions", label: "Terms and Conditions" },
      { href: "/dataprocessingagreement", label: "Data Processing Agreement" },
      { href: "/scc", label: "Standard Contractual Clauses" },
      { href: "/sub-processors", label: "Subprocessors" },
    ],
  },
  {
    title: "Privacy",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/manage-cookies", label: "Manage Cookies", openCookieModal: true },
    ],
  },
] as const;
function FooterLink({
  href,
  label,
  sectionId,
  openCookieModal,
}: {
  href: string;
  label: string;
  sectionId?: string;
  openCookieModal?: boolean;
}) {
  const className =
    "inline-block text-sm text-muted transition-colors hover:text-primary";

  if (openCookieModal) {
    return (
      <ManageCookiesButton className={className}>{label}</ManageCookiesButton>
    );
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  if (sectionId) {
    return (
      <SectionLink href={href} sectionId={sectionId} className={className}>
        {label}
      </SectionLink>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7.5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,2fr)] lg:items-start lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <BrandIcon />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Enabling pro-level sports experiences for everyone
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <AppStoreBadge className="h-10" />
              <GooglePlayBadge className="h-10" />
            </div>
          </div>

          {/* Company, Legal, Privacy */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
            {footerLinkSections.map(({ title, links }) => (
              <div key={title} className="flex min-w-0 flex-col items-start">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {title}
                </h3>
                <ul className="mt-4 flex w-full flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <FooterLink
                        href={link.href}
                        label={link.label}
                        sectionId={"sectionId" in link ? link.sectionId : undefined}
                        openCookieModal={
                          "openCookieModal" in link ? link.openCookieModal : undefined
                        }
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 mb-4 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            &copy; {year} PlayerNation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/playernation"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-primary"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/playernationhq/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted transition-colors hover:text-primary"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
