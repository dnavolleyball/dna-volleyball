"use client";

export default function AnimatedDNA() {
  const pairs = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

      <svg
        viewBox="0 0 600 900"
        className="w-[700px] h-[900px] opacity-30 animate-dna"
      >
        <defs>

          <linearGradient id="dnaGradient" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#6D28D9" />
            <stop offset="50%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

        </defs>

        {/* Left Strand */}

        <path
          d="
          M220 0
          C310 80 310 140 220 220
          C130 300 130 360 220 440
          C310 520 310 580 220 660
          C130 740 130 800 220 900
          "
          stroke="url(#dnaGradient)"
          strokeWidth="8"
          fill="none"
          filter="url(#glow)"
        />

        {/* Right Strand */}

        <path
          d="
          M380 0
          C290 80 290 140 380 220
          C470 300 470 360 380 440
          C290 520 290 580 380 660
          C470 740 470 800 380 900
          "
          stroke="url(#dnaGradient)"
          strokeWidth="8"
          fill="none"
          filter="url(#glow)"
        />

        {/* Base Pairs */}

        {pairs.map((i) => {
          const y = 35 + i * 35;

          const left =
            220 +
            Math.sin(i * 0.6) * 90;

          const right =
            380 -
            Math.sin(i * 0.6) * 90;

          return (
            <g key={i}>

              <line
                x1={left}
                y1={y}
                x2={right}
                y2={y}
                stroke="#C084FC"
                strokeWidth="2"
                opacity="0.7"
              />

              <circle
                cx={left}
                cy={y}
                r="4"
                fill="#E9D5FF"
              />

              <circle
                cx={right}
                cy={y}
                r="4"
                fill="#E9D5FF"
              />

            </g>
          );
        })}
      </svg>

    </div>
  );
}