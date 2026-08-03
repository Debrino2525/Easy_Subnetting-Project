import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-light bg-ink text-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <Logo className="!h-12 md:!h-14" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-mist/60">
            Globitech Cyber Solutions — cybersecurity from Takoradi, Western
            Region, Ghana, trusted across West and East Africa. Owner of{" "}
            <a
              href="https://sisters-haven.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:text-green"
            >
              WO~MENS HAVEN
            </a>
            .
          </p>
        </div>
        <div className="text-sm text-mist/50">
          <a
            href="/download"
            className="mb-4 inline-block border border-line-light px-4 py-2 font-medium text-paper transition-colors hover:border-blue hover:text-blue"
          >
            Download HTML
          </a>
          <p>© {year} Globitech Ghana</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
