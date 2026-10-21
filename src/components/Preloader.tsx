"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [curtainOpen, setCurtainOpen] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Step 1: Let the dots animate smoothly, then split curtains
    const timer1 = setTimeout(() => {
      setCurtainOpen(true);
      document.body.style.overflow = "";

      // Notify page components (HeroSection text animation) that curtains are opening
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("auditclue:curtainOpen"));
      }
    }, 900);

    // Step 2: Curtains finish sliding away, completely unmount component from DOM
    const timer2 = setTimeout(() => {
      setIsFinished(true);
    }, 1700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = "";
    };
  }, []);

  if (isFinished) {
    return null;
  }

  return (
    <div
      id="home-curtain-preloader"
      aria-label="Loading Auditclue"
      role="status"
      className={`fixed inset-0 z-[99999] select-none overflow-hidden ${
        curtainOpen ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      <style>{`
        @keyframes luxuryDotWave {
          0%, 100% {
            transform: translateY(0) scale(0.85);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-9px) scale(1.25);
            opacity: 1;
          }
        }
      `}</style>

      {/* Left Curtain Panel with Bottom-Left Logo (1px overlap prevents sub-pixel line) */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-[calc(50%+1px)] bg-white transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] will-change-transform z-10 flex flex-col justify-end p-6 sm:p-10 md:p-14 ${
          curtainOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Brand Logo in Bottom-Left Corner */}
        <div className="relative">
          <Image
            src="/logo-transparent.png"
            alt="Auditclue Global Advisory Services LLC"
            width={240}
            height={80}
            priority
            className="h-auto w-[140px] sm:w-[190px] md:w-[230px] object-contain drop-shadow-xs"
          />
        </div>
      </div>

      {/* Right Curtain Panel (1px overlap prevents sub-pixel line) */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-[calc(50%+1px)] bg-white transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] will-change-transform z-10 ${
          curtainOpen ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Center Multiple Moving Brand Dots */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none transition-all duration-300 ${
          curtainOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* Dot 1: Brand Navy */}
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#233F5B]"
            style={{
              animation: "luxuryDotWave 0.85s ease-in-out infinite",
              animationDelay: "0s",
              boxShadow: "0 0 8px rgba(35, 63, 91, 0.4)",
            }}
          />
          {/* Dot 2: Primary Emerald (Center & Prominent) */}
          <span
            className="w-3 h-3 rounded-full bg-[#36A783]"
            style={{
              animation: "luxuryDotWave 0.85s ease-in-out infinite",
              animationDelay: "0.15s",
              boxShadow: "0 0 10px rgba(54, 167, 131, 0.7)",
            }}
          />
          {/* Dot 3: Vibrant Mint */}
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#10B981]"
            style={{
              animation: "luxuryDotWave 0.85s ease-in-out infinite",
              animationDelay: "0.3s",
              boxShadow: "0 0 8px rgba(16, 185, 129, 0.5)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
