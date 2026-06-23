export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <a
          href="#hero"
          className="text-2xl font-black tracking-widest"
        >
          <span className="text-purple-400">DNA</span> Volleyball
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em]">

          <a
            href="#programs"
            className="hover:text-purple-400 transition"
          >
            Programs
          </a>

          <a
            href="#about"
            className="hover:text-purple-400 transition"
          >
            About
          </a>

          <a
            href="#founder"
            className="hover:text-purple-400 transition"
          >
            Founder
          </a>

          <a
            href="#contact"
            className="hover:text-purple-400 transition"
          >
            Contact
          </a>

        </nav>

      </div>
    </header>
  );
}