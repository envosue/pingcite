export function RingMark({ size = 32 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/pingcite-avatar-signal.png"
      alt="PingCite"
      width={size}
      height={size}
      style={{ width: size, height: size }}
    />
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
