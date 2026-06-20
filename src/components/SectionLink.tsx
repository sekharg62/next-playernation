"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type SectionLinkProps = ComponentProps<typeof Link> & {
  sectionId?: string;
};

export default function SectionLink({
  href,
  sectionId,
  onClick,
  ...props
}: SectionLinkProps) {
  const pathname = usePathname();
  const hrefString = typeof href === "string" ? href : href.pathname ?? "";
  const id = sectionId ?? hrefString.split("#")[1];

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !id) return;

    if (pathname === "/") {
      event.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `/#${id}`);
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
