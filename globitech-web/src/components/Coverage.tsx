const regions = [
  {
    label: "West Africa",
    detail: "On-the-ground presence and trusted delivery from Ghana across the region.",
    accent: "text-blue",
  },
  {
    label: "East Africa",
    detail: "Cross-border engagements supporting multi-country teams and infrastructure.",
    accent: "text-green",
  },
  {
    label: "Remote-ready",
    detail: "Secure assessments and advisory delivered wherever your systems live.",
    accent: "text-orange",
  },
];

export function Coverage() {
  return (
    <section id="coverage" className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              Pan-African reach
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              From West Africa to East Africa
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-mist/75">
              Globitech has delivered cybersecurity work across borders —
              helping organisations protect data, people, and uptime as they
              expand.
            </p>
          </div>
          <div
            className="animate-drift relative hidden h-48 overflow-hidden border border-line-light lg:block"
            aria-hidden
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,174,239,0.45),transparent_55%),radial-gradient(circle_at_65%_45%,rgba(141,198,63,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(247,148,29,0.3),transparent_40%)]" />
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(245,247,248,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(245,247,248,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
            <p className="absolute bottom-4 left-4 font-display text-sm font-semibold tracking-wide text-paper/80">
              West ↔ East corridor
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-8 border-t border-line-light pt-10 md:grid-cols-3">
          {regions.map((region) => (
            <li key={region.label}>
              <h3 className={`font-display text-xl font-bold ${region.accent}`}>
                {region.label}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-mist/70">
                {region.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
