'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { Project } from '@/lib/data';
import { ArrowUpRight } from '@/components/icons';

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ['0%', '0%'] : ['-5%', '5%']);

  return (
    <motion.article ref={ref} className={`group ${featured ? 'md:col-span-2' : ''}`} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
      <a href="#contact" className="focus-ring block" aria-label={`Ask about the ${project.title} project`}>
        <div className={`relative overflow-hidden rounded-2xl border border-line bg-panel ${featured ? 'aspect-[16/9] md:aspect-[2/1]' : 'aspect-[4/3]'}`}>
          <motion.div className="absolute -inset-[5%]" style={{ y: imageY }}>
            <Image src={project.image} alt={project.alt} fill sizes={featured ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'} className="object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0" loading={featured ? 'eager' : 'lazy'} />
          </motion.div>
          <div className="project-image-overlay absolute inset-0" />
          <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink/20 text-cloud opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:rotate-45"><ArrowUpRight className="h-5 w-5" /></span>
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 md:inset-x-7 md:bottom-7">
            <div><p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-signal">{project.category}</p><h3 className="font-display text-2xl font-medium tracking-[-0.04em] text-cloud md:text-3xl">{project.title}</h3></div>
            <span className="font-mono text-xs text-white/50">{project.index}</span>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <p className="max-w-xl text-sm leading-6 text-muted md:text-base">{project.description}</p>
          <div className="flex shrink-0 flex-wrap gap-2 md:justify-end">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-line px-3 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-muted">{tag}</span>)}</div>
        </div>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-cloud"><span className="mr-2 text-signal">↳</span>{project.impact}</p>
      </a>
    </motion.article>
  );
}
