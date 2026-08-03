export function Contact() {
  return (
    <section id="contact" className="atmosphere relative overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            Contact
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Ready to strengthen your defences?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft/80">
            Call or email Globitech Cyber Solutions — we will discuss your
            environment, priorities, and the fastest path to a stronger security
            posture.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <a
            href="tel:+233508997295"
            className="group border border-line bg-paper/80 px-6 py-7 transition-colors hover:border-blue hover:bg-paper"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft/65">
              Primary line
            </p>
            <p className="font-display mt-3 text-2xl font-bold text-ink transition-colors group-hover:text-blue">
              050 899 7295
            </p>
          </a>
          <a
            href="tel:+233551324845"
            className="group border border-line bg-paper/80 px-6 py-7 transition-colors hover:border-green hover:bg-paper"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft/65">
              Alternate line
            </p>
            <p className="font-display mt-3 text-2xl font-bold text-ink transition-colors group-hover:text-green">
              055 132 4845
            </p>
          </a>
          <a
            href="mailto:support@globitechcybersolutions.com"
            className="group border border-line bg-paper/80 px-6 py-7 transition-colors hover:border-orange hover:bg-paper"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft/65">
              Support email
            </p>
            <p className="font-display mt-3 break-all text-xl font-bold text-ink transition-colors group-hover:text-orange md:text-2xl">
              support@globitechcybersolutions.com
            </p>
          </a>
          <div className="border border-line bg-paper/80 px-6 py-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft/65">
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
