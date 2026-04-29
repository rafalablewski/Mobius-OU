export default function Glyph({ tone = 'ink', size = 36, className = '', title = 'Mobius & Partners' }) {
  const mColor = tone === 'ivory' ? '#FAF6EE' : '#0B0F14';
  const goldColor = '#C9A86A';
  return (
    <svg
      viewBox="-60 -60 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -38 32 L -38 -32 L 0 8 L 38 -32 L 38 32"
              stroke={mColor} strokeWidth="3.6" />
        <g transform="scale(0.78)">
          <path d="M -22 0 C -22 -14 -6 -14 0 0 C 6 14 22 14 22 0"
                stroke={goldColor} strokeWidth="2.8" />
          <path d="M 22 0 C 22 -14 6 -14 0 0 C -6 14 -22 14 -22 0"
                stroke={goldColor} strokeWidth="2.8" />
        </g>
      </g>
    </svg>
  );
}
