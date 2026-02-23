"use client";

import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_SRC =
  "https://videosbucketpurposepath.s3.us-east-2.amazonaws.com/0820.mov";
const HERO_VIDEO_VOLUME = 0.5;

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    // Start muted for reliable autoplay across browsers.
    video.defaultMuted = true;
    video.muted = true;
    video.volume = HERO_VIDEO_VOLUME;
    setIsMuted(true);

    const startPlayback = async () => {
      try {
        await video.play();
      } catch {
        // Ignore if browser blocks autoplay entirely.
      }
    };

    // Best effort: switch to 50% sound on load when policy allows.
    const tryEnableSound = async () => {
      try {
        video.muted = false;
        await video.play();
        setIsMuted(false);
      } catch {
        video.muted = true;
        setIsMuted(true);
      }
    };

    void (async () => {
      await startPlayback();
      await tryEnableSound();
    })();
  }, []);

  useEffect(() => {
    const onAnyMediaPlay = (event: Event) => {
      const target = event.target;
      const heroVideo = videoRef.current;

      if (!(target instanceof HTMLMediaElement) || !heroVideo) {
        return;
      }

      if (target !== heroVideo) {
        heroVideo.muted = true;
        setIsMuted(true);
      }
    };

    // Capture play events from any media on the page.
    document.addEventListener("play", onAnyMediaPlay, true);

    return () => {
      document.removeEventListener("play", onAnyMediaPlay, true);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const syncMutedState = () => {
      setIsMuted(video.muted);
    };

    video.addEventListener("volumechange", syncMutedState);

    return () => {
      video.removeEventListener("volumechange", syncMutedState);
    };
  }, []);

  const handlePause = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    void video.play().catch(() => {
      // If replay is blocked, keep silent; browser controls next state.
    });
  };

  const handleToggleMute = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const nextMuted = !isMuted;
    video.muted = nextMuted;

    if (!nextMuted) {
      video.volume = HERO_VIDEO_VOLUME;
      void video.play().catch(() => {
        // Browser policy can block unmuting without user gesture in some cases.
        video.muted = true;
        setIsMuted(true);
      });
    }

    setIsMuted(nextMuted);
  };

  return (
    <section className="hero-video">
      <div className="hero-video-shell">
        <video
          ref={videoRef}
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="PurposePath story reel"
          onPause={handlePause}
        />
        <button
          type="button"
          className="hero-audio-toggle"
          onClick={handleToggleMute}
          aria-pressed={isMuted}
          aria-label={isMuted ? "Turn hero video sound on" : "Turn hero video sound off"}
        >
          {isMuted ? "Turn Sound On" : "Turn Sound Off"}
        </button>
      </div>
    </section>
  );
}
