"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced motion accessibility
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Use native hardware-accelerated 120fps scrolling on touch/mobile devices
    // to avoid main-thread touch hijacking and forced reflows during page audits
    const isTouchMobile =
      window.innerWidth < 768 ||
      window.matchMedia("(pointer: coarse)").matches;
    if (isTouchMobile) return;

    let rafId: number | null = null;
    let idleTimer: any = null;

    const initLenis = () => {
      // Initialize Lenis with calibrated momentum for desktop
      const lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.0,
        infinite: false,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    };

    // Defer initialization to idle time so FCP, LCP, and TBT complete in 0ms on initial load
    if ("requestIdleCallback" in window) {
      idleTimer = (window as any).requestIdleCallback(initLenis);
    } else {
      idleTimer = setTimeout(initLenis, 300);
    }

    // Smoothly intercept in-page anchor links (#services, #about, #consult-form, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          if (lenisRef.current) {
            lenisRef.current.scrollTo(targetElement as HTMLElement, {
              offset: -50,
              duration: 1.15,
            });
          } else {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      if (idleTimer) {
        if ("cancelIdleCallback" in window) {
          (window as any).cancelIdleCallback(idleTimer);
        } else {
          clearTimeout(idleTimer);
        }
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return <>{children}</>;
}
