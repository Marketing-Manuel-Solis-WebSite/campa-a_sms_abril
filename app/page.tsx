"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const YOUTUBE_ID = "3Z6BOOCBgas";
const PHONE = "+18329248272";
const PHONE_DISPLAY = "+1 (832) 924-8272";
const INTRO_MS = 10000;

export default function Home() {
  const [phase, setPhase] = useState<"intro" | "flash" | "main">("intro");
  const [videoActive, setVideoActive] = useState(false);
  const transitioned = useRef(false);

  const goToMain = useCallback(() => {
    if (transitioned.current) return;
    transitioned.current = true;
    setPhase("flash");
    setTimeout(() => setPhase("main"), 800);
  }, []);

  useEffect(() => {
    if (phase !== "intro") return;
    const t = setTimeout(goToMain, INTRO_MS);
    return () => clearTimeout(t);
  }, [phase, goToMain]);

  return (
    <>
      {/* ═══════════ INTRO: 10-second YouTube teaser ═══════════ */}
      {phase === "intro" && (
        <div className="fixed inset-0 z-50 bg-black overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full pointer-events-none scale-125"
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Uniendo Familias - Adelanto"
          />

          {/* Cinematic vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)",
            }}
          />

          {/* Logo */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl px-5 py-2.5 shadow-lg">
              <Image
                src="/LogoManuelSolis.png"
                alt="Law Offices of Manuel Solis"
                width={170}
                height={43}
                priority
              />
            </div>
          </div>

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
                animation: "progress 10s linear forwards",
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

      {/* ═══════════ MAIN LANDING PAGE ═══════════ */}
      <div className={phase === "main" ? "animate-fadeIn" : "hidden"}>
        {/* ── HERO ── */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
          style={{
            background:
              "linear-gradient(170deg, #0D1B3E 0%, #15305A 30%, #1A3A6B 55%, #2B5D9E 75%, #C5A55A 100%)",
          }}
        >
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Logo */}
          <div className="relative z-10 mb-10 animate-float">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-2xl border border-white/30">
              <Image
                src="/LogoManuelSolis.png"
                alt="Law Offices of Manuel Solis"
                width={260}
                height={65}
                priority
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center tracking-tight text-gradient-gold mb-4 leading-none">
            UNIENDO FAMILIAS
          </h1>
          <p className="relative z-10 text-lg sm:text-xl md:text-2xl text-white/70 font-light tracking-[0.3em] uppercase text-center">
            Con Manuel Solis
          </p>

          {/* Decorative line */}
          <div className="relative z-10 w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-8 mb-12" />

          {/* Scroll indicator */}
          <a
            href="#video"
            className="relative z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          >
            <span className="text-xs tracking-[0.3em] uppercase">
              Ver Video
            </span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>

          {/* Wave separator bottom */}
          <div className="absolute -bottom-px left-0 w-full">
            <svg
              viewBox="0 0 1440 180"
              preserveAspectRatio="none"
              className="w-full h-[80px] sm:h-[120px] md:h-[180px]"
            >
              <path
                fill="#C5A55A"
                fillOpacity="0.12"
                d="M0,100 C240,40 480,160 720,100 C960,40 1200,140 1440,80 L1440,180 L0,180 Z"
              />
              <path
                fill="#C5A55A"
                fillOpacity="0.06"
                d="M0,120 C360,60 720,160 1080,100 C1260,70 1380,110 1440,100 L1440,180 L0,180 Z"
              />
              <path
                fill="#ffffff"
                d="M0,140 C360,100 720,170 1080,130 C1260,115 1380,150 1440,130 L1440,180 L0,180 Z"
              />
            </svg>
          </div>
        </section>

        {/* ── VIDEO SECTION ── */}
        <section
          id="video"
          className="relative bg-white pt-16 pb-32 md:pt-24 md:pb-44 px-4 sm:px-6"
        >
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-10 md:mb-14">
              <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
                Episodio 2
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
                Tres Décadas de Vuelta a Casa
              </h2>
              <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Conoce la historia de Eva López y cómo el Abogado Manuel Solis
                la ayudó a reunirse con su familia después de 30 años
              </p>
            </div>

            {/* Video container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(13,27,62,0.25)] border border-gold/20">
              {!videoActive ? (
                <button
                  onClick={() => setVideoActive(true)}
                  className="relative w-full h-full block cursor-pointer bg-black group"
                  aria-label="Reproducir video completo"
                >
                  <Image
                    src="/CoverVideo.png"
                    alt="Uniendo Familias - Ep. 2 Eva López - Tres Décadas de Vuelta a Casa"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent group-hover:from-black/35 group-hover:via-black/5 transition-all duration-500" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="play-btn group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2">
                    <span className="px-5 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-medium tracking-widest uppercase border border-white/20 whitespace-nowrap">
                      Reproducir Video Completo
                    </span>
                  </div>
                </button>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title="Uniendo Familias - Ep. 2 Eva López"
                />
              )}
            </div>
          </div>

          {/* Wave separator to CTA */}
          <div className="absolute -bottom-px left-0 w-full">
            <svg
              viewBox="0 0 1440 180"
              preserveAspectRatio="none"
              className="w-full h-[80px] sm:h-[120px] md:h-[180px]"
            >
              <path
                fill="#C5A55A"
                fillOpacity="0.08"
                d="M0,80 C360,150 720,40 1080,120 C1260,160 1380,90 1440,100 L1440,180 L0,180 Z"
              />
              <path
                fill="#0D1B3E"
                fillOpacity="0.04"
                d="M0,100 C480,40 960,160 1440,80 L1440,180 L0,180 Z"
              />
              <path
                fill="#0D1B3E"
                d="M0,130 C240,170 480,110 720,140 C960,170 1200,120 1440,150 L1440,180 L0,180 Z"
              />
            </svg>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section
          className="relative py-24 sm:py-28 md:py-32 px-4 sm:px-6 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #0D1B3E 0%, #15305A 50%, #0D1B3E 100%)",
          }}
        >
          {/* Decorative glows */}
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            {/* Phone icon */}
            <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
              <svg
                className="w-8 h-8 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ¿Necesita Ayuda con su{" "}
              <span className="text-gradient-gold">Caso de Inmigración</span>?
            </h2>
            <p className="text-white/60 text-base sm:text-lg md:text-xl mb-12 leading-relaxed max-w-xl mx-auto">
              El Abogado Manuel Solis tiene más de 30 años de experiencia
              reuniendo familias. Llame ahora para una consulta.
            </p>

            {/* CTA Button */}
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 py-5 sm:py-6 rounded-full text-lg sm:text-xl md:text-2xl font-bold text-navy transition-all duration-300 hover:scale-105 animate-pulseGlow no-underline"
              style={{
                background:
                  "linear-gradient(135deg, #C5A55A 0%, #E5D5A0 50%, #C5A55A 100%)",
              }}
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {PHONE_DISPLAY}
            </a>

            <p className="text-white/40 text-xs sm:text-sm mt-8 tracking-[0.2em] uppercase">
              Consulta disponible en Español
            </p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-[#060C1A] py-8 px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
            <div className="bg-white/90 rounded-lg px-4 py-2">
              <Image
                src="/LogoManuelSolis.png"
                alt="Law Offices of Manuel Solis"
                width={130}
                height={33}
              />
            </div>
            <div className="w-16 h-px bg-gold/20" />
            <p className="text-white/25 text-xs text-center">
              © 2025 Law Offices of Manuel Solis. Todos los derechos reservados.
              Houston, TX.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
