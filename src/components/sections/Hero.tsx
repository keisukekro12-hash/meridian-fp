'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ShieldCheck } from 'lucide-react';

/* 自然・相談イメージのSVGプレースホルダー */
const HeroPhoto = () => (
  <svg
    viewBox="0 0 520 580"
    style={{ width: '100%', height: '100%', display: 'block', borderRadius: '4px' }}
    aria-label="ファイナンシャルプランナーとの相談イメージ"
    role="img"
  >
    {/* 背景: 明るい自然光 */}
    <defs>
      <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e8ede3" />
        <stop offset="100%" stopColor="#f5f2eb" />
      </linearGradient>
      <radialGradient id="light" cx="70%" cy="20%" r="60%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#d4e0cc" stopOpacity="0" />
      </radialGradient>
    </defs>

    <rect width="520" height="580" fill="url(#bg-grad)" />
    <rect width="520" height="580" fill="url(#light)" />

    {/* 植物・葉の装飾 */}
    <ellipse cx="460" cy="60" rx="80" ry="100" fill="#6b8a5a" opacity="0.18" transform="rotate(-20 460 60)" />
    <ellipse cx="420" cy="30" rx="60" ry="80" fill="#4a6e3a" opacity="0.12" transform="rotate(-10 420 30)" />
    <ellipse cx="80" cy="500" rx="100" ry="120" fill="#6b8a5a" opacity="0.15" transform="rotate(15 80 500)" />
    <ellipse cx="50" cy="560" rx="80" ry="100" fill="#4a6e3a" opacity="0.1" transform="rotate(5 50 560)" />

    {/* 人物シルエット（FP） */}
    {/* 頭 */}
    <circle cx="260" cy="160" r="58" fill="#d4c4b0" />
    {/* 首 */}
    <rect x="242" y="210" width="36" height="30" fill="#d4c4b0" />
    {/* 白いジャケット */}
    <path d="M140 260 Q180 240 242 240 L278 240 Q320 240 380 260 L400 480 L120 480 Z" fill="#f0ece4" />
    {/* ジャケットの陰影 */}
    <path d="M242 240 L220 480 L260 480 L278 240 Z" fill="#e4e0d8" opacity="0.5" />
    {/* ネクタイ */}
    <path d="M255 242 L265 242 L270 320 L260 330 L250 320 Z" fill="#6b8a5a" opacity="0.7" />
    {/* 腕・ポーズ（両手を組む） */}
    <path d="M140 290 Q120 330 130 380 Q140 420 180 430" stroke="#d4c4b0" strokeWidth="28" fill="none" strokeLinecap="round" />
    <path d="M380 290 Q400 330 390 380 Q380 420 340 430" stroke="#d4c4b0" strokeWidth="28" fill="none" strokeLinecap="round" />
    {/* 手 */}
    <ellipse cx="165" cy="438" rx="24" ry="18" fill="#d4c4b0" />
    <ellipse cx="355" cy="438" rx="24" ry="18" fill="#d4c4b0" />

    {/* 背景のデスク */}
    <rect x="80" y="460" width="360" height="20" fill="#c8b89a" opacity="0.4" rx="2" />

    {/* 光の反射 */}
    <rect x="0" y="0" width="520" height="200" fill="rgba(255,255,255,0.15)" />

    {/* ブランドウォーターマーク */}
    <text x="260" y="555" textAnchor="middle" fill="var(--green-mid)" fontSize="9" fontFamily="serif" opacity="0.4" letterSpacing="3">
      MERIDIAN FP
    </text>
  </svg>
);

export const Hero = () => (
  <section
    id="hero"
    className="rsp-hero"
    style={{
      position: 'relative',
      minHeight: '720px',
      backgroundColor: 'var(--bg-deep)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}
    aria-label="ヒーローセクション"
  >
    {/* 背景の淡い緑グラデーション */}
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 80% 50%, rgba(107,138,90,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}
    />

    <div className="container-main w-full" style={{ position: 'relative', zIndex: 2 }}>
      <div
        className="rsp-hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* 左: テキスト */}
        <div>
          {/* タグライン */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: '13px',
              letterSpacing: '0.04em',
              color: 'var(--green-mid)',
              marginBottom: '20px',
            }}
          >
            将来の不安に、安心という選択を。
          </motion.p>

          {/* メインコピー */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="rsp-hero-h1"
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: '48px',
              fontWeight: 400,
              letterSpacing: '0.04em',
              lineHeight: 1.5,
              color: 'var(--fg-deep)',
              marginBottom: '24px',
            }}
          >
            あなたの理想の未来を、
            <br />
            一緒に<span style={{ color: 'var(--green-mid)' }}>デザイン</span>します。
          </motion.h1>

          {/* サブコピー */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontSize: '15px',
              fontWeight: 300,
              letterSpacing: '0.02em',
              lineHeight: 1.9,
              color: 'var(--fg-muted)',
              marginBottom: '36px',
            }}
          >
            お金の悩みを安心に変え、人生の可能性を広げるパートナーに。
            <br />
            資産運用・ライフプランのご相談は、私たちにお任せください。
          </motion.p>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="gold" href="#contact" icon="arrow">
              無料で相談してみる
            </Button>
          </motion.div>

          {/* サブテキスト */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-2"
            style={{ marginTop: '16px' }}
          >
            <ShieldCheck size={14} style={{ color: 'var(--green-mid)' }} aria-hidden />
            <span style={{ fontSize: '12px', color: 'var(--fg-muted)', letterSpacing: '0.02em' }}>
              オンライン相談も可能です
            </span>
          </motion.div>
        </div>

        {/* 右: 写真プレースホルダー */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="rsp-hero-photo"
          style={{
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(107,138,90,0.15)',
          }}
        >
          <HeroPhoto />
        </motion.div>
      </div>
    </div>
  </section>
);
