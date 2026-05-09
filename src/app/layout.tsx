import type { Metadata } from 'next';
import { Noto_Serif_JP, Noto_Sans_JP, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-serif',
  display: 'swap',
  preload: false,
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-sans',
  display: 'swap',
  preload: false,
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-latin-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MERIDIAN Financial Planning | 独立系ファイナンシャルプランニング',
  description:
    '中立の立場からお客様の資産形成・ライフプラン・保険・住宅購入をトータルサポート。まずは無料相談から。',
  openGraph: {
    title: 'MERIDIAN Financial Planning',
    description: '未来の選択肢を、今の戦略で広げる。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      data-theme="navy"
      className={[
        notoSerifJP.variable,
        notoSansJP.variable,
        cormorantGaramond.variable,
        jetbrainsMono.variable,
      ].join(' ')}
    >
      <body>{children}</body>
    </html>
  );
}
