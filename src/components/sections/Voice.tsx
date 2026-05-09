'use client';

import { motion } from 'framer-motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { TestimonialCard } from './TestimonialCard';

const TESTIMONIALS = [
  {
    caseNum:   'CASE 01',
    attribute: '30代・会社員',
    quote:
      '老後の資金が心配で相談したところ、現状の収支から具体的な将来シミュレーションを作っていただき、初めて「このまま大丈夫」と安心できました。定期的な見直しもしていただいているので、引き続きお任せしています。',
  },
  {
    caseNum:   'CASE 02',
    attribute: '40代・自営業',
    quote:
      '個人事業主は老後が不安でしたが、NISAとiDeCoの組み合わせや節税についても詳しく教えていただき、計画的に動けるようになりました。専門用語も丁寧に説明してくださるので、安心して相談できます。',
  },
  {
    caseNum:   'CASE 03',
    attribute: '50代・会社員',
    quote:
      '子どもの教育費と住宅ローン、老後資金のバランスに悩んでいました。優先順位と具体的な数字を示していただき、迷いが消えました。保険の見直しで月々の支出も減り、とても満足しています。',
  },
];

export const Voice = () => (
  <section
    id="voice"
    className="rsp-pad"
    style={{
      backgroundColor: 'var(--bg-cream)',
      color: 'var(--fg-deep)',
      padding: '140px 0 120px',
    }}
    aria-label="お客様の声"
  >
    <div className="container-main">
      {/* タイトル */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <Eyebrow style={{ justifyContent: 'center' }}>VOICE</Eyebrow>
        <h2
          className="rsp-h2"
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: '44px',
            fontWeight: 500,
            letterSpacing: '0.04em',
            lineHeight: 1.5,
            color: 'var(--fg-deep)',
          }}
        >
          お客様の声
        </h2>
      </motion.div>

      {/* 3カラム */}
      <div
        className="rsp-1col"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '40px',
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard
            key={t.caseNum}
            caseNum={t.caseNum}
            attribute={t.attribute}
            quote={t.quote}
            delay={i * 0.10}
          />
        ))}
      </div>

      {/* 注記 */}
      <p
        style={{
          fontSize: '11px',
          color: 'var(--fg-deep-muted)',
          letterSpacing: '0.02em',
          lineHeight: '1.6',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        ※個人の感想であり、成果を保証するものではありません。
      </p>

      {/* CTA */}
      <div style={{ textAlign: 'center' }}>
        <Button variant="outline" href="#voice">
          もっと見る
        </Button>
      </div>
    </div>
  </section>
);
