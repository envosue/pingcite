export function RingMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true">
      <circle cx="17" cy="17" r="3.4" fill="#2DD4BF" />
      <circle
        cx="17"
        cy="17"
        r="10"
        fill="none"
        stroke="#2DD4BF"
        strokeWidth="2"
        opacity="0.65"
      />
      <circle
        cx="17"
        cy="17"
        r="16"
        fill="none"
        stroke="#2DD4BF"
        strokeWidth="2"
        opacity="0.3"
      />
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
