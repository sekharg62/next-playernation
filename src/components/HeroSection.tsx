import Image from "next/image";
import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";
import HeroHighlightVideo from "./HeroHighlightVideo";
import { formatCompactNumber } from "@/utils/formatCompactNumber";

// Add more avatars here (must exist in /public)
const avatarImages = ["/sid.png", "/sajal.jpg", "/lakhani.jpg", "/ritwik.jpg"];

type HeroSectionProps = {
  totalUserCount: number;
};

const outputVideoClassName =
  "pointer-events-auto absolute left-1/2 z-10 -translate-x-1/2 overflow-hidden rounded-[7%] bg-black top-[5.5%] h-[86%] w-[81%] sm:top-[5%] sm:h-[87%] sm:w-[82%] md:top-[4.5%] md:h-[88%] md:w-[84%] lg:top-[3%] lg:h-[94%] lg:w-[88%] lg:rounded-[8%]";

const videoUrl ="https://dg6zlav0cbqax.cloudfront.net/AwsMediaConvertedVideos/output/eee9f2ca-442e-4534-a3f0-88f6a139a1fd/match_highlights_1781787497019_with_music.mp4";
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
            Upload your full game footage and get pro-level stats, ratings, insights and highlights. Built for every player, coach and parent, not just for the pros.
            </p>

            {/* Store badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AppStoreBadge className="h-11 sm:h-12" />
              <GooglePlayBadge className="h-11 sm:h-12" />
            </div>
          </div>

          {/* Right — Input → Output visual */}
          <div className="relative flex min-h-[min(58vh,500px)] items-center justify-center sm:min-h-[min(64vh,560px)] lg:min-h-0 lg:h-full lg:justify-end">
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div className="h-full max-h-[min(80vh,780px)] w-full max-w-lg rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="relative z-10 flex items-center justify-center gap-8 sm:gap-10 lg:gap-14">
              <div className="relative z-20 w-fit -rotate-2 lg:-rotate-3">
                <Image
                  src="/input.png"
                  alt="Submit your game"
                  width={1040}
                  height={2080}
                  className="pointer-events-none h-[min(55vh,480px)] w-auto object-contain sm:h-[min(62vh,540px)] lg:h-[min(75vh,720px)] xl:h-[min(82vh,800px)]"
                  priority
                />
                <HeroHighlightVideo src={videoUrl} />
              </div>

              <Image
                src="/arrow-new.svg"
                alt=""
                aria-hidden
                width={100}
                height={100}
                className="pointer-events-none absolute top-[8%] left-1/2 z-30 h-20 w-20 -translate-x-1/2  rotate-[360deg] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
              />

              <div className="relative z-0 w-fit rotate-0 lg:rotate-5">
                <div className="relative overflow-hidden">
                  <Image
                    src="/output.png"
                    alt="Match analysis and stats"
                    width={540}
                    height={1080}
                    className="pointer-events-none h-[min(60vh,480px)] w-auto object-contain sm:h-[min(62vh,540px)] lg:h-[min(75vh,720px)] xl:h-[min(82vh,800px)]"
                    priority
                  />
                 {/*  <HeroHighlightVideo
                    src="/output-vdo.mp4"
                    containerClassName={outputVideoClassName}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
