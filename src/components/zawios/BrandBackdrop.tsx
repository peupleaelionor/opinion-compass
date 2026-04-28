export function BrandBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-hero">
      <img src="/brand/convergence-lines.svg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background via-background/80 to-transparent" />
      <div className="absolute left-1/2 top-0 h-px w-[min(72rem,82vw)] -translate-x-1/2 overflow-hidden bg-line">
        <span className="block h-px w-1/4 bg-primary/70 motion-safe:animate-signal-sweep" />
      </div>
    </div>
  );
}
