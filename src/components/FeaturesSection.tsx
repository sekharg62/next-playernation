"use client";

import Image from "next/image";
import { useState } from "react";

const features = [
  {
    title: "See your game the way pros see theirs",
    description:
      "Upload your game and we track every pass, shot, tackle and more across the full match. You get the pass maps, shot maps and 100+ stats that used to live only inside pro clubs — so you can finally see not just the score, but exactly how it happened.",
    image: "/output-img.png",
  },
  {
    title: "Your own highlight reel, every match.",
    description:
      "We scan the entire match and pull out your goals, assists and big moments, cutting each into a clean, share-ready clip. The stuff that used to mean an evening of rewinding, trimming and exporting is done automatically — so your highlights are ready to share with everyone.",
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
      "We turn every match into insights — what you did well, where you're losing ground, and the specific things to improve. Track it match after match and watch your progress add up over the season.",
    image: "/output-img.png",
  },
  {
    title: "The locker room never closes",
    description:
      'Build a profile that tracks every game you\'ve ever played, climb the leaderboards, and start a group for your squad, your club or your mates. Every match ranks you against the people you actually play with — so the banter, the bragging rights and the "did you see my rating?" never stop.',
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
            Features
          </h2>
          <p className="mt-4 text-muted">
            Everything you need to understand your game and share your story.
          </p>
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
