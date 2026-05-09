'use client';

import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

type OrbColor = 'warm' | 'cool' | 'gold';

type Props = {
  color: OrbColor;
  size?: number;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  opacity?: number;
};

const colorMap: Record<OrbColor, string> = {
  warm: 'rgba(212,175,140,0.35)',
  cool: 'rgba(120,140,200,0.28)',
  gold: 'rgba(201,169,97,0.25)',
};

export const Orb = ({ color, size = 600, position, opacity = 1 }: Props) => {
  const style: CSSProperties = {
    position: 'absolute',
    width:  size,
    height: size,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
    filter: 'blur(40px)',
    pointerEvents: 'none',
    opacity,
    ...position,
  };

  return (
    <motion.div
      aria-hidden
      animate={{ scale: [1, 1.08, 1], rotate: [0, 30, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      style={style}
    />
  );
};
