/**
 * Inline wordmark. Renders with currentColor so the same component can sit
 * on dark (ivory strokes) or light (ink strokes) backgrounds.
 */
export default function Logo({ tagline = false, className = 'ap-logo' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={tagline ? '0 0 420 64' : '0 0 420 44'}
      className={className}
      role="img"
      aria-label="Ablewski & Partners"
    >
      <g fill="currentColor">
        <text
          x="0"
          y="34"
          fontFamily='"Cormorant Garamond", "Times New Roman", serif'
          fontWeight="500"
          fontSize="34"
          letterSpacing="1.2"
        >
          ABLEWSKI
        </text>
        <text
          x="172"
          y="34"
          fontFamily='"Cormorant Garamond", "Times New Roman", serif'
          fontStyle="italic"
          fontWeight="400"
          fontSize="34"
          fill="#c9a96e"
        >
          &amp;
        </text>
        <text
          x="198"
          y="34"
          fontFamily='"Cormorant Garamond", "Times New Roman", serif'
          fontWeight="500"
          fontSize="34"
          letterSpacing="1.2"
        >
          PARTNERS
        </text>
        {tagline && (
          <text
            x="0"
            y="54"
            fontFamily='"Inter", system-ui, sans-serif'
            fontWeight="500"
            fontSize="7.5"
            letterSpacing="3.2"
            opacity="0.55"
          >
            STRATEGIC ADVISORY · GLOBAL MOBILITY · WARSAW
          </text>
        )}
      </g>
    </svg>
  );
}
