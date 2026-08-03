import Image from "next/image";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-paper"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=80"
          alt="Secure digital infrastructure and network operations"
          fill
          priority
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(0,174,239,0.35), transparent 60%), radial-gradient(ellipse 40% 35% at 20% 80%, rgba(141,198,63,0.2), transparent 55%), radial-gradient(ellipse 30% 25% at 70% 70%, rgba(247,148,29,0.18), transparent 50%)",
          }}
          aria-hidden
        />
        <div className="hero-scan absolute inset-0 opacity-60" aria-hidden />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-32">
        <div className="animate-rise">
          <Logo className="!h-14 md:!h-20" priority />
        </div>

        <h1 className="animate-rise-delay-1 mt-8 max-w-xl text-2xl font-medium leading-snug text-paper sm:text-3xl md:text-4xl">
          Cybersecurity built for the African enterprise.
        </h1>

        <p className="animate-rise-delay-2 mt-4 max-w-lg text-base leading-relaxed text-mist/90 md:text-lg">
          From Takoradi to cross-border operations across West and East Africa,
          we harden systems, respond to threats, and keep your business online.
        </p>

        <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="bg-orange px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-green"
          >
            Talk to our team
          </a>
          <a
            href="#services"
            className="border border-paper/35 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-blue hover:text-blue"
          >
            Explore services
          </a>
          <a
            href="/download"
            className="border border-blue/50 px-6 py-3.5 text-sm font-semibold text-blue transition-colors hover:border-blue hover:bg-blue/10"
          >
            Download HTML
          </a>
        </div>
      </div>
    </section>
  );
}
