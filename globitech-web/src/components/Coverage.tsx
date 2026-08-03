const regions = [
  {
    label: "West Africa",
    detail: "On-the-ground presence and trusted delivery from Ghana across the region.",
  },
  {
    label: "East Africa",
    detail: "Cross-border engagements supporting multi-country teams and infrastructure.",
  },
  {
    label: "Remote-ready",
    detail: "Secure assessments and advisory delivered wherever your systems live.",
  },
];

export function Coverage() {
  return (
    <section id="coverage" className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand">
              Pan-African reach
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              From West Africa to East Africa
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-mist/80">
              Globitech has delivered cybersecurity work across borders —
              helping organisations protect data, people, and uptime as they
              expand.
            </p>
          </div>
          <div
            className="animate-drift relative hidden h-48 overflow-hidden border border-paper/15 lg:block"
            aria-hidden
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(15,138,117,0.45),transparent_55%),radial-gradient(circle_at_75%_40%,rgba(196,165,116,0.3),transparent_45%)]" />
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(244,248,249,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(244,248,249,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
            <p className="absolute bottom-4 left-4 font-display text-sm font-semibold tracking-wide text-paper/80">
              West ↔ East corridor
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-8 border-t border-paper/15 pt-10 md:grid-cols-3">
          {regions.map((region) => (
            <li key={region.label}>
              <h3 className="font-display text-xl font-bold text-sand">
                {region.label}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-mist/75">
                {region.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
