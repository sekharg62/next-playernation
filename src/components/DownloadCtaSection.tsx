import AppStoreBadge from "@/components/AppStoreBadge";
import GooglePlayBadge from "@/components/GooglePlayBadge";
import { formatCompactNumber } from "@/utils/formatCompactNumber";

type DownloadCtaSectionProps = {
  totalUserCount: number;
};

export default function DownloadCtaSection({
  totalUserCount,
}: DownloadCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      <div
        className="absolute inset-0 bg-linear-to-b from-[#0c0c0c] via-[#090909] to-background"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,rgba(192,254,0,0.06),transparent_72%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(192,254,0,0.03),transparent_42%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_50%,rgba(192,254,0,0.03),transparent_42%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_82%)] bg-size-[48px_48px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7.5xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex max-w-5xl items-center justify-center gap-3 sm:gap-5 lg:gap-8">
         {/*  <Image
            src="/football.png"
            alt=""
            width={100}
            height={120}
            className="pointer-events-none hidden h-16 w-auto shrink-0 sm:block md:h-20 lg:h-24"
            aria-hidden
          /> */}

          <div className="relative min-w-0 flex-1 max-w-3xl">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-3xl"
              aria-hidden
            />

            <div className="relative rounded-3xl bg-linear-to-br from-white/10 via-white/4 to-white/6 p-px shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_48px_rgba(192,254,0,0.04)]">
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] border border-white/8 bg-black/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(255,255,255,0.02)] backdrop-blur-2xl backdrop-saturate-125">
              <div
                className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/8 via-white/2 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(192,254,0,0.07),transparent_62%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/18 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -left-16 top-1/4 h-40 w-40 rounded-full bg-primary/5 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-16 bottom-1/4 h-40 w-40 rounded-full bg-primary/4 blur-3xl"
                aria-hidden
              />

              <div className="relative px-8 py-14 text-center sm:px-16 sm:py-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                  Ready to Join{" "}
                  <span className="bg-linear-to-r from-primary via-[#d8ff4d] to-primary bg-clip-text text-transparent">
                    PlayerNation?
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                  <span className="font-semibold text-primary">
                    {formatCompactNumber(totalUserCount)}
                  </span>{" "}
                  player performances analyzed.{" "}
                  <span className="text-foreground/90">Yours could be next.</span>
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <AppStoreBadge className="h-11 transition-transform hover:scale-[1.03] sm:h-12" />
                  <GooglePlayBadge className="h-11 transition-transform hover:scale-[1.03] sm:h-12" />
                </div>
              </div>
            </div>
            </div>
          </div>

        {/*   <Image
            src="/football.png"
            alt=""
            width={100}
            height={120}
            className="pointer-events-none hidden h-16 w-auto shrink-0 scale-x-[-1] sm:block md:h-20 lg:h-24"
            aria-hidden
          /> */}
        </div>
      </div>
    </section>
  );
}
