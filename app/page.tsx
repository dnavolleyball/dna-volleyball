import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navigation */}

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          <h1 className="text-2xl font-bold tracking-widest">
            <span className="text-purple-400">DNA</span> Volleyball
          </h1>

          <nav className="hidden md:flex gap-10 text-sm uppercase tracking-wider">
            <a href="#programs" className="hover:text-purple-400 transition">
              Programs
            </a>

            <a href="#about" className="hover:text-purple-400 transition">
              About
            </a>

            <a href="#founder" className="hover:text-purple-400 transition">
              Founder
            </a>

            <a href="#contact" className="hover:text-purple-400 transition">
              Contact
            </a>
          </nav>

        </div>
      </header>

      {/* Hero */}

      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black"></div>

        <div className="absolute w-[700px] h-[700px] rounded-full bg-purple-700/20 blur-[160px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center"></div>

          <div>

            <p className="uppercase tracking-[6px] text-purple-400 mb-6">
              THIS IS A TEST
            </p>

<h1 className="text-6xl lg:text-8xl font-black leading-[0.95]">

  From <span className="text-purple-400">NOVA</span>

  <br />

  to <span className="text-purple-400">APEX</span>

  <br />

  Build Your

  <br />

  <span className="text-purple-400">
    Volleyball DNA.
  </span>

</h1>

<p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">

Develop your Volleyball DNA through progressive coaching,
technical mastery, and competitive training designed for
athletes throughout Durham Region.

</p>

<div className="flex flex-col">

  <div className="flex gap-5 mt-16">
    <a
      href="#programs"
      className="bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-full font-semibold"
    >
      View Programs
    </a>

    <a
      href="#contact"
      className="border border-purple-500 px-8 py-4 rounded-full hover:bg-purple-500/20 transition"
    >
      Contact
    </a>
  </div>

  <div className="h-20 bg-red-500"></div>

  <div className="flex gap-14">
    <div>
      <h3 className="text-4xl font-black text-purple-400">200+</h3>
      <p className="text-gray-400">Athletes Trained</p>
    </div>

    <div>
      <h3 className="text-4xl font-black text-purple-400">5+</h3>
      <p className="text-gray-400">Years Coaching</p>
    </div>

    <div>
      <h3 className="text-4xl font-black text-purple-400">3</h3>
      <p className="text-gray-400">Development Programs</p>
    </div>
  </div>

</div>

          <div className="flex justify-center">

            <Image
              src="/founder.jpg"
              alt="Founder"
              width={550}
              height={650}
              className="rounded-3xl border border-purple-700 shadow-2xl"
            />

          </div>

        </div>

      </section>
            {/* Programs */}

      <section
        id="programs"
        className="py-24 px-8 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold mb-4">
            Training Programs
          </h2>

          <p className="text-gray-400 mb-16 max-w-2xl">
            Every athlete develops differently. DNA Volleyball offers
            training designed for beginners through elite competitors.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="rounded-3xl bg-black border border-purple-900 p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Private Lessons
              </h3>

              <p className="text-gray-300 leading-8">
                Personalized one-on-one coaching focused on technical
                development, confidence, and accelerated improvement.
              </p>
            </div>

            <div className="rounded-3xl bg-black border border-purple-900 p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Small Group Training
              </h3>

              <p className="text-gray-300 leading-8">
                Train with athletes of similar skill levels while receiving
                detailed coaching and game-like repetitions.
              </p>
            </div>

            <div className="rounded-3xl bg-black border border-purple-900 p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Team Clinics
              </h3>

              <p className="text-gray-300 leading-8">
                High-energy sessions focused on systems, communication,
                teamwork, and competitive performance.
              </p>
            </div>

          </div>

        </div>
      </section>
            {/* About */}

      <section
        id="about"
        className="py-24 px-8 bg-black"
      >
        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-purple-400 mb-5">
            Our Philosophy
          </p>

          <h2 className="text-5xl font-bold mb-10">
            More Than Volleyball
          </h2>

          <p className="text-xl text-gray-300 leading-10 max-w-4xl mx-auto">

            DNA Volleyball was founded on the belief that great athletes
            are built through purpose, discipline, and consistency—not
            shortcuts. Every training session is designed to improve
            technical skills while building confidence, leadership,
            resilience, and a competitive mindset that extends beyond
            the volleyball court.

          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            <div className="p-8 rounded-3xl border border-purple-900 bg-zinc-950">
              <div className="text-5xl mb-5">🏐</div>

              <h3 className="text-2xl font-bold mb-4">
                Technical Excellence
              </h3>

              <p className="text-gray-400">
                Build strong fundamentals that become automatic during competition.
              </p>

            </div>

            <div className="p-8 rounded-3xl border border-purple-900 bg-zinc-950">
              <div className="text-5xl mb-5">🧬</div>

              <h3 className="text-2xl font-bold mb-4">
                Athlete Development
              </h3>

              <p className="text-gray-400">
                Every player develops differently. Coaching is personalized to maximize growth.
              </p>

            </div>

            <div className="p-8 rounded-3xl border border-purple-900 bg-zinc-950">
              <div className="text-5xl mb-5">🏆</div>

              <h3 className="text-2xl font-bold mb-4">
                Competitive Mindset
              </h3>

              <p className="text-gray-400">
                Confidence, discipline, and leadership are trained alongside every volleyball skill.
              </p>

            </div>

          </div>

        </div>
      </section>
            {/* Founder */}

      <section
        id="founder"
        className="py-28 px-8 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div className="flex justify-center">

            <Image
              src="/founder.jpg"
              alt="Founder and Head Coach"
              width={500}
              height={600}
              className="rounded-3xl border border-purple-600 shadow-2xl"
            />

          </div>

          <div>

            <p className="uppercase tracking-[5px] text-purple-400 mb-4">
              Founder & Head Coach
            </p>

<div className="mb-8">
  <h2 className="text-5xl font-black">
    RJ Bernardino
  </h2>

  <p className="mt-3 text-lg uppercase tracking-[0.3em] text-purple-400">
    Founder • Head Coach • Athlete Development Specialist
  </p>
</div>

            <p className="text-gray-300 leading-9 text-lg mb-6">
              DNA Volleyball was created to help athletes unlock their
              potential through elite coaching, technical excellence,
              and a mindset built on confidence, discipline, and
              continuous growth.
            </p>

            <p className="text-gray-300 leading-9 text-lg mb-6">
              Every athlete has unique strengths. My coaching philosophy
              focuses on identifying those strengths, refining
              fundamentals, and helping players perform at their highest
              level both on and off the court.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="rounded-2xl bg-black border border-purple-900 p-6">
                <div className="text-4xl font-bold text-purple-400">
                  1-on-1
                </div>

                <p className="text-gray-400 mt-2">
                  Personalized Coaching
                </p>
              </div>

              <div className="rounded-2xl bg-black border border-purple-900 p-6">
                <div className="text-4xl font-bold text-purple-400">
                  Team
                </div>

                <p className="text-gray-400 mt-2">
                  Clinics & Development
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}