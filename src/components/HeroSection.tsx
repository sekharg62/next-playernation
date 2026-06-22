import Image from "next/image";
import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";
import { formatCompactNumber } from "@/utils/formatCompactNumber";

// Add more avatars here (must exist in /public)
const avatarImages = ["/sid.png", "/sajal.jpg", "/lakhani.jpg", "/ritwik.jpg"];

type HeroSectionProps = {
  totalUserCount: number;
};

const videoUrl =
  "https://dg6zlav0cbqax.cloudfront.net/AwsMediaConvertedVideos/output/720e3708-5d57-4b24-b118-8130965706df/match_highlights_1772524927755_with_music.mp4";

export default function HeroSection({ totalUserCount }: HeroSectionProps) {
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
                    className="relative h-8 w-8 blur-[1px] overflow-hidden rounded-full border-2 border-background"
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
                 <span className="text-primary">{formatCompactNumber(totalUserCount)}</span> player performances analyzed
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-8 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Turn your game videos into stats,
              
              highlights and memories.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Upload your game footage and get pro-level stats, ratings, insights and highlights. Built for every player, coach and parent, not just for the pros.
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

            <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              <div className="relative w-fit -rotate-6 lg:-rotate-8">
                <Image
                  src="/final-input.png"
                  alt="Submit your game"
                  width={520}
                  height={1040}
                  className="h-[min(44vh,380px)] w-auto object-contain sm:h-[min(50vh,440px)] lg:h-[min(62vh,580px)] xl:h-[min(68vh,640px)]"
                  priority
                />
                <div className="absolute top-[58%] left-1/2 z-10 aspect-video w-[78%] -translate-x-1/2 overflow-hidden rounded bg-black sm:rounded-lg">
                  <video
                    src={videoUrl}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="Match highlights preview"
                  />
                </div>
              </div>
              <div className="w-fit rotate-6 lg:rotate-8">
                <Image
                  src="/final-input.png"
                  alt="Match analysis and stats"
                  width={540}
                  height={1080}
                  className="h-[min(44vh,380px)] w-auto object-contain sm:h-[min(50vh,440px)] lg:h-[min(62vh,580px)] xl:h-[min(68vh,640px)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
