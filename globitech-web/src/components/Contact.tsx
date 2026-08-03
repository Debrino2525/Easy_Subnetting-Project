export function Contact() {
  return (
    <section id="contact" className="atmosphere relative overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Contact
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Ready to strengthen your defences?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft/85">
            Call Globitech Cyber Solutions — we will discuss your environment,
            priorities, and the fastest path to a stronger security posture.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="tel:+233508997295"
            className="group border border-line bg-paper/70 px-6 py-7 transition-colors hover:border-teal hover:bg-paper"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft/70">
              Primary line
            </p>
            <p className="font-display mt-3 text-2xl font-bold text-ink transition-colors group-hover:text-teal">
              050 899 7295
            </p>
          </a>
          <a
            href="tel:+233551324845"
            className="group border border-line bg-paper/70 px-6 py-7 transition-colors hover:border-teal hover:bg-paper"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft/70">
              Alternate line
            </p>
            <p className="font-display mt-3 text-2xl font-bold text-ink transition-colors group-hover:text-teal">
              055 132 4845
            </p>
          </a>
          <div className="border border-line bg-paper/70 px-6 py-7 sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft/70">
              Office
            </p>
            <p className="font-display mt-3 text-xl font-bold leading-snug text-ink">
              H/No. 6 Efua Crentsil
              <br />
              Takoradi, Ghana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
