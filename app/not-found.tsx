import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6 text-cloud">
      <div className="max-w-md text-center"><p className="mb-4 text-xs uppercase tracking-[0.2em] text-signal">404 / Not found</p><h1 className="font-display text-5xl tracking-[-0.05em]">This page is elsewhere.</h1><p className="mt-4 text-muted">The link may have moved, but the good work is still here.</p><Link href="/" className="mt-8 inline-flex rounded-full bg-signal px-5 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-1">Back home</Link></div>
    </main>
  );
}
