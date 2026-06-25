import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-purple-900/30 bg-zinc-950">

      {/* Ambient Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-700/15 blur-[160px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-16">

        {/* Logo */}

        <div className="flex flex-col items-center">

          <Image
            src="/logo.png"
            alt="DNA Volleyball"
            width={1200}
            height={1200}
            priority
            className="
              w-[320px]
              md:w-[420px]
              lg:w-[500px]
              h-auto
              drop-shadow-[0_0_80px_rgba(168,85,247,.55)]
              transition-all
              duration-500
              hover:scale-105
            "
          />

          <p className="mt-3 text-sm md:text-base uppercase tracking-[0.45em] text-gray-300 text-center">
            DEVELOP • TRAIN • EVOLVE
          </p>

          <p className="mt-4 max-w-2xl text-center text-base md:text-lg leading-8 text-gray-400">
            Building athletes through purposeful training,
            long-term development, and a passion for volleyball.
          </p>

        </div>

        {/* Navigation */}

        <nav className="mt-12 flex flex-wrap justify-center gap-8 md:gap-10 text-xs uppercase tracking-[0.25em] text-gray-400">

          <a
            href="#hero"
            className="transition hover:text-purple-400"
          >
            Home
          </a>

          <a
            href="#programs"
            className="transition hover:text-purple-400"
          >
            Programs
          </a>

          <a
            href="#about"
            className="transition hover:text-purple-400"
          >
            About
          </a>

          <a
            href="#founder"
            className="transition hover:text-purple-400"
          >
            Founder
          </a>

          <a
            href="#contact"
            className="transition hover:text-purple-400"
          >
            Contact
          </a>

        </nav>

        {/* Divider */}

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        {/* Bottom */}

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} DNA Volleyball. All Rights Reserved.
          </p>

          <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
            Durham Region • Ontario • Canada
          </p>

        </div>

      </div>

    </footer>
  );
}