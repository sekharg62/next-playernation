"use client";
import Image from "next/image";
import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";
import { useEffect, useState } from "react";
import { getTotalUserCount } from "@/services/authApiServices";
import { formatCompactNumber } from "@/utils/formatCompactNumber";

// Add more avatars here (must exist in /public)
const avatarImages = ["/sid.png", "/sajal.png","/sid.png","/sajal.png",];

export default function HeroSection() {

  const [totalUserCount, setTotalUserCount] = useState<number>(0);

  useEffect(() => {
    fetchTotalUserCount();
  }, []);

  const fetchTotalUserCount = async () => {
    try {
      const response = await getTotalUserCount();

      if (response.success && response.data) {
        setTotalUserCount(response.data.totalCount || 0);
      }
    } catch {
      // Handle error silently
    }
  };
  return (
    <section>
      <div className="mx-auto max-w-7.5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-16">
        <div className="grid items-center gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-0">
          {/* Left — Hero content */}
          <div className="flex flex-col items-start justify-center">
            {/* Social proof badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-border px-3 py-2">
              <div className="flex -space-x-2">
                {avatarImages.map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background"
                  >
                    <Image
                      src={src}
                      alt={`User avatar ${i + 1}`}
                      fill
                      sizes="28px"
                      className="object-cover"
                      priority={i < 2}
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted">
                Loved by <span className="text-primary">{formatCompactNumber(totalUserCount)}</span> players
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-8 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Turn your match video into
              <br />
              pro stats and highlights
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Get stats, ratings, highlights and insights — built for every
              player, coach and parent, not just the pros.
            </p>

            {/* Store badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AppStoreBadge className="h-11 sm:h-12" />
              <GooglePlayBadge className="h-11 sm:h-12" />
            </div>
          </div>

          {/* Right — Input → Output visual */}
          <div className="relative flex min-h-[min(52vh,440px)] items-center justify-center sm:min-h-[min(58vh,500px)] lg:min-h-0 lg:h-full lg:justify-end">
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div className="h-full max-h-[min(72vh,700px)] w-full max-w-md rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="relative z-10 w-fit -mr-2 -rotate-6 sm:-mr-4 lg:-mr-5 lg:-rotate-10">
              <Image
                src="/input-img.png"
                alt="Submit your game"
                width={520}
                height={1040}
                className="h-[min(52vh,480px)] w-auto object-contain sm:h-[min(58vh,540px)] lg:h-[min(68vh,640px)] xl:h-[min(72vh,700px)]"
                priority
              />
               <div className="absolute top-[17%] left-1/2 z-10 w-[62%] -translate-x-1/2 overflow-hidden aspect-video ">
                <Image
                  src="/hero-vdo.gif"
                  alt="Match footage preview"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 30vw, 200px"
                  className="object-cover"
                />
              </div> 
            </div>
{/* 
            <HeroLoopyArrow className="relative z-20 -mx-3 h-[min(10vh,5rem)] w-auto shrink-0 sm:-mx-5 lg:-mx-7 lg:h-24 lg:w-32" />
 */}
            <div className="relative z-10 -ml-2 sm:-ml-4 lg:-ml-5">
              <Image
                src="/output-img.png"
                alt="Match analysis and stats"
                width={540}
                height={1080}
                className="h-[min(54vh,500px)] w-auto rotate-6 object-contain  sm:h-[min(60vh,560px)] lg:h-[min(70vh,660px)] lg:rotate-10 xl:h-[min(74vh,720px)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
