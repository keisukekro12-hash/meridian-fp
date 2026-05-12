'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, FileText, Home } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from './ServiceCard';

/* サービスカード用 SVGプレースホルダー — ナチュラルグリーン */
const growthSVG = (
  <svg viewBox="0 0 400 240" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="400" height="240" fill="#e8ede3" />
    <circle cx="200" cy="180" r="120" fill="rgba(107,138,90,0.12)" />
    <rect x="160" y="60" width="16" height="120" fill="rgba(107,138,90,0.5)" rx="2" />
    <rect x="184" y="80" width="16" height="100" fill="rgba(107,138,90,0.4)" rx="2" />
    <rect x="208" y="50" width="16" height="110" fill="rgba(58,82,41,0.5)" rx="2" />
    <rect x="232" y="90" width="16" height="90" fill="rgba(107,138,90,0.35)" rx="2" />
    <path d="M80 150 Q140 80 200 100 Q260 120 320 60" stroke="rgba(58,82,41,0.6)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <circle cx="320" cy="60" r="5" fill="rgba(58,82,41,0.7)" />
    <rect x="0" y="200" width="400" height="40" fill="rgba(107,138,90,0.15)" />
    <text x="200" y="226" textAnchor="middle" fill="rgba(58,82,41,0.6)" fontSize="9" fontFamily="monospace" letterSpacing="3">PORTFOLIO</text>
  </svg>
);

const familySVG = (
  <svg viewBox="0 0 400 240" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="400" height="240" fill="#f0f4ec" />
    <circle cx="200" cy="200" r="180" fill="rgba(107,138,90,0.08)" />
    <circle cx="160" cy="110" r="28" fill="rgba(107,138,90,0.35)" />
    <rect x="136" y="136" width="48" height="60" fill="rgba(107,138,90,0.3)" rx="24" />
    <circle cx="240" cy="115" r="24" fill="rgba(58,82,41,0.3)" />
    <rect x="218" y="138" width="44" height="55" fill="rgba(58,82,41,0.25)" rx="22" />
    <circle cx="200" cy="155" r="16" fill="rgba(138,170,114,0.5)" />
    <rect x="186" y="170" width="28" height="40" fill="rgba(138,170,114,0.4)" rx="14" />
    <rect x="0" y="200" width="400" height="40" fill="rgba(107,138,90,0.12)" />
    <text x="200" y="226" textAnchor="middle" fill="rgba(58,82,41,0.6)" fontSize="9" fontFamily="monospace" letterSpacing="3">LIFE PLAN</text>
  </svg>
);

const contractSVG = (
  <svg viewBox="0 0 400 240" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="400" height="240" fill="#f5f2eb" />
    <rect x="110" y="30" width="180" height="180" fill="white" rx="3" style={{ filter: 'drop-shadow(0 2px 8px rgba(107,138,90,0.15))' }} />
    {[0,1,2,3,4,5].map((i) => (
      <line key={i} x1="128" y1={58 + i * 20} x2="272" y2={58 + i * 20} stroke="rgba(107,138,90,0.2)" strokeWidth="1" />
    ))}
    <rect x="200" y="166" width="72" height="8" fill="rgba(107,138,90,0.5)" rx="4" />
    <rect x="0" y="200" width="400" height="40" fill="rgba(107,138,90,0.1)" />
    <text x="200" y="226" textAnchor="middle" fill="rgba(58,82,41,0.6)" fontSize="9" fontFamily="monospace" letterSpacing="3">INSURANCE</text>
  </svg>
);

const houseSVG = (
  <svg viewBox="0 0 400 240" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="400" height="240" fill="#edf2e8" />
    <polygon points="200,40 310,120 90,120" fill="rgba(58,82,41,0.3)" />
    <rect x="120" y="118" width="160" height="90" fill="rgba(107,138,90,0.35)" />
    <rect x="168" y="148" width="64" height="60" fill="rgba(58,82,41,0.25)" />
    <rect x="130" y="130" width="44" height="40" fill="white" opacity="0.6" rx="1" />
    <rect x="226" y="130" width="44" height="40" fill="white" opacity="0.6" rx="1" />
    <rect x="0" y="200" width="400" height="40" fill="rgba(107,138,90,0.12)" />
    <text x="200" y="226" textAnchor="middle" fill="rgba(58,82,41,0.6)" fontSize="9" fontFamily="monospace" letterSpacing="3">MORTGAGE</text>
  </svg>
);

const SERVICES = [
  {
    metaTag:     'PORTFOLIO',
    icon:        <TrendingUp size={20} strokeWidth={1.2} />,
    title:       '資産運用のご相談',
    body:        'お客様のリスク許容度・投資目標に合わせた最適なポートフォリオを設計。長期的な資産形成をサポートします。',
    placeholder: growthSVG,
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
    className="rsp-pad"
    style={{
      backgroundColor: 'var(--bg-cream-2)',
      color: 'var(--fg-deep)',
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
          className="rsp-h2"
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
        className="rsp-2col"
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
