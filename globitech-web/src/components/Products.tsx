export function Products() {
  return (
    <section id="products" className="atmosphere border-y border-line py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
          Our products
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
          WO~MENS HAVEN
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft/80 md:text-lg">
          <strong className="font-semibold text-ink">WO~MENS HAVEN</strong> is a
          product of{" "}
          <strong className="font-semibold text-ink">
            Globitech Cyber Solutions
          </strong>
          — a forthcoming app for women and men. Learn more at{" "}
          <a
            href="https://sisters-haven.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue underline-offset-4 transition-colors hover:text-green hover:underline"
          >
            sisters-haven.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
