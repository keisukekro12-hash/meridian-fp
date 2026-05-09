'use client';

import { motion } from 'framer-motion';

export const HeroScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.6 }}
    style={{
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      zIndex: 2,
    }}
    aria-hidden
  >
    <span
      style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '9px',
        letterSpacing: '0.30em',
        color: 'var(--fg-muted)',
        textTransform: 'uppercase',
      }}
    >
      SCROLL
    </span>
    <div
      style={{
        width: '1px',
        height: '48px',
        background: 'linear-gradient(to bottom, var(--gold), transparent)',
        animation: 'scroll-line 2s ease-in-out infinite',
      }}
    />
  </motion.div>
);
