"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Programs",
    href: "#programs",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Founder",
    href: "#founder",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-500

        ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_8px_40px_rgba(168,85,247,.12)]"
            : "bg-transparent border-transparent"
        }
      `}
    >
      <div
        className={`
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          md:px-8
          transition-all
          duration-500

          ${
            scrolled
              ? "py-3"
              : "py-5"
          }
        `}
      >
        <a
          href="#hero"
          aria-label="DNA Volleyball home"
          className="
            group
            flex
            items-center
            transition-transform
            duration-300
            hover:scale-105
          "
        >
          <Image
            src="/logo.png"
            alt="DNA Volleyball"
            width={220}
            height={120}
            priority
            className={`
              h-auto
              w-[90px]
              md:w-[115px]
              lg:w-[125px]
              transition-all
              duration-500
              drop-shadow-[0_0_18px_rgba(168,85,247,.32)]

              ${
                scrolled
                  ? "scale-90"
                  : "scale-100"
              }
            `}
          />
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                group
                relative
                text-xs
                uppercase
                tracking-[0.28em]
                text-gray-300
                transition-colors
                duration-300
                hover:text-white
              "
            >
              {link.name}

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  w-0
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_10px_rgba(168,85,247,.8)]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}