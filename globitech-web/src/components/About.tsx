export function About() {
  return (
    <section id="about" className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Based in Takoradi
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Local roots. Regional trust.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft/85">
            Globitech Cyber Solutions operates from the Western Region of Ghana,
            serving businesses that need clear guidance, fast response, and
            security programmes that fit real operational constraints.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft/85">
            Whether you are securing a growing office, a distributed workforce,
            or systems that span multiple countries, we bring disciplined
            cybersecurity practice without the jargon.
          </p>
        </div>

        <aside className="flex flex-col justify-center border-l-4 border-teal bg-mist/60 px-6 py-8 md:px-10">
          <h3 className="font-display text-xl font-bold text-ink">Visit us</h3>
          <address className="mt-4 not-italic text-base leading-relaxed text-ink-soft">
            House Number 6, Efua Crentsil
            <br />
            Takoradi, Western Region
            <br />
            Ghana
          </address>
          <div className="mt-8 space-y-2 text-base">
            <a
              href="tel:+233508997295"
              className="block font-semibold text-teal transition-colors hover:text-teal-bright"
            >
              050 899 7295
            </a>
            <a
              href="tel:+233551324845"
              className="block font-semibold text-teal transition-colors hover:text-teal-bright"
            >
              055 132 4845
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
