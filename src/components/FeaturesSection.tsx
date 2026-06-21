"use client";

import Image from "next/image";
import { useState } from "react";

const features = [
  {
    title: "See your game the way pros see theirs",
    description:
      "Upload your game and get every action tracked automatically. Explore 100+ stats, pass maps and shot maps, so you can see not just the score, but exactly how it happened.",
    image: "/output-img.png",
  },
  {
    title: "Every big moment, ready to share",
    description:"Every game updates your ratings and evolves your FIFA-style ratings card. Game by game, you'll build a living record of your performances, progress and milestones.",
      image: "/input-img.png",
  },
  {
    title: "Get rated every game",
    description:
      "Every match earns you a detailed rating across your whole game, plus a FIFA-style card that grows with you. Each performance updates your card, so a season of matches becomes one evolving record — yours to track, and yours to show off.",
    image: "/output-img.png",
  },
  {
    title: "Know exactly what to work on next",
    description:
   "Know what's working, what isn't and what to improve next. Then track your progress game after game.",
      image: "/output-img.png",
  },
  {
    title: "The locker room never closes",
    description:"Build your profile and create groups for your club, academy, team or squad. Every game becomes part of a shared story that lives on long after the final whistle.",
    image: "/input-img.png",
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFeature = features[activeIndex];

  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-7.5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Your sports journey, all in one place

          </h2>
        {/*   <p className="mt-4 text-muted">
            Everything you need to understand your game and share your story.
          </p> */}
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Feature image */}
          <div className="lg:sticky lg:top-24">
            <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="relative w-full">
                <Image
                  key={activeFeature.image}
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  width={512}
                  height={910}
                  sizes="(max-width: 720px) 100vw, (max-width: 1024px) 448px, 512px"
                  className="h-auto w-full object-contain transition-opacity duration-500"
                />
              </div>

              <div
                className=" flex items-center justify-center gap-2"
                role="tablist"
                aria-label="Feature slides"
              >
                {features.map((feature, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={feature.title}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Show feature ${index + 1}: ${feature.title}`}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                        isActive
                          ? "w-6 bg-primary"
                          : "w-2 bg-muted/40 hover:bg-muted/70"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — Feature list */}
          <div className="flex flex-col gap-3">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`w-full cursor-pointer rounded-2xl border text-left transition-[padding,max-height,border-color,background-color,box-shadow,opacity] duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                    isActive
                      ? "border-primary/35 bg-primary/5 p-5 shadow-[0_4px_20px_rgba(192,254,0,0.06)] sm:p-6"
                      : "border-border p-4 opacity-90 hover:border-primary/15 hover:opacity-100 sm:p-[1.125rem]"
                  }`}
                >
                  <h3
                    className={`text-base font-semibold leading-snug transition-colors duration-500 sm:text-[1.0625rem] ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`overflow-hidden leading-relaxed text-muted transition-[max-height,margin,opacity] duration-500 ease-in-out ${
                      isActive
                        ? "mt-2.5 max-h-36 text-sm opacity-100 sm:max-h-40"
                        : "mt-1.5 max-h-11 text-sm opacity-65 line-clamp-2"
                    }`}
                  >
                    {feature.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
