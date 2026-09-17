export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink text-cloud" aria-label="Loading portfolio">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted"><span className="h-2 w-2 animate-pulse rounded-full bg-signal" />Loading work</div>
    </main>
  );
}
