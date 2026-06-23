import Image from "next/image";

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden py-32"
    >
      {/* Section Overlay */}
      

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            right-0
            top-1/2
            h-[700px]
            w-[700px]
            -translate-y-1/2
            rounded-full
            bg-purple-700/10
            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-24 px-8 lg:grid-cols-2">

        {/* Image */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Image Glow */}
            <div className="absolute -inset-8 rounded-full bg-purple-600/20 blur-[100px]" />

            <Image
              src="/founder.jpg"
              alt="RJ Bernardino"
              width={520}
              height={680}
              priority
              className="
                relative
                rounded-3xl
                border
                border-purple-500
                shadow-[0_0_60px_rgba(147,51,234,0.35)]
                float-slow
              "
            />

          </div>

        </div>

        {/* Content */}
        <div>

          <p className="mb-4 uppercase tracking-[8px] text-purple-400">
            Meet Your Coach
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            RJ
            <span className="block gradient-text">
              Bernardino
            </span>
          </h2>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
            Founder • Head Coach • Athlete Development Specialist
          </p>

          <div className="mt-10 space-y-7 text-lg leading-9 text-gray-300">

            <p>
              DNA Volleyball was founded to help young athletes unlock
              their potential through elite coaching, technical
              excellence, and purposeful athlete development.
            </p>

            <p>
              Every session is carefully designed to develop confidence,
              discipline, leadership, and the technical skills required
              to compete at the next level.
            </p>

            <p>
              My mission is simple: create an environment where athletes
              are challenged, supported, and inspired to become the best
              version of themselves—both on and off the court.
            </p>

          </div>

          {/* Quote */}
          <div className="glass-card mt-12 rounded-3xl p-8">

            <div className="mb-5 text-5xl text-purple-400">
              "
            </div>

            <p className="text-2xl italic leading-relaxed text-gray-100">
              Great athletes aren't born—they're developed through
              purpose, discipline, and consistent training.
            </p>

            <p className="mt-6 text-lg font-semibold text-purple-400">
              — RJ Bernardino
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}