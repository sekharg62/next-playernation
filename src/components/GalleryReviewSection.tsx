"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

type GalleryReview = {
  image: string;
  countryFlag: string;
  name: string;
  review: string;
  role: string;
};

// countryFlag = flag image URL (e.g. https://flagcdn.com/w40/in.png) or /public path
const galleryReviews: GalleryReview[] = [
  {
    image: "/carlo.jpeg",
    countryFlag: "https://flagcdn.com/w40/us.png",
    name: "Carlo",
    review:
      "PlayerNation is helping me understand my game in ways I wouldn't notice just from watching highlights.The reports show me different ways I'm impacting the game, like creating chances, winning set pieces, helping defensively, and keeping possession. I also use the highlight videos when I meet with my trainer so we can review my film, talk about my decisions on the field, and work on things I can improve. The data helps me see what's working, what needs work, and how I'm improving over time. It's helping me become a smarter player, a better captain, and more confident every time I step on the field.",
    role: "Player",
  },
  {
    image: "/bianca.jpeg",
    countryFlag: "https://flagcdn.com/w40/us.png",
    name: "João & Bianca",
    review: `As soccer parents, PlayerNation has given us something we couldn't get anywhere
else-objective data, meaningful insights, and detailed analysis that help us understand
our son's development beyond goals and assists.

The player reports highlight both strengths and areas for improvement, helping him
learn from mistakes, build on what he's doing well, and track his progress over time.

Beyond the individual reports, the team snapshots provide valuable perspective on
overall team performance and player development, helping him grow as both a player
and a captain by better understanding how he can maximize his impact on the field
and support his teammates.

It's become an invaluable tool in supporting his development and deepening his
understanding of the game.`,
    role: "Parent",
  },
  {
    image: "/ricardo.jpeg",
    countryFlag: "https://flagcdn.com/w40/sg.png",
    name: "Ricardo",
    review: `Playernation's analytical tools have been a game-changer for the Brazilian Football Association (BFA) in Singapore, giving us a decisive edge across three different leagues. The detailed individual player insights have transformed how we manage and prepare our squad, making every decision sharper and more effective. We have been using their App and the feedback from our players has been super positive. Thanks PlayerNation`,
    role: "Player",
  },
  {
    image: "/bjorn.jpeg",
    countryFlag: "https://flagcdn.com/w40/us.png",
    name: "Bjorn",
    review:
      "I was consistently impressed with the stats, analytics and insights I got from Playernation last season. The data gave me the ability to better understand and explain what I saw during matches, which, in turn, let me focus training sessions and make team selection decisions in an objective way.  Knowing a player completed 87% of their passes, that a defender made 9 tackles and 4 blocks, that my keeper had a series of dangerous losses from distribution, that's all information I could use to improve the team and coach individual players. The data is addictive.",
    role: "Coach & Parent",
  },
  {
    image: "/aleksi.jpeg",
    countryFlag: "https://flagcdn.com/w40/fi.png",
    name: "Aleksi",
    review:
      "Playernation helped our team a lot during a challenging period. We started using the analysis during the first half of the spring season, and when we faced the same opponents in the second half, our results were noticeably better. I’m sure that Playernation’s analysis played an important role in helping us achieve those improved results", 
       role: "Coach",
  },
  {
    image: "/andreas.jpeg",
    countryFlag: "https://flagcdn.com/w40/se.png",
    name: "Andreas",
    review:"Playernation has become an invaluable coaching tool, helping us track player development and engage players and parents more effectively. The team behind it is incredibly responsive, easy to work with, and genuinely committed to improving the platform based on our feedback.",
      role: "Coach & Parent",
  },
];

const roleStyles: Record<string, string> = {
  Coach: "bg-primary/20 text-primary border-primary/30",
  Parent: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  Player: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "Coach & Parent": "bg-primary/20 text-primary border-primary/30",
};

const LONG_REVIEW_CHAR_THRESHOLD = 140;
const EXPAND_TRANSITION = "duration-500 ease-in-out";
const OVERLAY_INSET_PX = 12; // matches Tailwind inset-3 / m-3

function isLongReview(review: string) {
  return review.length > LONG_REVIEW_CHAR_THRESHOLD || review.includes("\n");
}

function ReviewHeader({ item }: { item: GalleryReview }) {
  return (
    <div className="flex items-start justify-between gap-2.5">
      <div className="flex min-w-0 items-center gap-2">
        <Image
          src={item.countryFlag}
          alt={`${item.name} country flag`}
          width={100}
          height={100}
          className="h-4 w-6 shrink-0 rounded-sm object-cover"
        />
        <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
      </div>
      <span
        className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
          roleStyles[item.role] ?? "bg-white/10 text-white/80 border-white/20"
        }`}
      >
        {item.role}
      </span>
    </div>
  );
}

function ReviewCard({ item, index }: { item: GalleryReview; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [needsScroll, setNeedsScroll] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const collapsedHeightRef = useRef(0);
  const [overlayMaxHeight, setOverlayMaxHeight] = useState<number | undefined>(
    undefined,
  );
  const showToggle = isLongReview(item.review);

  useLayoutEffect(() => {
    const cardEl = cardRef.current;
    const overlayEl = overlayRef.current;
    if (!cardEl || !overlayEl) return;

    if (!expanded) {
      setNeedsScroll(false);
      const collapsedHeight = overlayEl.scrollHeight;
      collapsedHeightRef.current = collapsedHeight;
      setOverlayMaxHeight(collapsedHeight);
      return;
    }

    const cardCap = cardEl.clientHeight - OVERLAY_INSET_PX * 2;
    const previousMaxHeight = overlayEl.style.maxHeight;
    overlayEl.style.maxHeight = "none";
    const fullHeight = overlayEl.scrollHeight;
    overlayEl.style.maxHeight = previousMaxHeight;

    const targetHeight = Math.min(fullHeight, cardCap);
    setNeedsScroll(fullHeight > cardCap);

    // Hold collapsed height first so the browser can animate max-height upward.
    setOverlayMaxHeight(collapsedHeightRef.current);

    let expandFrame = 0;
    const startFrame = requestAnimationFrame(() => {
      expandFrame = requestAnimationFrame(() => {
        setOverlayMaxHeight(targetHeight);
      });
    });

    return () => {
      cancelAnimationFrame(startFrame);
      cancelAnimationFrame(expandFrame);
    };
  }, [item.review, expanded]);

  const handleToggle = () => {
    if (!expanded) {
      setExpanded(true);
      return;
    }

    setIsCollapsing(true);
    setNeedsScroll(false);
    setOverlayMaxHeight(collapsedHeightRef.current);
  };

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "max-height" || !isCollapsing) return;
    setIsCollapsing(false);
    setExpanded(false);
  };

  return (
    <article
      className={`group relative w-full max-w-[17rem] overflow-hidden rounded-2xl border border-border transition-transform duration-300 sm:max-w-[17rem] lg:max-w-[19rem] ${
        expanded ? "z-20" : ""
      } ${index % 3 === 1 ? "lg:-translate-y-7" : ""}`}
    >
      <div ref={cardRef} className="relative aspect-3/4 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 272px, (max-width: 1024px) 272px, 304px"
          className={`object-cover transition-transform ${EXPAND_TRANSITION} ${
            expanded ? "scale-100" : "group-hover:scale-105"
          }`}
        />

        <div
          ref={overlayRef}
          onTransitionEnd={handleTransitionEnd}
          className={`absolute bottom-3 left-3 right-3 flex flex-col overflow-hidden rounded-xl border border-border bg-black/55 p-3.5 backdrop-blur-md transition-[max-height] will-change-[max-height] sm:p-4 ${EXPAND_TRANSITION}`}
          style={{ maxHeight: overlayMaxHeight }}
        >
          <div
            className={
              needsScroll
                ? "min-h-0 flex-1 overflow-y-auto pb-1 scrollbar-none"
                : undefined
            }
          >
            <ReviewHeader item={item} />
            <p
              className={`mt-1.5 text-[11px] leading-[1.35] text-white/85 sm:text-xs ${
                !expanded && showToggle ? "line-clamp-3" : "pb-0.5"
              }`}
            >
              &ldquo;{item.review}&rdquo;
            </p>
          </div>
          {showToggle ? (
            <button
              type="button"
              onClick={handleToggle}
              className="mt-2 shrink-0 cursor-pointer self-start text-[11px] font-semibold text-primary transition-colors hover:text-primary/80 sm:text-xs"
            >
              {expanded ? "See less" : "See more"}
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function GalleryReviewSection() {
  return (
    <section>
      <div className="mx-auto max-w-7.5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by players, coaches &amp; parents around the world
          </h2>
          {/* <p className="mt-4 text-muted">
            Real stories from the PlayerNation community around the world.
          </p> */}
        </div>

        <div className="mt-12 grid justify-items-center gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5 lg:pt-4">
          {galleryReviews.map((item, index) => (
            <ReviewCard key={`${item.name}-${item.role}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
