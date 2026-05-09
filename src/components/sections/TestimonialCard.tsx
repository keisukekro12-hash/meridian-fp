'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

type Props = {
  caseNum: string;
  attribute: string;
  quote: string;
  delay?: number;
};

export const TestimonialCard = ({ caseNum, attribute, quote, delay = 0 }: Props) => (
  <motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    style={{
      backgroundColor: 'var(--bg-cream-2)',
      border: '1px solid var(--line-on-cream)',
      padding: '40px 32px',
      position: 'relative',
      overflow: 'hidden',
    }}
    aria-label={`お客様の声 ${caseNum} — ${attribute}`}
  >
    {/* 大型引用符 */}
    <span
      aria-hidden
      style={{
        position: 'absolute',
        top: '16px',
        left: '24px',
        fontFamily: 'var(--font-latin-serif), serif',
        fontSize: '64px',
        fontWeight: 500,
        color: 'var(--gold)',
        opacity: 0.5,
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      "
    </span>

    {/* アバター + 属性 */}
    <div className="flex items-center gap-3" style={{ marginBottom: '24px', marginTop: '32px' }}>
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'var(--bg-deep)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
        aria-hidden
      >
        <User size={18} strokeWidth={1.2} style={{ color: 'var(--gold)' }} />
      </div>

      <div>
        <p
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '10px',
            letterSpacing: '0.30em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: '4px',
          }}
        >
          {caseNum}
        </p>
        <p
          style={{
            fontSize: '12px',
            color: 'var(--fg-deep-muted)',
            letterSpacing: '0.04em',
          }}
        >
          {attribute}
        </p>
      </div>
    </div>

    {/* 引用テキスト */}
    <blockquote
      style={{
        fontSize: '13.5px',
        fontWeight: 300,
        letterSpacing: '0.02em',
        lineHeight: 2,
        color: 'var(--fg-deep)',
        fontStyle: 'normal',
      }}
    >
      {quote}
    </blockquote>
  </motion.article>
);
