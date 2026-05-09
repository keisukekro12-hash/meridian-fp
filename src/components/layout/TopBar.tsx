import { Phone } from 'lucide-react';

export const TopBar = () => (
  <div
    style={{ backgroundColor: 'var(--topbar-bg)' }}
    className="w-full py-2"
  >
    <div className="container-main flex items-center justify-between">
      <span
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '11px',
          letterSpacing: '0.12em',
          color: 'var(--gold)',
        }}
      >
        · INDEPENDENT FINANCIAL PLANNING ·
      </span>

      <div
        className="flex items-center gap-4"
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '11px',
          letterSpacing: '0.08em',
          color: 'var(--fg-muted)',
        }}
      >
        <Phone size={12} strokeWidth={1.2} aria-hidden />
        <span>03-XXXX-XXXX</span>
        <span style={{ color: 'var(--line-on-deep)', margin: '0 4px' }}>|</span>
        <span>平日 9:00–18:00</span>
      </div>
    </div>
  </div>
);
