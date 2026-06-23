"use client";

type HeroHighlightVideoProps = {
  src: string;
  containerClassName?: string;
};

const defaultContainerClassName =
  "pointer-events-none absolute top-[46%] left-1/2 z-20 aspect-video w-[82%] -translate-x-1/2 overflow-hidden rounded-md bg-black sm:rounded-lg";

export default function HeroHighlightVideo({
  src,
  containerClassName = defaultContainerClassName,
}: HeroHighlightVideoProps) {
  return (
    <div className={`${containerClassName} isolate`}>
      <video
        src={src}
        className="hero-highlight-video pointer-events-none h-full w-full rounded-[inherit] object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        aria-label="Match highlights preview"
      />
    </div>
  );
}
