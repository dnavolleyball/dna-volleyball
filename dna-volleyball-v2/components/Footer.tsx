import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020202]">
      {/* Safe Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/8 blur-[320px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 pt-20 pb-14">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-6 rounded-full bg-purple-500/28 blur-[95px]" />

            <Image
              src="/logo.png"
              alt="DNA Volleyball"
              width={1200}
              height={1200}
              priority
              className="
                relative
                h-auto
                w-[300px]
                md:w-[400px]
                lg:w-[480px]
                drop-shadow-[0_0_70px_rgba(168,85,247,.45)]
                transition-all
                duration-500
                hover:scale-[1.03]
              "
            />
          </div>

          <p className="mt-6 text-center text-sm uppercase tracking-[0.45em] text-gray-300 md:text-base">
            DEVELOP • TRAIN • EVOLVE
          </p>

          <p className="mt-4 max-w-2xl text-center text-base leading-8 text-gray-400 md:text-lg">
            Building athletes through purposeful training,
            long-term development, and a passion for volleyball.
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-9 flex flex-wrap justify-center gap-8 text-xs uppercase tracking-[0.25em] text-gray-400 md:gap-10">
          <a href="#hero" className="transition hover:text-purple-400">
            Home
          </a>

          <a href="#programs" className="transition hover:text-purple-400">
            Programs
          </a>

          <a href="#about" className="transition hover:text-purple-400">
            About
          </a>

          <a href="#founder" className="transition hover:text-purple-400">
            Founder
          </a>

          <a href="#contact" className="transition hover:text-purple-400">
            Contact
          </a>
        </nav>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-gray-500">
          Athlete registration and payment are completed securely through our
          official Communiti registration platform.
        </p>

        {/* Divider */}
        <div className="mx-auto mt-10 h-px max-w-4xl bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        {/* Bottom */}
        <div className="mt-7 flex flex-col items-center justify-between gap-4 text-center md:flex-row">
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