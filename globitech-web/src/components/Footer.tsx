export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight text-paper">
            Globitech Cyber Solutions
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-mist/65">
            Cybersecurity services from Takoradi, Western Region, Ghana —
            trusted across West and East Africa.
          </p>
        </div>
        <div className="text-sm text-mist/55">
          <p>© {year} Globitech Cyber Solutions</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
