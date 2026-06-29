"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Programs", href: "#programs" },
  { name: "About", href: "#about" },
  { name: "Founder", href: "#founder" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${
          scrolled || open
            ? "bg-black/80 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_8px_40px_rgba(168,85,247,.12)]"
            : "bg-transparent border-transparent"
        }
      `}
    >
      <div
        className={`
          mx-auto flex max-w-7xl items-center justify-between
          px-5 sm:px-8 transition-all duration-500
          ${scrolled ? "py-4" : "py-5 md:py-6"}
        `}
      >
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="
            text-lg sm:text-xl md:text-2xl
            font-black
            tracking-[0.12em] sm:tracking-[0.18em] md:tracking-[0.25em]
            transition-all duration-300
            hover:scale-105
            whitespace-nowrap
          "
        >
          <span className="text-purple-400">DNA</span>{" "}
          Volleyball
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                group relative text-xs uppercase tracking-[0.28em]
                text-gray-300 transition-colors duration-300
                hover:text-white
              "
            >
              {link.name}
              <span
                className="
                  absolute -bottom-2 left-0 h-[2px] w-0 rounded-full
                  bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,.8)]
                  transition-all duration-300 group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            flex h-10 w-10 items-center justify-center
            rounded-full border border-purple-500/30
            bg-white/5 backdrop-blur-md
            text-white
          "
          aria-label="Toggle navigation"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`
                absolute left-0 top-0 h-[2px] w-5 rounded-full bg-white
                transition-all duration-300
                ${open ? "translate-y-[7px] rotate-45" : ""}
              `}
            />
            <span
              className={`
                absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-white
                transition-all duration-300
                ${open ? "opacity-0" : ""}
              `}
            />
            <span
              className={`
                absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-white
                transition-all duration-300
                ${open ? "-translate-y-[7px] -rotate-45" : ""}
              `}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-purple-500/20 bg-black/90 backdrop-blur-xl">
          <nav className="flex flex-col px-5 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  border-b border-white/10 py-4
                  text-sm uppercase tracking-[0.25em]
                  text-gray-300 transition-colors
                  hover:text-white
                "
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}