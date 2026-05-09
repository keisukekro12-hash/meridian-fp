'use client';

import { motion } from 'framer-motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';

/* ドット装飾 */
const DotField = () => (
  <svg
    aria-hidden
    viewBox="0 0 800 400"
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      opacity: 0.3,
    }}
  >
    {Array.from({ length: 30 }, (_, i) => (
      <circle
        key={i}
        cx={80 + (i % 10) * 72}
        cy={60 + Math.floor(i / 10) * 140}
        r="1.5"
        fill="var(--gold)"
      />
    ))}
  </svg>
);

export const FinalCTA = () => (
  <section
    id="contact"
    className="rsp-pad"
    style={{
      position: 'relative',
      backgroundColor: 'var(--bg-deep)',
      color: 'var(--fg-cream)',
      padding: '120px 0',
      overflow: 'hidden',
      textAlign: 'center',
    }}
    aria-label="お問い合わせ"
  >
    {/* 背景装飾 */}
    {/* Gold orb — 中央配置 */}
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: '-80px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,97,0.22) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }}
    />
    <DotField />

    {/* Gold radial decoration */}
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '480px',
        height: '480px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,97,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}
    />

    <div className="container-main" style={{ position: 'relative', zIndex: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Eyebrow style={{ justifyContent: 'center' }}>CONTACT</Eyebrow>

        <h2
          className="rsp-h2"
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: '44px',
            fontWeight: 500,
            letterSpacing: '0.04em',
            lineHeight: 1.5,
            color: 'var(--fg-cream)',
            marginBottom: '48px',
          }}
        >
          資産運用の第一歩を、
          <br />
          私たちと一緒に。
        </h2>

        <div
          className="flex flex-wrap items-center justify-center gap-5 rsp-cta-btns"
        >
          <Button variant="gold" href="#contact">
            無料相談を予約する
          </Button>
          <Button variant="ghost-light" icon="phone" href="tel:03-XXXX-XXXX">
            03-XXXX-XXXX　平日 9:00–18:00
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
