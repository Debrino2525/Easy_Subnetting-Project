const services = [
  {
    title: "Security assessment",
    body: "Gap analysis, risk reviews, and actionable roadmaps tailored to your infrastructure and compliance needs.",
    accent: "text-blue",
  },
  {
    title: "Network & endpoint protection",
    body: "Hardened perimeters, endpoint controls, and continuous monitoring to stop threats before they spread.",
    accent: "text-green",
  },
  {
    title: "Incident response",
    body: "Rapid containment, forensics support, and recovery planning when every minute of downtime matters.",
    accent: "text-orange",
  },
  {
    title: "Awareness & advisory",
    body: "Team training, policy guidance, and ongoing advisory so security becomes part of how you operate.",
    accent: "text-blue",
  },
];

export function Services() {
  return (
    <section id="services" className="atmosphere relative overflow-hidden py-20 md:py-28">
      <div className="grid-overlay pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">
            What we offer
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Cybersecurity services that keep operations moving
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft/80">
            Practical defence for organisations that cannot afford disruption —
            designed for African networks, remote teams, and growing digital
            footprints.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.title} className="border-t border-line pt-6">
              <span className={`font-display text-sm font-bold ${service.accent}`}>
                0{index + 1}
              </span>
              <h3 className="font-display mt-3 text-2xl font-bold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft/75">
                {service.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
