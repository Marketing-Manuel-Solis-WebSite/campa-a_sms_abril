"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { track } from "@vercel/analytics";

const YOUTUBE_ID = "3Z6BOOCBgas";
const PHONE = "+17133227646";
const PHONE_DISPLAY = "(713) 322-7646";

export default function Home() {
  const [showBadge, setShowBadge] = useState(false);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    // Simulate "people viewing" for social proof
    setActiveUsers(Math.floor(Math.random() * 8) + 3);
    const t = setTimeout(() => setShowBadge(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      className="overflow-hidden flex flex-col items-center px-3 sm:px-5 py-2 sm:py-4 md:py-6 relative animate-fadeIn"
      style={{ height: "100dvh" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FBF7EC 12%, #F0E4C0 30%, #E5D5A0 48%, #C5A55A 55%, #E5D5A0 62%, #F0E4C0 75%, #FBF7EC 88%, #FFFFFF 100%)",
        }}
      >
        <svg className="absolute top-[8%] left-0 w-full h-[100px] opacity-[0.06]" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#0D1B3E" d="M0,50 C360,100 720,0 1440,70 L1440,100 L0,100 Z" />
        </svg>
        <svg className="absolute top-[38%] left-0 w-full h-[100px] opacity-[0.04]" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#1A3A6B" d="M0,20 C480,90 960,10 1440,60 L1440,100 L0,100 Z" />
        </svg>
        <svg className="absolute bottom-[18%] left-0 w-full h-[100px] opacity-[0.06]" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#0D1B3E" d="M0,70 C240,10 720,90 1440,30 L1440,100 L0,100 Z" />
        </svg>
        <svg className="absolute bottom-[2%] left-0 w-full h-[60px] opacity-[0.03]" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="#1A3A6B" d="M0,30 C360,60 1080,0 1440,45 L1440,60 L0,60 Z" />
        </svg>
        <div className="absolute top-[20%] left-[5%] w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[5%] w-56 h-56 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-72 h-32 bg-gold/8 rounded-full blur-3xl" />
      </div>

      {/* Logo */}
      <div className="relative z-10 shrink-0 mt-2 sm:mt-3">
        <Image
          src="/LogoManuelSolis.png"
          alt="Law Offices of Manuel Solis"
          width={400}
          height={100}
          preload
          className="h-16 sm:h-20 md:h-28 w-auto mix-blend-multiply"
        />
      </div>

      {/* Center: Title + YouTube Video + CTA */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-0 w-full gap-2 sm:gap-3 py-1">
        {/* Title */}
        <div className="text-center shrink-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gradient-gold leading-none">
            CASO REAL DE ÉXITO
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-navy/70 max-w-[300px] sm:max-w-md mx-auto mt-1.5 leading-snug">
            Conoce este caso real de reunificación familiar, respaldado por
            los 35 años de experiencia de la Firma del Abogado Manuel Solís.
          </p>
        </div>

        {/* YouTube video */}
        <div className="relative">
          <div
            className="aspect-video rounded-lg sm:rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(197,165,90,0.35)] border-2 border-gold/30 relative"
            style={{
              width: "min(88vw, calc(36dvh * 16 / 9), 560px)",
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

          {/* Live viewers badge */}
          {showBadge && activeUsers > 0 && (
            <div className="absolute -top-3 -right-2 sm:-right-4 z-20 flex items-center gap-1.5 bg-navy-dark/90 backdrop-blur-sm text-white text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-lg animate-slideUp">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              {activeUsers} personas viendo
            </div>
          )}
        </div>

        {/* CTA section */}
        <div className="shrink-0 text-center flex flex-col items-center gap-2 sm:gap-2.5">
          {/* Trust line */}
          <div className="flex items-center gap-2 text-navy/60">
            <div className="flex -space-x-1.5">
              {["bg-green-500","bg-blue-500","bg-amber-500","bg-rose-500","bg-purple-500"].map((c, i) => (
                <div key={i} className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-[8px] sm:text-[9px] font-bold`}>
                  {["M","L","R","A","J"][i]}
                </div>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs leading-tight">
              <span className="font-bold text-navy/80">+2,500 familias</span> ya confiaron en nosotros
            </p>
          </div>

          {/* Main CTA */}
          <a
            href={`tel:${PHONE}`}
            onClick={() => track("call_click", { phone: PHONE, value: 1 })}
            className="group relative inline-flex flex-col items-center px-10 sm:px-14 py-3.5 sm:py-4 bg-gradient-to-b from-green-500 via-green-600 to-green-700 text-white font-bold text-lg sm:text-xl rounded-full shadow-[0_4px_24px_rgba(34,197,94,0.5)] hover:shadow-[0_4px_40px_rgba(34,197,94,0.7)] active:scale-95 transition-all tracking-wide animate-pulseGlow overflow-hidden"
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

            <span className="flex items-center gap-2 relative z-10">
              {/* Phone icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 animate-[float_2s_ease-in-out_infinite]">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              CONSULTA GRATIS
            </span>
            <span className="text-sm sm:text-base font-semibold tracking-wider opacity-90 relative z-10">
              {PHONE_DISPLAY}
            </span>
          </a>

          {/* Urgency + availability */}
          <div className="flex flex-col items-center gap-0.5">
            <p className="text-[10px] sm:text-xs text-navy/60 leading-snug flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Líneas abiertas — te atendemos ahora mismo
            </p>
            <p className="text-[9px] sm:text-[10px] text-navy/40">
              Hablamos español &bull;
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
