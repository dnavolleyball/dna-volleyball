import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Dark Overlay (matches other sections) */}
     

      {/* Hero Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            left-[68%]
            top-1/2
            h-[900px]
            w-[900px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-700/15
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            left-[40%]
            top-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-500/10
            blur-[160px]
          "
        />

        {/* Bottom Fade Into Programs */}
        

      </div>

      {/* Main Layout */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-8">

        {/* LEFT */}
        <div className="w-full lg:w-[52%]">

          <p className="mb-6 uppercase tracking-[8px] text-purple-400">
            Volleyball Development
          </p>

          <h1 className="text-6xl font-black leading-[0.9] md:text-7xl xl:text-8xl">
            Unlock Your
            <br />
            <span className="gradient-text">
              Volleyball DNA.
            </span>
          </h1>

          <p className="mt-8 text-3xl font-light text-purple-300">
            From NOVA to APEX
          </p>

          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">
            Develop your Volleyball DNA through progressive coaching,
            technical mastery, and competitive training designed for
            athletes ages 12–15 throughout Durham Region.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">

            <a
              href="#programs"
              className="btn-primary"
            >
              View Programs
            </a>

            <a
              href="#contact"
              className="btn-secondary"
            >
              Contact
            </a>

          </div>

          <div className="mt-20 grid max-w-xl grid-cols-3 gap-10">

            <div>
              <h3 className="text-5xl font-black text-purple-400">
                200+
              </h3>

              <p className="mt-2 text-gray-400">
                Athletes Developed
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-purple-400">
                5+
              </h3>

              <p className="mt-2 text-gray-400">
                Years Coaching
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-purple-400">
                3
              </h3>

              <p className="mt-2 text-gray-400">
                Development Programs
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative hidden lg:flex w-[48%] justify-end">

          {/* Founder Glow */}
          <div
            className="
              absolute
              right-10
              top-1/2
              h-[620px]
              w-[620px]
              -translate-y-1/2
              rounded-full
              bg-purple-600/20
              blur-[140px]
              pulse-glow
            "
          />

          {/* Founder */}
          <Image
            src="/founder.jpg"
            alt="RJ Bernardino"
            width={560}
            height={700}
            priority
            className="
              relative
              z-10
              rounded-3xl
              border
              border-purple-700
              shadow-2xl
              float-slow
            "
          />

        </div>

      </div>
    </section>
  );
}