"use client";

import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type HeroHighlightVideoProps = {
  src: string;
  containerClassName?: string;
};

const CONTROLS_HIDE_DELAY_MS = 2000;

const defaultContainerClassName =
  "pointer-events-auto absolute top-[46%] left-1/2 z-20 aspect-video w-[82%] -translate-x-1/2 overflow-hidden rounded-md bg-black sm:rounded-lg";

export default function HeroHighlightVideo({
  src,
  containerClassName = defaultContainerClassName,
}: HeroHighlightVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideControlsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const clearHideTimer = useCallback(() => {
    if (hideControlsTimerRef.current) {
      clearTimeout(hideControlsTimerRef.current);
      hideControlsTimerRef.current = null;
    }
  }, []);

  const scheduleHideControls = useCallback(() => {
    clearHideTimer();
    hideControlsTimerRef.current = setTimeout(() => {
      if (!videoRef.current?.paused) {
        setShowControls(false);
      }
    }, CONTROLS_HIDE_DELAY_MS);
  }, [clearHideTimer]);

  const revealControls = useCallback(() => {
    setShowControls(true);
    scheduleHideControls();
  }, [scheduleHideControls]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncProgress = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;
      setProgress(video.currentTime / video.duration);
    };

    const onPlay = () => {
      setIsPlaying(true);
      revealControls();
    };

    const onPause = () => {
      setIsPlaying(false);
      setShowControls(true);
      clearHideTimer();
    };

    syncProgress();
    if (!video.paused) {
      revealControls();
    }

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("playing", onPlay);
    video.addEventListener("timeupdate", syncProgress);
    video.addEventListener("loadedmetadata", syncProgress);

    return () => {
      clearHideTimer();
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("playing", onPlay);
      video.removeEventListener("timeupdate", syncProgress);
      video.removeEventListener("loadedmetadata", syncProgress);
    };
  }, [src, revealControls, clearHideTimer]);

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
    <div className={`${containerClassName} isolate`}>
      <video
        ref={videoRef}
        src={src}
        className="hero-highlight-video pointer-events-none h-full w-full rounded-[inherit] object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={true}
        controlsList="nodownload noplaybackrate noremoteplayback"
        
        
        aria-label="Match highlights preview"
      />

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause highlights video" : "Play highlights video"}
        className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center overflow-hidden rounded-[inherit] bg-black/15 transition-colors hover:bg-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
      >
        <span
          className={`pointer-events-none flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-primary backdrop-blur-sm transition-opacity duration-300 sm:h-9 sm:w-9 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          {isPlaying ? (
            <Pause className="h-3.5 w-3.5 fill-primary sm:h-4 sm:w-4" aria-hidden />
          ) : (
            <Play className="ml-0.5 h-3.5 w-3.5 fill-primary sm:h-4 sm:w-4" aria-hidden />
          )}
        </span>
      </button>

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 px-1.5 pb-1.5 transition-opacity duration-300 sm:px-2 sm:pb-2 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!showControls}
      >
        <div className="h-1 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-150 ease-linear"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
