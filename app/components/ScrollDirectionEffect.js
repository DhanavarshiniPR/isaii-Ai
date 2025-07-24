"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollDirectionEffect({ children, style = {}, ...props }) {
  const [scrollDir, setScrollDir] = useState(null); // 'up' | 'down' | null
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y > lastScrollY.current + 2) {
            setScrollDir('down');
          } else if (y < lastScrollY.current - 2) {
            setScrollDir('up');
          }
          lastScrollY.current = y;
          ticking.current = false;
        });
        ticking.current = true;
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  let translateY = 0;
  if (scrollDir === 'up') translateY = -10;
  if (scrollDir === 'down') translateY = 10;

  return (
    <motion.div
      animate={{ y: translateY }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      style={{ willChange: 'transform', ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
} 