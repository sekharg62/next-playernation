"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SWIPE_THRESHOLD_PX = 50;

type Review = {
  name: string;
  review: string;
  role: string;
  country: string;
  countryFlag: string;
  image?: string;
};

const reviews: Review[] = [
  {
    name: "Sujang",
    image: "/sujang.jpeg",
    country: "Japan",
    countryFlag: "https://flagcdn.com/w40/jp.png",
    role: "Parent",
    review:
      "We've been sharing the highlight videos created by Player Nation with the team, and they've been really well received! It also quantifies the match analysis results, which is helpful for providing feedback to the children.",
  },
  {
    name: "Mal",
    country: "Australia",
    countryFlag: "https://flagcdn.com/w40/au.png",
    role: "Coach",
    review:
      "Player Nation's insights into the team's performance and development areas have been invaluable as a solo coach. The app and reports provide an unbiased review of the game, saving significant time on collecting statistics. My players love seeing and monitoring their progress, which gives them personal feedback on their performance.",
  },
  {
    name: "Jon",
    country: "Australia",
    countryFlag: "https://flagcdn.com/w40/au.png",
    role: "Coach",
    review:
      "Player Nation has been a valuable addition to our team's performance analysis. It has assisted the coach and players to easily understand how touch, control, passing, dribbling etc. contributes to the team's success. The highlights videos are particularly appreciated by the players to quickly watch their moments on the ball!",
  },
  {
    name: "Lewis",
    country: "United States",
    countryFlag: "https://flagcdn.com/w40/us.png",
    role: "Coach",
    review:
      "Our High School Varsity program and Travel Club uses PlayerNation as a tool to improve our student-athletes. It's dramatically improved our training and match play. We are able to identify our team's and players' areas which need improvements and tailor our training methodology to them. Access to data and players' clips are within a day or two of uploading our match footage. Would heartily recommend this product for the quality of data provided, the support staff's attention to detail and help when required.",
  },
];

function getInitials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter((part) => part.length > 0)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function ReviewAvatar({ name, image }: { name: string; image?: string }) {
  if (image) {
    return (
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-border">
        <Image src={image} alt={name} fill sizes="44px" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary ring-2 ring-primary/25"
      aria-hidden
    >
      {getInitials(name)}
    </div>
  );
}

function ReviewCard({ item }: { item: Review }) {
  return (
    <article className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-linear-to-br from-[#141414] to-[#0a0a0a] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] sm:p-7">
      <div
        className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-primary via-primary/70 to-primary/20"
        aria-hidden
      />

      <div className="flex h-full flex-col pl-2">
        <p className="flex-1 text-[15px] leading-relaxed text-foreground/90 sm:text-base">
          &ldquo;{item.review}&rdquo;
        </p>

        <div className="mt-auto border-t border-border pt-5">
          <div className="flex items-center gap-3">
            <ReviewAvatar name={item.name} image={item.image} />
            <div className="min-w-0">
              <p className="truncate text-base font-semibold text-foreground">{item.name}</p>
              <div className="mt-1 flex items-center gap-2">
                <Image
                  src={item.countryFlag}
                  alt={`${item.country} flag`}
                  width={24}
                  height={16}
                  className="h-4 w-6 shrink-0 rounded-sm object-cover"
                />
                <p className="truncate text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ReviewSection() {
  const [itemsPerView, setItemsPerView] = useState(2);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateItemsPerView = () => {
      setItemsPerView(mediaQuery.matches ? 2 : 1);
    };

    updateItemsPerView();
    mediaQuery.addEventListener("change", updateItemsPerView);

    return () => mediaQuery.removeEventListener("change", updateItemsPerView);
  }, []);

  useEffect(() => {
    setIndex((current) => Math.min(current, Math.max(0, reviews.length - itemsPerView)));
  }, [itemsPerView]);

  const maxIndex = Math.max(0, reviews.length - itemsPerView);
  const canGoPrev = index > 0;
  const canGoNext = index < maxIndex;
  const slideOffset =
    itemsPerView === 2
      ? `calc(-${index} * (50% + 0.75rem))`
      : `calc(-${index} * (100% + 1.25rem))`;
  const cardWidth = itemsPerView === 2 ? "calc(50% - 0.75rem)" : "100%";

  const goPrev = () => setIndex((current) => Math.max(0, current - 1));
  const goNext = () => setIndex((current) => Math.min(maxIndex, current + 1));

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
    <section aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7.5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="reviews-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Don&apos;t take our word for it
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl px-4 sm:px-6">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Previous review"
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-colors hover:border-primary/40 hover:text-primary disabled:pointer-events-none disabled:opacity-35 sm:left-3 sm:h-10 sm:w-10"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            aria-label="Next review"
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-colors hover:border-primary/40 hover:text-primary disabled:pointer-events-none disabled:opacity-35 sm:right-3 sm:h-10 sm:w-10"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>

          <div
            className="overflow-hidden px-10 touch-pan-y sm:px-12"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex items-stretch gap-5 transition-transform duration-500 ease-in-out md:gap-6"
              style={{ transform: `translateX(${slideOffset})` }}
            >
              {reviews.map((item) => (
                <div key={item.name} className="flex shrink-0" style={{ width: cardWidth }}>
                  <ReviewCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
