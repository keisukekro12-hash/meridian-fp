'use client';

import { Mail } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { useScrolled } from '@/hooks/useScrolled';

const NAV_ITEMS = [
  { label: 'ホーム',        href: '#hero' },
  { label: '私たちについて',  href: '#about' },
  { label: 'サービス',      href: '#services' },
  { label: 'ご相談の流れ',   href: '#flow' },
  { label: 'お客様の声',    href: '#voice' },
  { label: 'コラム',        href: '#column' },
];

export const Header = () => {
  const scrolled = useScrolled(40);

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(250,248,243,0.96)' : 'rgba(250,248,243,0.85)',
        borderBottom: scrolled ? '1px solid var(--line-on-cream)' : '1px solid transparent',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'background-color 0.4s ease, border-color 0.4s ease, padding 0.4s ease',
      }}
      className="glass-header"
    >
      <div
        className="container-main flex items-center justify-between"
        style={{
          paddingTop:    scrolled ? '14px' : '22px',
          paddingBottom: scrolled ? '14px' : '22px',
          transition: 'padding 0.4s ease',
        }}
      >
        {/* Logo */}
        <a href="#hero" aria-label="MERIDIAN Financial Planning — ホーム">
          <Logo />
        </a>

        {/* Nav */}
        <nav aria-label="メインナビゲーション">
          <ul className="hidden lg:flex items-center" style={{ gap: '38px', listStyle: 'none' }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '13px',
                    letterSpacing: '0.04em',
                    color: 'var(--fg-deep)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--green-mid)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg-deep)';
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA (デスクトップ) */}
        <a
          href="#contact"
          className="btn btn-gold hidden lg:inline-flex"
          aria-label="無料相談を予約する"
          style={{ minWidth: 'auto', gap: '10px', padding: '12px 20px', fontSize: '12px' }}
        >
          <span>無料相談を予約する</span>
          <Mail size={14} strokeWidth={1.2} aria-hidden />
        </a>

        {/* CTA (モバイル) */}
        <a
          href="#contact"
          className="lg:hidden"
          aria-label="無料相談"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            letterSpacing: '0.06em',
            color: 'var(--green-mid)',
            textDecoration: 'none',
            padding: '8px 12px',
            border: '1px solid var(--green-mid)',
            borderRadius: '2px',
          }}
        >
          <span>無料相談</span>
          <Mail size={12} strokeWidth={1.2} aria-hidden />
        </a>
      </div>
    </header>
  );
};
