"use client";

import React, { useEffect } from "react";
import { FileText, Calendar, ArrowDown } from "lucide-react";

export default function ContactHeroActions() {
  const scrollTo = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;

    // Use Lenis smooth momentum scroll if active on desktop, or native smooth scroll
    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(el, { offset: -90, duration: 1.15 });
    } else {
      const navOffset = window.innerWidth >= 1024 ? 90 : 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Auto-scroll on mount & listen to hash changes (e.g. from navbar "Book a Consultation")
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash === "#book-session" || hash === "#consult-form") {
        setTimeout(() => {
          scrollTo(hash.replace("#", ""));
        }, 150);
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <div className="flex flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4 pt-3">
      {/* Button 1: Scroll to Consultation Form (Image 2) */}
      <button
        type="button"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.history.replaceState(null, "", "#consult-form");
          }
          scrollTo("consult-form");
        }}
        className="group relative inline-flex items-center gap-3 px-5 sm:px-6 py-3.5 rounded-2xl bg-[#071426] text-white text-sm font-semibold shadow-lg shadow-[#071426]/10 hover:bg-[#172D43] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer"
      >
        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#C6F850] group-hover:scale-110 transition-transform shrink-0">
          <FileText className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-sm font-semibold leading-tight flex items-center gap-1.5 text-white">
            <span>Request Free Consultation</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C6F850] transition-transform duration-300 group-hover:translate-y-0.5" />
          </div>
          <div className="text-[11px] text-[#CBD5E1] font-normal font-sans mt-0.5">
            Fill inquiry form (24h response)
          </div>
        </div>
      </button>

      {/* Button 2: Scroll to Booking Calendar (Image 3) */}
      <button
        type="button"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.history.replaceState(null, "", "#book-session");
          }
          scrollTo("book-session");
        }}
        className="group relative inline-flex items-center gap-3 px-5 sm:px-6 py-3.5 rounded-2xl bg-[#216D56] text-white text-sm font-semibold shadow-lg shadow-[#216D56]/20 hover:bg-[#195543] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer"
      >
        <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
          <Calendar className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-sm font-semibold leading-tight flex items-center gap-1.5 text-white">
            <span>Book Video / Phone Call</span>
            <ArrowDown className="w-3.5 h-3.5 text-white/90 transition-transform duration-300 group-hover:translate-y-0.5" />
          </div>
          <div className="text-[11px] text-[#D1FAE5] font-normal font-sans mt-0.5">
            Schedule 1-on-1 advisor slot
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-white/20 text-white px-2.5 py-0.5 rounded-full ml-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6F850] animate-pulse" />
          Live Slot
        </span>
      </button>
    </div>
  );
}
