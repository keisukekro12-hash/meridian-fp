'use client';

import { motion } from 'framer-motion';
import { Orb } from '@/components/glass/Orb';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { GoldRule } from '@/components/ui/GoldRule';
import { Button } from '@/components/ui/Button';
import { HeroSkyline } from './HeroSkyline';
import { HeroScrollIndicator } from './HeroScrollIndicator';

const fadeUp = {
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export const Hero = () => (
  <section
    id="hero"
    className="rsp-hero"
    style={{
      position: 'relative',
      height: '760px',
      backgroundColor: 'var(--bg-deep)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}
    aria-label="ヒーローセクション"
  >
    {/* 背景Orb */}
    <Orb color="warm" size={700} position={{ top: '-100px', left: '-200px' }} opacity={0.6} />
    <Orb color="cool" size={500} position={{ bottom: '-80px', right: '-100px' }} opacity={0.5} />

    {/* スカイラインSVG */}
    <HeroSkyline />

    {/* グラデーションオーバーレイ */}
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, transparent 50%, rgba(10,22,40,0.8) 100%)',
        pointerEvents: 'none',
      }}
    />

    {/* コピーブロック（右寄せ） */}
    <div className="container-main w-full" style={{ position: 'relative', zIndex: 2 }}>
      <div className="rsp-hero-copy" style={{ maxWidth: '620px', marginLeft: 'auto' }}>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          <Eyebrow>— FOR YOUR FUTURE</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="rsp-hero-h1"
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: '56px',
            fontWeight: 400,
            letterSpacing: '0.04em',
            lineHeight: 1.4,
            color: 'var(--fg-cream)',
          }}
        >
          未来の選択肢を、
          <br />
          今の<span style={{ color: 'var(--gold)' }}>戦略</span>で広げる。
        </motion.h1>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.35 }}>
          <GoldRule />
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.45 }}
          style={{
            fontSize: '17px',
            fontWeight: 300,
            letterSpacing: '0.02em',
            lineHeight: 2,
            color: 'var(--fg-muted)',
            marginBottom: '40px',
            maxWidth: '480px',
          }}
        >
          独立系ファイナンシャルプランナーとして、
          中立の立場からお客様の資産形成と
          ライフプラン設計を丁寧にサポートします。
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.55 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4"
        >
          <Button variant="gold" href="#contact">無料で相談してみる</Button>
          <Button variant="ghost-light" href="#services">サービスを見る</Button>
        </motion.div>
      </div>
    </div>

    <HeroScrollIndicator />
  </section>
);
