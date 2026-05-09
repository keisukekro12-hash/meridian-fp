type Props = {
  theme?: 'dark' | 'light';
};

export const Logo = ({ theme = 'dark' }: Props) => {
  const color1 = theme === 'dark' ? 'var(--fg-cream)' : 'var(--fg-deep)';
  const color2 = 'var(--gold)';

  return (
    <div className="flex flex-col" aria-label="MERIDIAN Financial Planning">
      {/* ロゴライン1: MERIDIAN */}
      <span
        style={{
          fontFamily: 'var(--font-latin-serif), serif',
          fontSize: '24px',
          fontWeight: 500,
          letterSpacing: '0.32em',
          lineHeight: 1,
          color: color1,
        }}
      >
        MERIDIAN
      </span>

      {/* 1px ゴールドライン */}
      <span
        aria-hidden
        style={{
          display: 'block',
          height: '1px',
          backgroundColor: 'var(--gold)',
          margin: '4px 0',
        }}
      />

      {/* ロゴライン2: FINANCIAL PLANNING */}
      <span
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '9px',
          fontWeight: 400,
          letterSpacing: '0.36em',
          lineHeight: 1,
          color: color2,
          textTransform: 'uppercase',
        }}
      >
        FINANCIAL PLANNING
      </span>
    </div>
  );
};
