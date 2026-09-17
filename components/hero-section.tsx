'use client';

import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from '@/components/icons';

const introLines = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] as const } }),
};

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const orbY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 180]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 18]);

  return (
    <section ref={heroRef} id="top" className="relative flex min-h-[760px] items-center overflow-hidden border-b border-line/70 pt-28 md:min-h-[860px] md:pt-32" aria-labelledby="hero-title">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <motion.div className="hero-orb pointer-events-none absolute -right-48 top-32 h-[30rem] w-[30rem] rounded-full opacity-80 blur-[1px] md:right-[-6rem] md:top-44 md:h-[42rem] md:w-[42rem]" style={{ y: orbY, rotate: orbRotate }} aria-hidden="true" />
      <div className="container-shell relative z-10 flex w-full flex-col justify-between gap-20">
        <div className="max-w-5xl">
          <motion.p custom={0} variants={introLines} initial="hidden" animate="visible" className="eyebrow">Independent designer · London / everywhere</motion.p>
          <motion.h1 custom={1} variants={introLines} initial="hidden" animate="visible" id="hero-title" className="max-w-5xl font-display text-[clamp(3.75rem,13vw,10.5rem)] font-medium leading-[0.88] tracking-[-0.075em] text-cloud">
            Shape the <span className="text-signal">signal.</span><br />
            Make it matter.
          </motion.h1>
          <motion.p custom={2} variants={introLines} initial="hidden" animate="visible" className="mt-8 max-w-xl text-lg leading-8 text-muted md:mt-10 md:text-xl">
            I build products, brands, and digital experiences for people doing meaningful work in a noisy world.
          </motion.p>
          <motion.div custom={3} variants={introLines} initial="hidden" animate="visible" className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="#work" className="focus-ring group inline-flex items-center gap-3 rounded-full bg-signal px-5 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-1">
              See selected work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#contact" className="focus-ring inline-flex items-center rounded-full border border-line px-5 py-3 text-sm font-medium text-cloud transition-colors hover:border-signal hover:text-signal">Start a conversation</Link>
          </motion.div>
        </div>

        <motion.div custom={4} variants={introLines} initial="hidden" animate="visible" className="grid grid-cols-2 gap-y-8 border-t border-line pt-6 sm:grid-cols-4 sm:gap-5">
          <div><p className="mb-2 text-[0.65rem] uppercase tracking-[0.18em] text-muted">Focus</p><p className="text-sm text-cloud">Product + brand</p></div>
          <div><p className="mb-2 text-[0.65rem] uppercase tracking-[0.18em] text-muted">Experience</p><p className="text-sm text-cloud">10+ years</p></div>
          <div><p className="mb-2 text-[0.65rem] uppercase tracking-[0.18em] text-muted">Selected with</p><p className="text-sm text-cloud">Founders + teams</p></div>
          <div><p className="mb-2 text-[0.65rem] uppercase tracking-[0.18em] text-muted">Availability</p><p className="flex items-center gap-2 text-sm text-cloud"><span className="h-2 w-2 animate-pulse rounded-full bg-signal" /> Q3 2025</p></div>
        </motion.div>
      </div>
      <span className="absolute bottom-7 right-5 hidden rotate-90 text-[0.62rem] uppercase tracking-[0.2em] text-muted md:block">Scroll to explore</span>
    </section>
  );
}
