'use client';

import { motion } from 'framer-motion';
import { Eyebrow } from '@/components/ui/Eyebrow';

const STEPS = [
  {
    num:   '01',
    meta:  '· CONTACT ·',
    title: 'お問い合わせ',
    body:  'ウェブまたはお電話より、無料相談をご予約ください。ご都合の良い日時をお知らせください。',
  },
  {
    num:   '02',
    meta:  '· HEARING ·',
    title: 'ヒアリング',
    body:  '現在の状況・将来のご希望を丁寧にお伺いします。どんな小さなご不安もお聞かせください。',
  },
  {
    num:   '03',
    meta:  '· PROPOSAL ·',
    title: 'プランご提案',
    body:  'お客様だけのオリジナル資産戦略をご提案します。複数のシナリオを比較しながらご検討いただけます。',
  },
  {
    num:   '04',
    meta:  '· SUPPORT ·',
    title: '実行と継続サポート',
    body:  '実行支援と定期的な見直しで、ライフステージの変化に対応しながら長期的に伴走します。',
  },
];

export const Flow = () => (
  <section
    id="flow"
    style={{
      backgroundColor: 'var(--bg-cream-2)',
      color: 'var(--fg-deep)',
      padding: '160px 0 140px',
    }}
    aria-label="ご相談の流れ"
  >
    <div className="container-main">
      {/* タイトル */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <Eyebrow style={{ justifyContent: 'center' }}>FLOW</Eyebrow>
        <h2
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: '44px',
            fontWeight: 500,
            letterSpacing: '0.04em',
            lineHeight: 1.5,
            color: 'var(--fg-deep)',
          }}
        >
          ご相談の流れ
        </h2>
      </motion.div>

      {/* ステップグリッド（接続線付き） */}
      <div style={{ position: 'relative' }}>
        {/* 接続線 */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '64px',
            left: '8%',
            right: '8%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, var(--gold) 10%, var(--gold) 90%, transparent)',
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.10 }}
              style={{ textAlign: 'center' }}
            >
              {/* 円形バッジ */}
              <div
                style={{
                  width: '128px',
                  height: '128px',
                  borderRadius: '50%',
                  border: '1px solid var(--gold)',
                  backgroundColor: 'var(--bg-cream)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '10px',
                    letterSpacing: '0.20em',
                    color: 'var(--gold)',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  STEP
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-latin-serif), serif',
                    fontSize: '38px',
                    fontWeight: 500,
                    lineHeight: 1,
                    color: 'var(--fg-deep)',
                  }}
                >
                  {step.num}
                </span>
              </div>

              {/* メタタグ */}
              <p
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.30em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                {step.meta}
              </p>

              {/* タイトル */}
              <h3
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontSize: '20px',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  lineHeight: 1.4,
                  color: 'var(--fg-deep)',
                  marginBottom: '12px',
                }}
              >
                {step.title}
              </h3>

              {/* 説明 */}
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 300,
                  letterSpacing: '0.02em',
                  lineHeight: '1.9',
                  color: 'var(--fg-deep-muted)',
                }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
