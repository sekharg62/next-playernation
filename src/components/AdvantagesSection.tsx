"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type OrbitItem = {
  label: string;
  tagline: string;
  icon: ReactNode;
};

const orbitItems: OrbitItem[] = [
  {
    label: "Player",
    tagline: "Track your journey",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <circle cx="12" cy="8" r="3.25" />
        <path d="M6.5 20c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Parent",
    tagline: "Stay connected",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M12 20.5s-5.5-3.8-5.5-8.2a4.5 4.5 0 019 0c0 4.4-5.5 8.2-5.5 8.2z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Coach",
    tagline: "Coach with insights",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <rect x="5" y="7" width="14" height="10" rx="1.5" />
        <path d="M9 11h6M9 14.5h4.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Club",
    tagline: "Manage your community",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M12 4.5l5.5 2.4v5.4c0 3.6-2.5 6.2-5.5 7.2-3-1-5.5-3.6-5.5-7.2V6.9L12 4.5z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Academy",
    tagline: "Develop talent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M5 9.5L12 5.5l7 4-7 4-7-4z" strokeLinejoin="round" />
        <path d="M7.5 12.5v3.8c0 1 2.2 2.2 4.5 2.2s4.5-1.2 4.5-2.2v-3.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Scout",
    tagline: "Discover players",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <circle cx="11" cy="11" r="5.5" />
        <path d="M16 16l4.5 4.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "League",
    tagline: "Elevate competition",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M8 21h8M12 17v4M7 4h10l1 7H6L7 4z" strokeLinejoin="round" />
        <path d="M9 11h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Team",
    tagline: "Share the journey",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="15" cy="8" r="2.5" />
        <path d="M5 19c0-2.5 1.8-4.5 4-4.5s4 2 4 2 1.8-2 4-2 4 2 4 4.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AdvantagesSection() {
  const step = 360 / orbitItems.length;

  return (
    <section
      className="relative overflow-hidden bg-background"
      aria-labelledby="advantages-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,rgba(192,254,0,0.1),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7.5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-16">
          <h2
            id="advantages-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Built for everyone around the game
          </h2>
        </div>

        <div className="advantages-orbit-stage relative mx-auto aspect-square w-full max-w-[min(100%,30rem)] sm:max-w-lg lg:max-w-xl">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 400 400"
            aria-hidden
          >
            <defs>
              <linearGradient id="advantagesBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(192,254,0,0.05)" />
                <stop offset="50%" stopColor="rgba(192,254,0,0.35)" />
                <stop offset="100%" stopColor="rgba(192,254,0,0.05)" />
              </linearGradient>
              <linearGradient id="advantagesArc" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(192,254,0,0)" />
                <stop offset="50%" stopColor="rgba(192,254,0,0.9)" />
                <stop offset="100%" stopColor="rgba(192,254,0,0)" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="168" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            <circle cx="200" cy="200" r="132" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.75" />
            <g className="advantages-orbit-arc-group">
              <circle
                cx="200"
                cy="200"
                r="168"
                fill="none"
                stroke="url(#advantagesArc)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="90 970"
              />
            </g>
          </svg>

          <div className="advantages-orbit-track" aria-hidden />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="advantages-orbit-hub">
              <div className="advantages-orbit-hub-glow" aria-hidden />
              <div className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 shadow-[0_0_32px_rgba(192,254,0,0.15)] sm:h-16 sm:w-16">
                  <Image
                    src="/BrandLogo.svg"
                    alt=""
                    width={36}
                    height={36}
                    className="h-8 w-8 sm:h-9 sm:w-9"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="advantages-orbit absolute inset-0">
            {orbitItems.map(({ label, tagline, icon }, i) => (
              <div
                key={label}
                className="advantages-orbit-item"
                style={
                  { "--orbit-angle": `${i * step}deg` } as React.CSSProperties
                }
              >
                <span className="advantages-orbit-beam" aria-hidden />
                <div className="advantages-orbit-node">
                  <div className="advantages-orbit-upright">
                    <div className="advantages-orbit-card">
                      <span className="advantages-orbit-icon">{icon}</span>
                      <span className="advantages-orbit-label">{label}</span>
                      <span className="advantages-orbit-tagline">{tagline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
