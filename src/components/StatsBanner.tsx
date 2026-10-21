"use client";

import React, { useEffect, useRef, useState } from "react";
import { Users, CalendarDays, Laptop, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Stats config — numeric ones get counted up, text ones display directly
const stats = [
  {
    icon: Users,
    countTo: 500,
    suffix: "+",
    label: "Enterprises Supported",
    desc: "500+ across all 7 Emirates",
  },
  {
    icon: CalendarDays,
    countTo: 10,
    suffix: "+",
    label: "Years Experience",
    desc: "Industry-proven expertise",
  },
  {
    icon: Laptop,
    countTo: 100,
    suffix: "%",
    label: "Digital Delivery",
    desc: "Zero in-office visits needed",
  },
  {
    icon: Zap,
    countTo: null,       // text — no counter
    display: "24h",
    label: "Response Time",
    desc: "Direct senior advisor access",
  },
];

function useCountUp(target: number | null, duration = 1400, start = false) {
  const [count, setCount] = useState(target || 0);

  useEffect(() => {
    if (!start || target === null) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({
  item,
  animate,
}: {
  item: (typeof stats)[0];
  animate: boolean;
}) {
  const Icon = item.icon;
  const count = useCountUp(item.countTo, 1500, animate);
  const displayValue =
    item.countTo !== null ? `${count}${item.suffix}` : item.display;

  return (
    <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#0D1B30]/70 border border-white/10 hover:border-[#36A783]/50 hover:bg-[#11233D] transition-all duration-300 group shadow-sm">
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#36A783]/15 border border-[#36A783]/30 flex items-center justify-center text-[#36A783] group-hover:scale-105 group-hover:bg-[#36A783] group-hover:text-white transition-all duration-300 shrink-0">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />
      </div>
      <div>
        <div className="text-xl sm:text-2xl font-serif font-medium text-white tracking-tight tabular-nums">
          {displayValue}
        </div>
        <div className="text-xs sm:text-[13px] font-semibold text-[#83D9BE] tracking-wide">
          {item.label}
        </div>
        <div className="text-[11px] sm:text-xs text-[#A8B7C9] hidden sm:block mt-0.5 leading-snug">
          {item.desc}
        </div>
      </div>
    </div>
  );
}

export default function StatsBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) {
        setAnimate(true);
        return;
      }
    }

    const cards = el.querySelectorAll(".stat-card-item");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          force3D: false,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => setAnimate(true),
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#071426] border-y border-white/10 py-10 sm:py-12 overflow-hidden z-20"
    >
      {/* Subtle fine grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="stat-card-item">
              <StatCard item={item} animate={animate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
