"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroHighlightVideoProps = {
  src: string;
  poster?: string;
  containerClassName?: string;
  /** Minimum time to show poster before loading video (ms). */
  posterDelayMs?: number;
};

const defaultContainerClassName =
  "pointer-events-none absolute top-[46%] left-1/2 z-20 aspect-video w-[82%] -translate-x-1/2 overflow-hidden rounded-md bg-black sm:rounded-lg";

const POSTER_FADE_MS = 300;

export default function HeroHighlightVideo({
  src,
  poster = "/output_720p-poster.jpg",
  containerClassName = defaultContainerClassName,
  posterDelayMs = 500,
}: HeroHighlightVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const delayTimer = window.setTimeout(() => {
      setVideoSrc(src);
    }, posterDelayMs);

    return () => window.clearTimeout(delayTimer);
  }, [src, posterDelayMs]);

  useEffect(() => {
    if (!videoSrc) return;

    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const revealVideo = () => {
      if (cancelled) return;
      setShowVideo(true);
      void video.play().catch(() => {});
    };

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      revealVideo();
      return;
    }

    video.addEventListener("canplay", revealVideo, { once: true });
    video.load();

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", revealVideo);
    };
  }, [videoSrc]);

  return (
    <div className={`${containerClassName} isolate`}>
      <Image
        src={poster}
        alt=""
        fill
        sizes="(max-width: 768px) 40vw, 320px"
        className={`object-cover transition-opacity duration-300 ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
        style={{ transitionDuration: `${POSTER_FADE_MS}ms` }}
        priority
        aria-hidden
      />
      <video
        ref={videoRef}
        src={videoSrc ?? undefined}
        className={`hero-highlight-video pointer-events-none absolute inset-0 h-full w-full rounded-[inherit] object-cover transition-opacity ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: `${POSTER_FADE_MS}ms` }}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        aria-label="Match highlights preview"
      />
    </div>
  );
}
