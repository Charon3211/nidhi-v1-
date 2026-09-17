import { ArrowUpRight, CheckIcon } from '@/components/icons';
import { SectionReveal } from '@/components/section-reveal';
import { services } from '@/lib/data';

const principles = ['Start with the uncomfortable question', 'Make the complex feel inevitable', 'Leave room for people to bring themselves'];

export function ApproachSection() {
  return (
    <section id="approach" className="border-b border-line py-24 md:py-36" aria-labelledby="approach-title">
      <div className="container-shell">
        <SectionReveal className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
          <div><p className="eyebrow">How I help</p><h2 id="approach-title" className="section-title">Good work is a <span className="text-signal">team sport.</span></h2><p className="section-copy mt-7">The best outcomes happen when strategy, design, and business decisions move together. I bring structure, curiosity, and a bias toward making the thing.</p><a href="#contact" className="focus-ring mt-8 inline-flex items-center gap-2 text-sm font-medium text-cloud transition-colors hover:text-signal">Let&apos;s work together <ArrowUpRight className="h-4 w-4" /></a></div>
          <div className="divide-y divide-line border-y border-line">{services.map((service) => <div key={service.number} className="group grid gap-4 py-7 sm:grid-cols-[5rem_1fr] sm:gap-6"><span className="font-mono text-xs text-signal">{service.number}</span><div><h3 className="font-display text-2xl font-medium tracking-[-0.04em] text-cloud transition-colors group-hover:text-signal">{service.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-muted">{service.description}</p></div></div>)}</div>
        </SectionReveal>
        <SectionReveal className="mt-24 grid gap-8 border-t border-line pt-8 md:mt-36 md:grid-cols-[0.8fr_1.2fr] md:gap-24" delay={0.1}>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-muted">A few things I believe</p>
          <ul className="grid gap-5">{principles.map((principle) => <li key={principle} className="flex items-start gap-4 font-display text-2xl leading-tight tracking-[-0.04em] text-cloud md:text-3xl"><CheckIcon className="mt-1 h-5 w-5 shrink-0 text-signal" />{principle}</li>)}</ul>
        </SectionReveal>
      </div>
    </section>
  );
}
