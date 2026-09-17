import { ArrowUpRight } from '@/components/icons';
import { ContactForm } from '@/components/contact-form';
import { SectionReveal } from '@/components/section-reveal';

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-line py-24 md:py-36" aria-labelledby="contact-title">
      <div className="container-shell">
        <SectionReveal className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
          <div>
            <p className="eyebrow">Have a good one?</p>
            <h2 id="contact-title" className="section-title">Let&apos;s make<br /><span className="text-signal">something clear.</span></h2>
            <p className="section-copy mt-7">Have a complicated idea, a new chapter, or a problem that needs a better shape? Tell me about it.</p>
            <a href="mailto:hello@nidhi.studio" className="focus-ring mt-8 inline-flex items-center gap-2 border-b border-signal pb-1 text-sm text-cloud transition-colors hover:text-signal">hello@nidhi.studio <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="rounded-2xl border border-line bg-panel p-5 sm:p-8"><ContactForm /></div>
        </SectionReveal>
      </div>
    </section>
  );
}
