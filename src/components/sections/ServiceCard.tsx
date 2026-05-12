'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  index: number;
  metaTag: string;
  icon: ReactNode;
  title: string;
  body: string;
  placeholder: ReactNode;
  delay?: number;
};

export const ServiceCard = ({ index, metaTag, icon, title, body, placeholder, delay = 0 }: Props) => (
  <motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    whileHover={{ y: -6 }}
    style={{
      border: '1px solid var(--line-on-cream)',
      backgroundColor: '#ffffff',
      cursor: 'default',
      transition: 'transform 0.4s ease, border-color 0.4s ease',
      overflow: 'hidden',
    }}
    className="hover:border-[var(--gold)]"
    aria-label={`サービス ${index + 1}: ${title}`}
  >
    {/* 画像エリア (5:3) */}
    <div style={{ aspectRatio: '5 / 3', overflow: 'hidden' }}>
      {placeholder}
    </div>

    {/* コンテンツ */}
    <div style={{ padding: '24px' }}>
      {/* メタタグ */}
      <p
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '10px',
          letterSpacing: '0.30em',
          color: 'var(--gold)',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}
      >
        {String(index + 1).padStart(2, '0')} · {metaTag}
      </p>

      {/* アイコン + タイトル */}
      <div className="flex items-center gap-3" style={{ marginBottom: '12px' }}>
        <span style={{ color: 'var(--gold)' }} aria-hidden>{icon}</span>
        <h3
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: '18px',
            fontWeight: 500,
            letterSpacing: '0.04em',
            lineHeight: 1.4,
            color: 'var(--fg-deep)',
          }}
        >
          {title}
        </h3>
      </div>

      {/* 説明 */}
      <p
        style={{
          fontSize: '13px',
          fontWeight: 300,
          letterSpacing: '0.02em',
          lineHeight: '1.9',
          color: 'var(--fg-muted)',
        }}
      >
        {body}
      </p>
    </div>
  </motion.article>
);
