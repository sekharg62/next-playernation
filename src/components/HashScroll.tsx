"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;

      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
}
