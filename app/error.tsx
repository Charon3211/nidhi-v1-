'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Keep production errors observable without exposing stack traces to visitors.
    console.error('Portfolio page error:', error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6 text-cloud">
      <div className="max-w-md text-center"><p className="mb-4 text-xs uppercase tracking-[0.2em] text-signal">Something went off script</p><h1 className="font-display text-4xl tracking-[-0.05em]">Let&apos;s try that again.</h1><p className="mt-4 text-muted">The page hit an unexpected error. Nothing has been lost.</p><button type="button" onClick={() => reset()} className="mt-8 rounded-full bg-signal px-5 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-1">Reload page</button></div>
    </main>
  );
}
