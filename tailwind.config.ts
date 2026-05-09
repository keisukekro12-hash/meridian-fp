import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif:       ['var(--font-serif)', 'Hiragino Mincho ProN', 'serif'],
        sans:        ['var(--font-sans)', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
        'latin-serif': ['var(--font-latin-serif)', 'serif'],
        mono:        ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      colors: {
        'bg-deep':        'var(--bg-deep)',
        'bg-deep-2':      'var(--bg-deep-2)',
        'bg-cream':       'var(--bg-cream)',
        'bg-cream-2':     'var(--bg-cream-2)',
        'fg-cream':       'var(--fg-cream)',
        'fg-muted':       'var(--fg-muted)',
        'fg-deep':        'var(--fg-deep)',
        'fg-deep-muted':  'var(--fg-deep-muted)',
        gold:             'var(--gold)',
        'gold-soft':      'var(--gold-soft)',
        'topbar-bg':      'var(--topbar-bg)',
        'footer-bg':      'var(--footer-bg)',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      backdropBlur: {
        '12': '12px',
      },
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-line': {
          '0%':   { opacity: '0', transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%':  { opacity: '1', transform: 'scaleY(1)', transformOrigin: 'top' },
          '100%': { opacity: '0', transform: 'scaleY(1)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        'fade-in-up':  'fade-in-up 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        'scroll-line': 'scroll-line 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
