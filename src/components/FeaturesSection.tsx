"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const imageClassName =
  "h-auto max-h-[min(68vh,580px)] w-full object-contain transition-[opacity,transform] duration-500 ease-in-out sm:max-h-[min(74vh,640px)] lg:max-h-[min(84vh,760px)]";

const SWIPE_THRESHOLD_PX = 50;

const features = [
  {
    title: "See your game the way pros see theirs",
    description:
      "Upload your game and get every action tracked automatically. Explore 100+ stats, pass maps and shot maps, so you can see not just the score, but exactly how it happened.",
    image: "/feature-one.png",
  },
  {
    title: "Every big moment, ready to share",
    description:
      "We scan the entire game and automatically create share-ready clips of your goals, assists and biggest moments, so your highlights are ready to relive and share.",
    image: "/feature-two.png",
  },
  {
    title: "Get rated every game",
    description:
      "Every game updates your ratings and evolves your FIFA-style ratings card. Game by game, you'll build a living record of your performances, progress and milestones.",
    image: "/feature-three.png",
  },
  {
    title: "Know exactly what to work on next",
    description:
      "Know what's working, what isn't and what to improve next. Then track your progress game after game.",
    image: "/feature-4.png",
  },
  {
    title: "The locker room never closes",
    description:
      "Build your profile and create groups for your club, academy, team or squad. Every game becomes part of a shared story that lives on long after the final whistle.",
    image: "/feature-5.png",
  },
];

function FeatureDots({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div
      className="mt-2 flex items-center justify-center gap-2"
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
            onClick={() => onSelect(index)}
            className={`h-2 cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
              isActive ? "w-6 bg-primary" : "w-2 bg-muted/40 hover:bg-muted/70"
            }`}
          />
        );
      })}
    </div>
  );
}

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);
  const [fadeActive, setFadeActive] = useState(false);
  const touchStartX = useRef(0);

  const maxIndex = features.length - 1;
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;

  const goToIndex = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(maxIndex, index)));
  };

  const goPrev = () => goToIndex(activeIndex - 1);
  const goNext = () => goToIndex(activeIndex + 1);

  useEffect(() => {
    if (activeIndex === imageIndex) return;

    setOutgoingIndex(imageIndex);
    setImageIndex(activeIndex);
    setFadeActive(false);

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setFadeActive(true));
    });

    return () => cancelAnimationFrame(frame);
  }, [activeIndex, imageIndex]);

  const displayedFeature = features[imageIndex];

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? 0;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = event.changedTouches[0]?.clientX ?? 0;
    const deltaX = touchStartX.current - touchEndX;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;

    if (deltaX > 0) {
      goNext();
      return;
    }

    goPrev();
  };

  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-7.5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your sports journey, all in one place
          </h2>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Mobile — swipeable image carousel */}
          <div className="lg:hidden">
            <div className="relative mx-auto w-full max-w-lg px-4 sm:px-6">
              <button
                type="button"
                onClick={goPrev}
                disabled={!canGoPrev}
                aria-label="Previous feature"
                className="absolute left-2 top-[42%] z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-colors hover:border-primary/40 hover:text-primary disabled:pointer-events-none disabled:opacity-35 sm:left-3 sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={!canGoNext}
                aria-label="Next feature"
                className="absolute right-2 top-[42%] z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-colors hover:border-primary/40 hover:text-primary disabled:pointer-events-none disabled:opacity-35 sm:right-3 sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>

              <div
                className="overflow-hidden px-10 touch-pan-y sm:px-12"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {features.map((feature) => (
                    <div key={feature.title} className="w-full shrink-0">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={576}
                        height={1024}
                        sizes="(max-width: 1024px) 90vw, 576px"
                        className={imageClassName}
                        priority={feature.image === features[0].image}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <FeatureDots activeIndex={activeIndex} onSelect={goToIndex} />
            </div>
          </div>

          {/* Desktop — sticky fade image */}
          <div className="hidden lg:sticky lg:top-24 lg:block">
            <div className="mx-auto w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
              <div className="relative flex w-full items-center justify-center">
                {outgoingIndex !== null && (
                  <Image
                    src={features[outgoingIndex].image}
                    alt=""
                    aria-hidden
                    width={576}
                    height={1024}
                    sizes="(max-width: 720px) 90vw, (max-width: 1024px) 576px, 672px"
                    className={`pointer-events-none absolute inset-0 ${imageClassName} ${
                      fadeActive ? "scale-[0.98] opacity-0" : "scale-100 opacity-100"
                    }`}
                    onTransitionEnd={(event) => {
                      if (event.propertyName !== "opacity") return;
                      setOutgoingIndex((current) =>
                        current === outgoingIndex ? null : current,
                      );
                    }}
                  />
                )}
                <Image
                  src={displayedFeature.image}
                  alt={displayedFeature.title}
                  width={576}
                  height={1024}
                  sizes="(max-width: 720px) 90vw, (max-width: 1024px) 576px, 672px"
                  className={`relative ${imageClassName} ${
                    fadeActive || outgoingIndex === null
                      ? "scale-100 opacity-100"
                      : "scale-[1.02] opacity-0"
                  }`}
                />
              </div>

              <FeatureDots activeIndex={activeIndex} onSelect={goToIndex} />
            </div>
          </div>

          {/* Feature list */}
          <div className="flex flex-col gap-3">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => goToIndex(index)}
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
