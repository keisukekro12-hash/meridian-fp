import { Phone, Mail, MapPin } from 'lucide-react';
import { FooterBrand } from './FooterBrand';
import { FooterNavColumn } from './FooterNavColumn';

const LEGAL_LINKS = ['プライバシーポリシー', '特定商取引法に基づく表示', '免責事項'];

const CONTACT_ITEMS = [
  { icon: <MapPin size={13} strokeWidth={1.2} aria-hidden />, text: '〒100-0001 東京都千代田区千代田1-1' },
  { icon: <Phone size={13} strokeWidth={1.2} aria-hidden />, text: '03-XXXX-XXXX' },
  { icon: <Mail  size={13} strokeWidth={1.2} aria-hidden />, text: 'info@meridian-fp.jp' },
];

export const Footer = () => (
  <footer
    role="contentinfo"
    style={{ backgroundColor: 'var(--footer-bg)' }}
    className="pt-20 pb-8"
  >
    <div className="container-main">
      {/* 4カラムグリッド */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '48px',
        }}
      >
        <FooterBrand />

        <FooterNavColumn
          heading="SERVICE"
          items={[
            { label: '資産運用のご相談',     href: '#services' },
            { label: 'ライフプラン設計',      href: '#services' },
            { label: '保険の見直し・最適化', href: '#services' },
            { label: '住宅購入・ローン相談', href: '#services' },
          ]}
        />

        <FooterNavColumn
          heading="COMPANY"
          items={[
            { label: '会社概要',            href: '#' },
            { label: 'プライバシーポリシー', href: '#' },
            { label: '特定商取引法',         href: '#' },
            { label: '免責事項',            href: '#' },
            { label: 'コラム',              href: '#' },
          ]}
        />

        {/* CONTACT */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '10px',
              letterSpacing: '0.30em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            CONTACT
          </h3>
          <address style={{ fontStyle: 'normal' }}>
            {CONTACT_ITEMS.map(({ icon, text }) => (
              <div key={text} className="flex items-start gap-3" style={{ marginBottom: '12px' }}>
                <span style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }}>
                  {icon}
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    color: 'var(--fg-muted)',
                    letterSpacing: '0.02em',
                    lineHeight: '1.6',
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </address>
        </div>
      </div>

      {/* ボーダー */}
      <div
        aria-hidden
        style={{ height: '1px', backgroundColor: 'var(--line-on-deep)', margin: '0 0 24px' }}
      />

      {/* コピーライト行 */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <p style={{ fontSize: '11px', color: 'var(--fg-muted)', letterSpacing: '0.04em' }}>
          © 2025 MERIDIAN Financial Planning. All rights reserved.
        </p>
        <nav aria-label="法務リンク">
          <ul className="flex items-center gap-6" style={{ listStyle: 'none' }}>
            {LEGAL_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  style={{
                    fontSize: '11px',
                    color: 'var(--fg-muted)',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg-cream)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg-muted)';
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);
