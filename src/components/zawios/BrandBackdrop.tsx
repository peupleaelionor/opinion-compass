export function BrandBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-hero">
      <img src="/brand/convergence-lines.svg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 overflow-hidden bg-line">
        <span className="block h-px w-1/3 bg-primary/70 motion-safe:animate-signal-sweep" />
      </div>
    </div>
  );
}
