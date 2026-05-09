'use client';

import { motion } from 'framer-motion';
import { Scale, TrendingUp, Shield } from 'lucide-react';
import { ReactNode } from 'react';

type Feature = {
  icon: ReactNode;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    icon: <Scale size={22} strokeWidth={1.2} />,
    title: '中立的な立場',
    body: '特定の金融機関に属さない独立系FPとして、お客様の利益を最優先にした提案を行います。',
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.2} />,
    title: '資産形成のプロが伴走',
    body: '豊富な経験と専門知識で、長期的な資産形成の計画立案から実行まで丁寧にサポートします。',
  },
  {
    icon: <Shield size={22} strokeWidth={1.2} />,
    title: '安心の長期サポート',
    body: '一度限りの提案ではなく、ライフステージの変化に合わせた継続的な見直しで伴走します。',
  },
];

export const FeatureStrip = () => (
  <div
    style={{
      marginTop: '-80px',
      position: 'relative',
      zIndex: 10,
      backgroundColor: 'var(--bg-deep-2)',
      border: '1px solid var(--line-on-deep)',
    }}
  >
    <div
      className="container-main rsp-1col"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
    >
      {FEATURES.map((feature, i) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
          className="rsp-feature-item"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
            padding: '32px 36px',
            borderRight: i < FEATURES.length - 1 ? '1px solid var(--line-on-deep)' : 'none',
          }}
        >
          {/* アイコン */}
          <div
            style={{
              color: 'var(--gold)',
              flexShrink: 0,
              marginTop: '2px',
            }}
            aria-hidden
          >
            {feature.icon}
          </div>

          {/* テキスト */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: '18px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                lineHeight: 1.4,
                color: 'var(--fg-cream)',
                marginBottom: '8px',
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 300,
                letterSpacing: '0.02em',
                lineHeight: '1.9',
                color: 'var(--fg-muted)',
              }}
            >
              {feature.body}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
