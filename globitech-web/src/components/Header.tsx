"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#coverage", label: "Coverage" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !(scrolled || open);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/95 shadow-[0_1px_0_var(--line-light)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="Globitech Ghana home">
          {onDark ? (
            <Logo priority />
          ) : (
            <span className="flex items-center gap-2.5">
              <Logo variant="mark" priority />
              <span className="leading-none">
                <span className="font-display block text-sm font-extrabold tracking-[0.08em] text-paper md:text-base">
                  GLOBITECH
                </span>
                <span className="mt-0.5 block text-[10px] font-light uppercase tracking-[0.35em] text-paper/70">
                  Ghana
                </span>
              </span>
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-paper/80 transition-colors hover:text-blue"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+233508997295"
            className="bg-orange px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-green"
          >
            Call us
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-full bg-paper transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full bg-paper transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full bg-paper transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-line-light bg-ink px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-base font-medium text-paper"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+233508997295"
                className="mt-2 inline-block bg-orange px-4 py-2.5 text-sm font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                Call us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
