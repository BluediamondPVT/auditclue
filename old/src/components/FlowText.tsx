"use client";

import React, { useEffect, useRef, useState } from "react";

export interface FlowTextProps {
  /** The text string to animate character-by-character */
  text: string;
  /** HTML element wrapper tag (default: "span") */
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  /** Delay in seconds before animation begins (default: 0) */
  startDelay?: number;
  /** Delay in seconds between each successive character (default: 0.018) */
  charDelay?: number;
  /** Additional CSS class names */
  className?: string;
  /** If true, waits until element scrolls into view before animating (default: false) */
  triggerOnScroll?: boolean;
  /** Viewport intersection threshold when triggerOnScroll is true (default: 0.2) */
  threshold?: number;
}

/**
 * FlowText — Reusable Kinetic Character-by-Character Flow Animation Component
 *
 * Splices sentences into words and individual characters with sequential GPU-composited
 * translate3d animations. Words are kept intact with whitespace-nowrap to avoid awkward line breaks.
 *
 * Usage:
 * ```tsx
 * // Immediate (Hero section):
 * <FlowText text="Clarity in finance." startDelay={0.1} />
 *
 * // On scroll (Sections below the fold):
 * <FlowText text="Our Practice Areas" triggerOnScroll as="h2" className="text-3xl font-bold" />
 * ```
 */
export default function FlowText({
  text,
  as: Component = "span",
  startDelay = 0,
  charDelay = 0.018,
  className = "",
  triggerOnScroll = false,
  threshold = 0.2,
}: FlowTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(!triggerOnScroll);

  useEffect(() => {
    if (!triggerOnScroll) {
      setIsVisible(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [triggerOnScroll, threshold]);

  const words = text.split(" ");
  let runningIndex = 0;

  const Element = Component as any;

  return (
    <Element
      ref={containerRef}
      aria-label={text}
      className={className}
    >
      <span aria-hidden="true">
        {words.map((word, wordIndex) => {
          const letters = Array.from(word);
          const startIndex = runningIndex;
          runningIndex += letters.length;

          return (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
              {letters.map((char, charIndex) => {
                const delay = startDelay + (startIndex + charIndex) * charDelay;
                return (
                  <span
                    key={charIndex}
                    className={`inline-block ${
                      isVisible ? "char-flow" : "opacity-0"
                    }`}
                    style={
                      isVisible
                        ? { animationDelay: `${delay.toFixed(3)}s` }
                        : { opacity: 0 }
                    }
                  >
                    {char}
                  </span>
                );
              })}
              {wordIndex < words.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </span>
          );
        })}
      </span>
    </Element>
  );
}
