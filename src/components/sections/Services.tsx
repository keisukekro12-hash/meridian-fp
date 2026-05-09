'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, FileText, Home } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from './ServiceCard';

/* サービスカード用 SVGプレースホルダー */
const cityScapeSVG = (
  <svg viewBox="0 0 400 240" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="400" height="240" fill="var(--bg-deep-2)" />
    <rect x="0"   y="100" width="60"  height="140" fill="rgba(201,169,97,0.15)" />
    <rect x="70"  y="60"  width="50"  height="180" fill="rgba(201,169,97,0.20)" />
    <rect x="130" y="80"  width="80"  height="160" fill="rgba(201,169,97,0.12)" />
    <rect x="220" y="40"  width="60"  height="200" fill="rgba(201,169,97,0.18)" />
    <rect x="290" y="70"  width="50"  height="170" fill="rgba(201,169,97,0.14)" />
    <rect x="350" y="90"  width="50"  height="150" fill="rgba(201,169,97,0.16)" />
    <rect x="0" y="195" width="400" height="45" fill="rgba(10,22,40,0.6)" />
    <text x="200" y="224" textAnchor="middle" fill="rgba(201,169,97,0.5)" fontSize="9" fontFamily="monospace" letterSpacing="3">PORTFOLIO</text>
  </svg>
);

const familySVG = (
  <svg viewBox="0 0 400 240" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="400" height="240" fill="#1a2e20" />
    <circle cx="160" cy="100" r="40" fill="rgba(201,169,97,0.15)" />
    <circle cx="240" cy="100" r="40" fill="rgba(201,169,97,0.12)" />
    <circle cx="200" cy="160" r="25" fill="rgba(201,169,97,0.10)" />
    <rect x="0" y="195" width="400" height="45" fill="rgba(12,42,38,0.7)" />
    <text x="200" y="224" textAnchor="middle" fill="rgba(201,169,97,0.5)" fontSize="9" fontFamily="monospace" letterSpacing="3">LIFE PLAN</text>
  </svg>
);

const contractSVG = (
  <svg viewBox="0 0 400 240" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="400" height="240" fill="#1e1a14" />
    <rect x="120" y="40" width="160" height="200" fill="rgba(245,241,232,0.08)" rx="2" />
    {[0,1,2,3,4,5,6].map((i) => (
      <line key={i} x1="136" y1={68 + i * 18} x2="264" y2={68 + i * 18} stroke="rgba(201,169,97,0.2)" strokeWidth="0.8" />
    ))}
    <rect x="270" y="170" width="90" height="6" fill="rgba(201,169,97,0.5)" rx="3" />
    <rect x="0" y="195" width="400" height="45" fill="rgba(20,20,20,0.7)" />
    <text x="200" y="224" textAnchor="middle" fill="rgba(201,169,97,0.5)" fontSize="9" fontFamily="monospace" letterSpacing="3">INSURANCE</text>
  </svg>
);

const houseSVG = (
  <svg viewBox="0 0 400 240" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="400" height="240" fill="#0e1e2a" />
    <polygon points="200,40 310,120 90,120" fill="rgba(201,169,97,0.18)" />
    <rect x="120" y="120" width="160" height="100" fill="rgba(201,169,97,0.12)" />
    <rect x="170" y="150" width="60" height="70" fill="rgba(201,169,97,0.08)" />
    <rect x="0" y="195" width="400" height="45" fill="rgba(10,22,40,0.7)" />
    <text x="200" y="224" textAnchor="middle" fill="rgba(201,169,97,0.5)" fontSize="9" fontFamily="monospace" letterSpacing="3">MORTGAGE</text>
  </svg>
);

const SERVICES = [
  {
    metaTag:     'PORTFOLIO',
    icon:        <TrendingUp size={20} strokeWidth={1.2} />,
    title:       '資産運用のご相談',
    body:        'お客様のリスク許容度・投資目標に合わせた最適なポートフォリオを設計。長期的な資産形成をサポートします。',
    placeholder: cityScapeSVG,
  },
  {
    metaTag:     'LIFE PLAN',
    icon:        <Users size={20} strokeWidth={1.2} />,
    title:       'ライフプラン設計',
    body:        '結婚・出産・教育・老後まで、人生の各ステージを見据えた資金計画を丁寧にシミュレーションします。',
    placeholder: familySVG,
  },
  {
    metaTag:     'INSURANCE',
    icon:        <FileText size={20} strokeWidth={1.2} />,
    title:       '保険の見直し・最適化',
    body:        '現在の保険契約を精査し、過不足を整理。本当に必要な保障を、最適なコストで実現します。',
    placeholder: contractSVG,
  },
  {
    metaTag:     'MORTGAGE',
    icon:        <Home size={20} strokeWidth={1.2} />,
    title:       '住宅購入・ローン相談',
    body:        '物件選定から住宅ローンの比較・シミュレーションまで、人生最大の買い物を安心して進めるよう支援します。',
    placeholder: houseSVG,
  },
];

export const Services = () => (
  <section
    id="services"
    style={{
      backgroundColor: 'var(--bg-deep)',
      color: 'var(--fg-cream)',
      padding: '140px 0',
    }}
    aria-label="サービス"
  >
    <div className="container-main">
      {/* セクションタイトル */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <Eyebrow style={{ justifyContent: 'center' }}>SERVICE</Eyebrow>
        <h2
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: '44px',
            fontWeight: 500,
            letterSpacing: '0.04em',
            lineHeight: 1.5,
            color: 'var(--fg-cream)',
          }}
        >
          お客様の目標に合わせた
          <br />
          <span style={{ color: 'var(--gold)' }}>最適なサポート</span>を提供します
        </h2>
      </motion.div>

      {/* 4カラムグリッド */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginBottom: '56px',
        }}
      >
        {SERVICES.map((s, i) => (
          <ServiceCard
            key={s.title}
            index={i}
            metaTag={s.metaTag}
            icon={s.icon}
            title={s.title}
            body={s.body}
            placeholder={s.placeholder}
            delay={i * 0.08}
          />
        ))}
      </div>

      {/* 下部CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ textAlign: 'center' }}
      >
        <Button variant="ghost-light" href="#services">
          サービス一覧を見る
        </Button>
      </motion.div>
    </div>
  </section>
);
