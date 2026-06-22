"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type HeroHighlightVideoProps = {
  src: string;
};

export default function HeroHighlightVideo({ src }: HeroHighlightVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncPlaybackState = () => setIsPlaying(!video.paused);

    syncPlaybackState();

    video.addEventListener("play", syncPlaybackState);
    video.addEventListener("pause", syncPlaybackState);
    video.addEventListener("playing", syncPlaybackState);
    video.addEventListener("loadeddata", syncPlaybackState);

    return () => {
      video.removeEventListener("play", syncPlaybackState);
      video.removeEventListener("pause", syncPlaybackState);
      video.removeEventListener("playing", syncPlaybackState);
      video.removeEventListener("loadeddata", syncPlaybackState);
    };
  }, [src]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      return;
    }

    video.pause();
  };

  return (
    <div className="pointer-events-auto absolute top-[52%] left-1/2 z-20 aspect-video w-[78%] -translate-x-1/2 overflow-hidden rounded bg-black sm:rounded-lg">
      <video
        ref={videoRef}
        src={src}
        className="pointer-events-none h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Match highlights preview"
      />

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause highlights video" : "Play highlights video"}
        className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/15 transition-colors hover:bg-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
      >
        <span className="pointer-events-none flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-primary backdrop-blur-sm sm:h-9 sm:w-9">
          {isPlaying ? (
            <Pause className="h-3.5 w-3.5 fill-primary sm:h-4 sm:w-4" aria-hidden />
          ) : (
            <Play className="ml-0.5 h-3.5 w-3.5 fill-primary sm:h-4 sm:w-4" aria-hidden />
          )}
        </span>
      </button>
    </div>
  );
}
