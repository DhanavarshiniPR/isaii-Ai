"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedFadeInUp({ children, style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.2, y: 120, scale: 0.98, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
      animate={inView ? {
        opacity: 1,
        y: 0,
        scale: 1.04,
        boxShadow: '0 8px 32px rgba(0,0,0,0.16)'
      } : {}}
      transition={{ duration: 0.45, ease: [0.42, 0, 0.58, 1] }}
      whileHover={{ scale: 1.06, boxShadow: '0 12px 36px rgba(0,0,0,0.18)' }}
      onAnimationComplete={() => {
        if (ref.current) {
          ref.current.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
          ref.current.style.scale = '1';
        }
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
} 