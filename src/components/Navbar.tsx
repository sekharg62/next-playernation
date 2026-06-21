"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BrandIcon from "./BrandIcon";
import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";
import SectionLink from "./SectionLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features", sectionId: "features" },
  { href: "/jobs", label: "Jobs" },
  { href: "/partnership", label: "Partnership" },
] as const;

const navBlur =
  "bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 ${navBlur} ${
        mobileOpen ? "max-lg:border-b-0" : "border-b border-border/40"
      }`}
    >
      <nav className="mx-auto flex h-[4.25rem] max-w-7.5xl items-center justify-between px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-4 lg:px-8">
        {/* Left — Brand (always visible) */}
        <div className="flex items-center">
          <BrandIcon />
        </div>

        {/* Center — Nav links (desktop / laptop only) */}
        <ul className="hidden items-center justify-center gap-1.5 lg:flex">
          {navLinks.map((link) => {
            const { href, label } = link;
            const sectionId = "sectionId" in link ? link.sectionId : undefined;
            const isActive = pathname === href;
            const className = `rounded-md px-3.5 py-2.5 text-[0.9375rem] font-medium transition-colors sm:text-base ${
              isActive ? "text-primary" : "text-muted hover:text-foreground"
            }`;

            return (
              <li key={label}>
                {sectionId ? (
                  <SectionLink href={href} sectionId={sectionId} className={className}>
                    {label}
                  </SectionLink>
                ) : (
                  <Link href={href} className={className}>
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right — Store badges (desktop) + hamburger (mobile / tablet) */}
        <div className="flex items-center justify-end gap-2">
          <div className="hidden items-center gap-2.5 lg:flex">
            <AppStoreBadge className="h-10" />
            <GooglePlayBadge className="h-10" />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile / tablet menu */}
      {mobileOpen && (
        <div className="px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const { href, label } = link;
              const sectionId = "sectionId" in link ? link.sectionId : undefined;
              const isActive = pathname === href;
              const className = `block rounded-md px-3.5 py-3 text-[0.9375rem] font-medium transition-colors sm:text-base ${
                isActive ? "text-primary" : "text-muted hover:text-foreground"
              }`;
              const closeMenu = () => setMobileOpen(false);

              return (
                <li key={label}>
                  {sectionId ? (
                    <SectionLink
                      href={href}
                      sectionId={sectionId}
                      onClick={closeMenu}
                      className={className}
                    >
                      {label}
                    </SectionLink>
                  ) : (
                    <Link href={href} onClick={closeMenu} className={className}>
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex items-center gap-2.5 pt-4">
            <AppStoreBadge className="h-9" />
            <GooglePlayBadge className="h-9" />
          </div>
        </div>
      )}
    </header>
  );
}
