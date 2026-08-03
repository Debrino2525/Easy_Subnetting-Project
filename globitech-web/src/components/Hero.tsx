import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden text-paper"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=80"
          alt="Secure digital infrastructure and network operations"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="hero-scan absolute inset-0 opacity-60" aria-hidden />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-32">
        <p className="animate-rise font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-paper sm:text-5xl md:text-6xl lg:text-7xl">
          Globitech
          <span className="mt-1 block text-sand md:mt-2">Cyber Solutions</span>
        </p>

        <h1 className="animate-rise-delay-1 mt-6 max-w-xl text-xl font-medium leading-snug text-paper/95 sm:text-2xl md:text-3xl">
          Cybersecurity built for the African enterprise.
        </h1>

        <p className="animate-rise-delay-2 mt-4 max-w-lg text-base leading-relaxed text-mist/90 md:text-lg">
          From Takoradi to cross-border operations across West and East Africa,
          we harden systems, respond to threats, and keep your business online.
        </p>

        <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="bg-teal-bright px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-teal"
          >
            Talk to our team
          </a>
          <a
            href="#services"
            className="border border-paper/35 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}
