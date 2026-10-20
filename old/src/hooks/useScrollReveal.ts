"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollRevealConfig {
  /** Target selector inside the container (e.g. "[data-reveal]" or ".stat-card") */
  selector?: string;
  /** Y translation offset in pixels (default: 20) */
  y?: number;
  /** Duration in seconds (default: 0.75) */
  duration?: number;
  /** Stagger between related elements in seconds (default: 0.1) */
  stagger?: number;
  /** Initial delay before animation starts in seconds (default: 0) */
  delay?: number;
  /** GSAP easing string (default: "power2.out") */
  ease?: string;
  /** ScrollTrigger start trigger point (default: "top 85%") */
  start?: string;
  /** Whether to trigger only once (default: true) */
  once?: boolean;
}

/**
 * useScrollReveal — Consistent, restrained GSAP ScrollTrigger reveal hook
 *
 * Requirements satisfied:
 * - Proper GSAP context (gsap.context) with full cleanup on unmount
 * - React 19 / Strict Mode resilient (zero duplicate triggers)
 * - Respects prefers-reduced-motion
 * - Content remains accessible & visible even if JS fails (no hidden CSS by default)
 * - Native 1:1 subpixel font rendering (force3D: false)
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealConfig = {}
) {
  const containerRef = useRef<T>(null);

  const {
    selector = "[data-reveal]",
    y = 20,
    duration = 0.75,
    stagger = 0.1,
    delay = 0,
    ease = "power2.out",
    start = "top 85%",
    once = true,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const targets = container.querySelectorAll(selector);
      if (!targets || targets.length === 0) return;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger: targets.length > 1 ? stagger : 0,
          delay,
          ease,
          force3D: false,
          scrollTrigger: {
            trigger: container,
            start,
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
            once,
          },
        }
      );
    }, container);

    return () => {
      ctx.revert();
    };
  }, [selector, y, duration, stagger, delay, ease, start, once]);

  return containerRef;
}

export interface ImageRevealConfig {
  /** Y translation offset for image entrance (default: 18) */
  y?: number;
  /** Duration in seconds (default: 0.85) */
  duration?: number;
  /** GSAP easing string (default: "power2.out") */
  ease?: string;
  /** ScrollTrigger start trigger point (default: "top 85%") */
  start?: string;
}

/**
 * useImageReveal — Restrained, editorial overflow-hidden reveal for primary visuals
 */
export function useImageReveal<T extends HTMLElement = HTMLElement>(
  options: ImageRevealConfig = {}
) {
  const imageWrapperRef = useRef<T>(null);

  const {
    y = 18,
    duration = 0.85,
    ease = "power2.out",
    start = "top 85%",
  } = options;

  useEffect(() => {
    const wrapper = imageWrapperRef.current;
    if (!wrapper) return;

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const img = wrapper.querySelector("img") || wrapper;

      gsap.fromTo(
        wrapper,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          ease,
          force3D: false,
          scrollTrigger: {
            trigger: wrapper,
            start,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      if (img && img !== wrapper) {
        gsap.fromTo(
          img,
          { scale: 1.05 },
          {
            scale: 1,
            duration: duration * 1.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wrapper,
              start,
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }
    }, wrapper);

    return () => {
      ctx.revert();
    };
  }, [y, duration, ease, start]);

  return imageWrapperRef;
}
