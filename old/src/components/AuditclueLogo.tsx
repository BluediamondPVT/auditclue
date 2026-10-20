import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light"; // dark = for light bg, light = for dark bg
  showTagline?: boolean;
}

export default function AuditclueLogo({
  className = "",
  variant = "light",
  showTagline = true,
}: LogoProps) {
  const textColor = variant === "light" ? "#FFFFFF" : "#14253D";
  const subtextColor = variant === "light" ? "#94A3B8" : "#4A5568";
  const ringColor = variant === "light" ? "#CBD5E1" : "#1E293B";
  const greenColor = "#196C68";

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Precision Compass & Checkmark SVG */}
      <svg
        className="w-10 h-10 shrink-0 drop-shadow-sm"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Ring */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke={ringColor}
          strokeWidth="3.5"
          opacity={variant === "light" ? "0.85" : "0.9"}
        />
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke={ringColor}
          strokeWidth="1.2"
          strokeDasharray="2 3"
          opacity="0.5"
        />

        {/* Compass 8-Star Points */}
        {/* North */}
        <polygon points="50,10 54,46 50,44" fill={ringColor} />
        <polygon points="50,10 46,46 50,44" fill={ringColor} opacity="0.6" />
        {/* South */}
        <polygon points="50,90 54,54 50,56" fill={ringColor} />
        <polygon points="50,90 46,54 50,56" fill={ringColor} opacity="0.6" />
        {/* East */}
        <polygon points="90,50 54,54 56,50" fill={ringColor} />
        <polygon points="90,50 54,46 56,50" fill={ringColor} opacity="0.6" />
        {/* West */}
        <polygon points="10,50 46,54 44,50" fill={ringColor} />
        <polygon points="10,50 46,46 44,50" fill={ringColor} opacity="0.6" />

        {/* Diagonal Minor Points */}
        <polygon points="76,24 53,47 50,48" fill={ringColor} opacity="0.4" />
        <polygon points="24,24 47,47 48,50" fill={ringColor} opacity="0.4" />
        <polygon points="76,76 53,53 50,52" fill={ringColor} opacity="0.4" />
        <polygon points="24,76 47,53 48,52" fill={ringColor} opacity="0.4" />

        {/* Hero Checkmark Intersecting Center */}
        <path
          d="M32 50 L45 64 L74 30"
          stroke={greenColor}
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline">
          <span
            className="text-2xl font-bold tracking-tight font-serif-heading"
            style={{ color: textColor }}
          >
            Audit
          </span>
          <span
            className="text-2xl font-bold tracking-tight font-serif-heading"
            style={{ color: "#22C55E" }}
          >
            clue
          </span>
        </div>
        {showTagline && (
          <span
            className="text-[9.5px] uppercase tracking-[0.2em] font-medium mt-1"
            style={{ color: subtextColor }}
          >
            Global Advisory Services LLC
          </span>
        )}
      </div>
    </div>
  );
}
