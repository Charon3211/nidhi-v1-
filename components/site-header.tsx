'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CloseIcon, MenuIcon } from '@/components/icons';
import { navigation } from '@/lib/data';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener('resize', closeMenuOnDesktop, { passive: true });
    return () => window.removeEventListener('resize', closeMenuOnDesktop);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-30 transition-[padding,background-color,border-color] duration-300 ${isScrolled ? 'border-b border-line/80 bg-ink/85 py-3 backdrop-blur-xl' : 'border-b border-transparent bg-transparent py-5'}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-shell flex items-center justify-between">
        <Link href="#top" className="focus-ring group relative z-10 flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-signal/50 text-xs font-bold text-signal transition-colors group-hover:bg-signal group-hover:text-ink">N</span>
          <span className="font-display text-sm font-medium uppercase tracking-[0.16em] text-cloud">Nidhi<span className="text-signal">.</span></span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring text-xs font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-cloud">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="focus-ring hidden rounded-full border border-line px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-cloud transition-all hover:border-signal hover:text-signal sm:inline-flex">
          Let&apos;s talk
        </Link>

        <button type="button" className="focus-ring relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line text-cloud md:hidden" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
          {isMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav className="absolute inset-x-0 top-full border-b border-line bg-ink px-5 pb-8 pt-6 md:hidden" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}>
            <div className="container-shell flex flex-col gap-5">
              {navigation.map((item, index) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }}>
                  <Link href={item.href} onClick={closeMenu} className="focus-ring flex items-center justify-between border-b border-line pb-4 font-display text-2xl text-cloud">
                    {item.label}
                    <span className="text-signal">↗</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
