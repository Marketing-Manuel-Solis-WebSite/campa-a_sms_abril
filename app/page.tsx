"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const YOUTUBE_ID = "3Z6BOOCBgas";
const INTRO_SECONDS = 15;

export default function Home() {
  const [phase, setPhase] = useState<"intro" | "flash" | "main">("intro");
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const transitioned = useRef(false);

  const goToMain = useCallback(() => {
    if (transitioned.current) return;
    transitioned.current = true;
    setPhase("flash");
    setTimeout(() => setPhase("main"), 800);
  }, []);

  useEffect(() => {
    if (phase !== "intro") return;
    const video = introVideoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (video.currentTime >= INTRO_SECONDS) {
        video.pause();
        goToMain();
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.play().catch(() => {
      // Autoplay blocked — skip to main after timeout
      setTimeout(goToMain, INTRO_SECONDS * 1000);
    });

    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, [phase, goToMain]);

  return (
    <>
      {/* ═══════════ INTRO: 15-second local video teaser ═══════════ */}
      {phase === "intro" && (
        <div className="fixed inset-0 z-50 bg-black overflow-hidden">
          <video
            ref={introVideoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/VideoInicio.mp4"
            muted
            playsInline
            preload="auto"
          />

          {/* Cinematic vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)",
            }}
          />

          {/* Skip */}
          <button
            onClick={goToMain}
            className="absolute bottom-8 right-6 sm:right-8 z-10 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/25 transition-all text-xs sm:text-sm font-medium tracking-widest uppercase border border-white/20"
          >
            Saltar
          </button>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-10">
            <div
              className="h-full rounded-r-full"
              style={{
                animation: "progress 15s linear forwards",
                background: "linear-gradient(90deg, #C5A55A, #E5D5A0)",
              }}
            />
          </div>
        </div>
      )}

      {/* ═══════════ FLASH TRANSITION ═══════════ */}
      {phase === "flash" && (
        <div className="fixed inset-0 z-50 bg-white animate-flash" />
      )}

      {/* ═══════════ MAIN: Single screen, no scroll ═══════════ */}
      <div className={phase === "main" ? "animate-fadeIn" : "hidden"}>
        <main className="h-screen overflow-hidden flex flex-col items-center px-4 sm:px-6 py-4 sm:py-6 md:py-8 relative">
          {/* ── Background: Gold/White/Cream waves with blue accents ── */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #FBF7EC 12%, #F0E4C0 30%, #E5D5A0 48%, #C5A55A 55%, #E5D5A0 62%, #F0E4C0 75%, #FBF7EC 88%, #FFFFFF 100%)",
            }}
          >
            {/* Blue wave accents (subtle) */}
            <svg
              className="absolute top-[8%] left-0 w-full h-[100px] opacity-[0.06]"
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
            >
              <path
                fill="#0D1B3E"
                d="M0,50 C360,100 720,0 1440,70 L1440,100 L0,100 Z"
              />
            </svg>
            <svg
              className="absolute top-[38%] left-0 w-full h-[100px] opacity-[0.04]"
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
            >
              <path
                fill="#1A3A6B"
                d="M0,20 C480,90 960,10 1440,60 L1440,100 L0,100 Z"
              />
            </svg>
            <svg
              className="absolute bottom-[18%] left-0 w-full h-[100px] opacity-[0.06]"
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
            >
              <path
                fill="#0D1B3E"
                d="M0,70 C240,10 720,90 1440,30 L1440,100 L0,100 Z"
              />
            </svg>
            <svg
              className="absolute bottom-[2%] left-0 w-full h-[60px] opacity-[0.03]"
              viewBox="0 0 1440 60"
              preserveAspectRatio="none"
            >
              <path
                fill="#1A3A6B"
                d="M0,30 C360,60 1080,0 1440,45 L1440,60 L0,60 Z"
              />
            </svg>
            {/* Gold shimmer glows */}
            <div className="absolute top-[20%] left-[5%] w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[20%] right-[5%] w-56 h-56 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-72 h-32 bg-gold/8 rounded-full blur-3xl" />
          </div>

          {/* ── Logo (no white background, blend with gold/cream bg) ── */}
          <div className="relative z-10 shrink-0">
            <Image
              src="/LogoManuelSolis.png"
              alt="Law Offices of Manuel Solis"
              width={320}
              height={80}
              priority
              className="h-14 sm:h-18 md:h-22 w-auto mix-blend-multiply"
            />
          </div>

          {/* ── Center: Title + Video ── */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-0 w-full gap-3 sm:gap-4 py-2">
            {/* Title */}
            <div className="text-center shrink-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gradient-gold leading-none">
                CASO REAL DE ÉXITO
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-navy/70 max-w-md mx-auto mt-1.5 sm:mt-2 leading-snug">
                Conoce este caso real de reunificación familiar, respaldado por los 35 años de experiencia de la Firma del Abogado Manuel Solís.
              </p>
            </div>

            {/* Video container */}
            <div
              className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_10px_50px_rgba(197,165,90,0.35)] border-2 border-gold/30 relative"
              style={{
                width: "min(92vw, calc(44vh * 16 / 9), 820px)",
              }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title="Uniendo Familias - Ep. 2 Eva López"
              />
            </div>
          </div>

          {/* ── CTA Text ── */}
          <div className="relative z-10 shrink-0 text-center max-w-sm mx-auto px-2">
            <p className="text-sm sm:text-base md:text-lg text-navy/80 font-medium leading-snug">
              Responde <span className="font-bold text-navy">&ldquo;ME INTERESA&rdquo;</span> a este mismo SMS y te contactaremos hoy para retomar tu consulta.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
