export const Logo = () => (
  <div
    className="flex items-center gap-3"
    aria-label="MERIDIAN Financial Planning"
  >
    {/* 葉アイコン */}
    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" aria-hidden>
      <path
        d="M15 2C15 2 4 9 4 21C4 27.6 8.9 32 15 32C21.1 32 26 27.6 26 21C26 9 15 2 15 2Z"
        fill="var(--green-mid)"
      />
      <path d="M15 2C13 12 14 22 15 30" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M15 12C15 12 19 15 21 19" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M15 19C15 19 11 21 9 25" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>

    {/* テキスト */}
    <div className="flex flex-col" style={{ lineHeight: 1.3 }}>
      <span
        style={{
          fontFamily: 'var(--font-latin-serif), serif',
          fontSize: '14px',
          fontWeight: 400,
          letterSpacing: '0.05em',
          color: 'var(--fg-deep)',
        }}
      >
        MERIDIAN Financial Planning
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: '8.5px',
          letterSpacing: '0.06em',
          color: 'var(--fg-muted)',
        }}
      >
        メリディアン・ファイナンシャルプランニング
      </span>
    </div>
  </div>
);
