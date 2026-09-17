import Link from 'next/link';
import { ArrowUpRight } from '@/components/icons';

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-shell flex flex-col gap-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Nidhi. Made with intent.</p>
        <div className="flex flex-wrap items-center gap-5 uppercase tracking-[0.14em]">
          <Link href="#top" className="focus-ring transition-colors hover:text-cloud">Back to top ↑</Link>
          <a className="focus-ring inline-flex items-center gap-1 transition-colors hover:text-signal" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight className="h-3 w-3" /></a>
          <a className="focus-ring inline-flex items-center gap-1 transition-colors hover:text-signal" href="mailto:hello@nidhi.studio">Email <ArrowUpRight className="h-3 w-3" /></a>
        </div>
      </div>
    </footer>
  );
}
