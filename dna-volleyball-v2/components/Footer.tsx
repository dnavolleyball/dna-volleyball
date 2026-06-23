export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-purple-900/30 bg-zinc-950">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-700/10 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 py-12 md:flex-row">

        {/* Logo */}

        <div>

          <h2 className="text-3xl font-black tracking-tight">

            <span className="gradient-text">
              DNA
            </span>{" "}

            Volleyball

          </h2>

          <p className="mt-2 text-sm tracking-[0.3em] uppercase text-gray-500">
            Develop Your Volleyball DNA
          </p>

        </div>

        {/* Navigation */}

        <nav className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-[0.2em] text-gray-400">

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

        {/* Copyright */}

        <div className="text-center md:text-right">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} DNA Volleyball
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-600">
            All Rights Reserved
          </p>

        </div>

      </div>

    </footer>
  );
}