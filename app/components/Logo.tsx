export function RingMark({ size = 32 }: { size?: number }) {
  const gradId = "pc-dot-grad";
  const clipId = "pc-pulse-clip";
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true">
      <defs>
        <radialGradient id={gradId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#5EEAD4" />
          <stop offset="100%" stopColor="#14B8A6" />
        </radialGradient>
        <clipPath id={clipId}>
          <circle cx="17" cy="17" r="13.5" />
        </clipPath>
      </defs>

      {/* outer radar rings */}
      <circle cx="17" cy="17" r="16" fill="none" stroke="#14B8A6" strokeWidth="1.4" opacity="0.22" />
      <circle cx="17" cy="17" r="11" fill="none" stroke="#14B8A6" strokeWidth="1.6" opacity="0.45" />

      {/* heartbeat / pulse line, clipped so it reads as a signal inside the radar */}
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M2 17 H10.5 L13 10.5 L16.2 24.5 L18.6 12.5 L20.6 17 H32"
          fill="none"
          stroke="#5EEAD4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* center dot */}
      <circle cx="17" cy="17" r="3.2" fill={`url(#${gradId})`} />
    </svg>
  );
}

export function Wordmark({ size = 20 }: { size?: number }) {
  return (
    <span
      className="font-display font-bold tracking-[-0.01em]"
      style={{ fontSize: size }}
    >
      <span className="text-text">Ping</span>
      <span className="text-teal">Cite</span>
    </span>
  );
}

export function Lockup({ iconSize = 28, textSize = 18 }: { iconSize?: number; textSize?: number }) {
  return (
    <span className="inline-flex items-center gap-2">
      <RingMark size={iconSize} />
      <Wordmark size={textSize} />
    </span>
  );
}
