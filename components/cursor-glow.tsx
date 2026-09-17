'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export function CursorGlow() {
  const shouldReduceMotion = useReducedMotion();
  const x = useSpring(useMotionValue(-500), { stiffness: 180, damping: 28, mass: 0.5 });
  const y = useSpring(useMotionValue(-500), { stiffness: 180, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [shouldReduceMotion, x, y]);

  if (shouldReduceMotion) return null;

  return <motion.div className="cursor-glow hidden md:block" style={{ x, y }} aria-hidden="true" />;
}
