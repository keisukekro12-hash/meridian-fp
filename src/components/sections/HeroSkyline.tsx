/* Heroセクション背景SVG — スカイラインシルエット + ドット */
export const HeroSkyline = () => (
  <svg
    aria-hidden
    viewBox="0 0 1280 400"
    preserveAspectRatio="xMidYMax meet"
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      opacity: 0.18,
      pointerEvents: 'none',
    }}
  >
    <g fill="var(--fg-muted)">
      <rect x="0"    y="200" width="80"  height="200" />
      <rect x="90"   y="160" width="60"  height="240" />
      <rect x="160"  y="180" width="100" height="220" />
      <rect x="270"  y="120" width="70"  height="280" />
      <rect x="350"  y="150" width="50"  height="250" />
      <rect x="410"  y="90"  width="90"  height="310" />
      <rect x="510"  y="140" width="60"  height="260" />
      <rect x="580"  y="170" width="80"  height="230" />
      <rect x="670"  y="110" width="100" height="290" />
      <rect x="780"  y="130" width="70"  height="270" />
      <rect x="860"  y="160" width="50"  height="240" />
      <rect x="920"  y="100" width="80"  height="300" />
      <rect x="1010" y="140" width="60"  height="260" />
      <rect x="1080" y="180" width="90"  height="220" />
      <rect x="1180" y="150" width="100" height="250" />
      {/* アンテナ */}
      <rect x="440"  y="70"  width="4" height="20" />
      <rect x="700"  y="90"  width="4" height="20" />
      <rect x="950"  y="80"  width="4" height="20" />
    </g>

    {/* ウィンドウドット — gold微光 */}
    <g fill="var(--gold)" opacity="0.6">
      {Array.from({ length: 60 }, (_, i) => (
        <rect
          key={i}
          x={20 + (i % 20) * 63}
          y={120 + Math.floor(i / 20) * 40 + (i % 3) * 15}
          width="4"
          height="4"
          opacity={0.4}
        />
      ))}
    </g>
  </svg>
);
