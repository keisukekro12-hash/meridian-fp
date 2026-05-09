'use client';

import { motion } from 'framer-motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { GoldRule } from '@/components/ui/GoldRule';
import { Button } from '@/components/ui/Button';

/* Aboutセクション右側 — デスクプレースホルダー SVG */
const DeskPlaceholder = () => (
  <svg
    viewBox="0 0 480 360"
    style={{ width: '100%', borderRadius: '2px', display: 'block' }}
    aria-label="デスクイメージ（本番では写真に差し替え）"
    role="img"
  >
    {/* 背景 */}
    <rect width="480" height="360" fill="#e8e0d0" />

    {/* デスクサーフェス */}
    <rect x="20" y="180" width="440" height="160" fill="#c8b89a" rx="2" />

    {/* 革製手帳 */}
    <rect x="60" y="160" width="160" height="120" fill="#5a4a3a" rx="3" />
    <rect x="68" y="168" width="144" height="104" fill="#6b5a48" rx="2" />
    {/* ページライン */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <line key={i} x1="75" y1={182 + i * 14} x2="205" y2={182 + i * 14} stroke="#8a7a6a" strokeWidth="0.5" />
    ))}

    {/* 万年筆 */}
    <rect x="240" y="190" width="120" height="8" fill="#2a2a2a" rx="4" />
    <polygon points="360,192 380,194 360,196" fill="#c9a961" />

    {/* 腕時計 */}
    <circle cx="360" cy="260" r="35" fill="#3a3a3a" />
    <circle cx="360" cy="260" r="28" fill="#f5f0e8" />
    <circle cx="360" cy="260" r="2"  fill="#3a3a3a" />
    {/* 時計の針 */}
    <line x1="360" y1="260" x2="360" y2="240" stroke="#1a1a1a" strokeWidth="2" />
    <line x1="360" y1="260" x2="374" y2="266" stroke="#1a1a1a" strokeWidth="1.5" />

    {/* 印刷物（A4書類） */}
    <rect x="60" y="290" width="120" height="80" fill="white" rx="1" opacity="0.9" />
    {[0, 1, 2, 3, 4].map((i) => (
      <line key={i} x1="68" y1={302 + i * 12} x2="172" y2={302 + i * 12} stroke="#cccccc" strokeWidth="0.8" />
    ))}

    {/* コーヒーカップ */}
    <ellipse cx="420" cy="250" rx="24" ry="14" fill="white" opacity="0.9" />
    <rect x="396" y="250" width="48" height="30" fill="white" opacity="0.9" rx="0 0 4 4" />
    <path d="M 444 262 Q 456 262 456 270 Q 456 278 444 278" fill="none" stroke="#e0d8d0" strokeWidth="2" />
    {/* コーヒー液面 */}
    <ellipse cx="420" cy="253" rx="20" ry="8" fill="#7a5c42" opacity="0.8" />

    {/* 光の反射 */}
    <rect x="20" y="180" width="440" height="40" fill="rgba(255,255,255,0.08)" />

    {/* 奥の壁 */}
    <rect x="0" y="0" width="480" height="185" fill="#d4c8b8" />
    {/* 額縁 */}
    <rect x="160" y="30" width="120" height="100" fill="#8a7a6a" rx="2" />
    <rect x="164" y="34" width="112" height="92"  fill="#b0a090" rx="1" />

    {/* テキストラベル */}
    <text x="240" y="348" textAnchor="middle" fill="#8a7a6a" fontSize="9" fontFamily="sans-serif">
      ※本番では実写写真に差し替え
    </text>
  </svg>
);

export const About = () => (
  <section
    id="about"
    className="rsp-pad"
    style={{
      backgroundColor: 'var(--bg-cream)',
      color: 'var(--fg-deep)',
      padding: '160px 0 140px',
    }}
    aria-label="私たちについて"
  >
    <div
      className="container-main rsp-1col"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        gap: '80px',
        alignItems: 'center',
      }}
    >
      {/* 左: テキスト */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Eyebrow>ABOUT</Eyebrow>

        <h2
          className="rsp-h2"
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: '40px',
            fontWeight: 500,
            letterSpacing: '0.03em',
            lineHeight: 1.6,
            color: 'var(--fg-deep)',
            marginBottom: '0',
          }}
        >
          お金の不安を安心に変え、
          <br />
          理想の人生をデザインする。
        </h2>

        <GoldRule />

        <p
          style={{
            fontSize: '15px',
            fontWeight: 300,
            letterSpacing: '0.02em',
            lineHeight: '1.85',
            color: 'var(--fg-deep-muted)',
            marginBottom: '16px',
          }}
        >
          私たちMERIDIANは、特定の金融機関に属さない
          独立系ファイナンシャルプランナー事務所です。
          お客様の利益を最優先に、中立の立場から
          最適なアドバイスをご提供します。
        </p>
        <p
          style={{
            fontSize: '15px',
            fontWeight: 300,
            letterSpacing: '0.02em',
            lineHeight: '1.85',
            color: 'var(--fg-deep-muted)',
            marginBottom: '40px',
          }}
        >
          資産形成・ライフプラン・保険・住宅購入まで、
          人生のあらゆるお金の課題に対して、
          データと経験に基づいた誠実なサポートで
          お客様の理想の未来を共に描きます。
        </p>

        <Button variant="outline" href="#about">
          私たちについて
        </Button>
      </motion.div>

      {/* 右: 画像 */}
      <motion.div className="rsp-about-img"
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      >
        <DeskPlaceholder />
      </motion.div>
    </div>
  </section>
);
