"use client";

import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_SRC =
  "https://videosbucketpurposepath.s3.us-east-2.amazonaws.com/0820.mov";
const HERO_VIDEO_VOLUME = 0.4;

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.volume = HERO_VIDEO_VOLUME;
    video.muted = false;
    setIsMuted(false);

    // Try to start with sound; keep user preference if autoplay is blocked.
    const playWithSound = async () => {
      try {
        await video.play();
      } catch {
        // Ignore if browser blocks autoplay entirely.
      }
    };

    void playWithSound();
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
        // Keep UI in sync if browser blocks unmute playback.
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
