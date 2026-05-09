'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Intensity = 'subtle' | 'default' | 'heavy';

type Props = {
  children: ReactNode;
  intensity?: Intensity;
  className?: string;
  hover?: boolean;
};

const blurMap: Record<Intensity, string> = {
  subtle:  'backdrop-blur-md saturate-150',
  default: 'backdrop-blur-2xl saturate-180',
  heavy:   'backdrop-blur-3xl saturate-200',
};

export const GlassCard = ({ children, intensity = 'default', className = '', hover = false }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -6 } : undefined}
      className={[
        'relative rounded-none overflow-hidden',
        'bg-white/[0.06] border border-white/[0.18]',
        blurMap[intensity],
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_32px_rgba(0,0,0,0.18)]',
        hover ? 'transition-[transform,border-color] duration-400 ease-out hover:border-[var(--gold)]' : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
