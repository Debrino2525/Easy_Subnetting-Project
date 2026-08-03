"use client";

import { useEffect, useState } from "react";

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-paper/90 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-baseline gap-2">
          <span
            className={`font-display text-lg font-extrabold tracking-tight md:text-xl ${
              scrolled || open ? "text-ink" : "text-paper"
            }`}
          >
            Globitech
          </span>
          <span
            className={`hidden text-xs font-medium uppercase tracking-[0.18em] sm:inline ${
              scrolled || open ? "text-ink-soft/70" : "text-paper/70"
            }`}
          >
            Cyber Solutions
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-ink-soft hover:text-teal"
                  : "text-paper/85 hover:text-paper"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+233508997295"
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              scrolled
                ? "bg-ink text-paper hover:bg-teal"
                : "bg-paper text-ink hover:bg-sand"
            }`}
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
              className={`absolute left-0 h-0.5 w-full transition-all ${
                scrolled || open ? "bg-ink" : "bg-paper"
              } ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full transition-opacity ${
                scrolled || open ? "bg-ink" : "bg-paper"
              } ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full transition-all ${
                scrolled || open ? "bg-ink" : "bg-paper"
              } ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-paper px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+233508997295"
                className="mt-2 inline-block bg-ink px-4 py-2.5 text-sm font-semibold text-paper"
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
