import {
  Trophy,
  Dna,
  Medal,
} from "lucide-react";
export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Section Overlay */}
      

      {/* Local Purple Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-700/10
            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        {/* Section Header */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 uppercase tracking-[8px] text-purple-400">
            Our Philosophy
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            Develop More Than
            <span className="block gradient-text">
              Volleyball Skills
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-gray-300">
            DNA Volleyball believes athlete development extends beyond
            technical ability. Every session is intentionally designed to
            build confidence, discipline, leadership, resilience, and
            decision-making—creating athletes who perform under pressure
            both on and off the court.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          {/* Card 1 */}

          <div className="glass-card rounded-3xl p-10">

            <div className="mb-6 text-6xl">
              <Trophy
  size={56}
  strokeWidth={1.6}
  className="text-purple-400"
/>
            </div>

            <h3 className="mb-5 text-3xl font-bold">
              Technical Excellence
            </h3>

            <p className="leading-8 text-gray-400">
              Build a foundation of efficient movement, ball control,
              and technical consistency that athletes can trust in
              competition.
            </p>

          </div>

          {/* Card 2 */}

          <div className="glass-card rounded-3xl border-2 border-purple-500 p-10">

            <div className="mb-6 text-6xl">
              🧬
            </div>

            <h3 className="mb-5 text-3xl font-bold text-purple-300">
              Athlete Development
            </h3>

            <p className="leading-8 text-gray-300">
              Every athlete develops differently. Our pathway focuses on
              long-term growth by combining technical coaching,
              confidence, and personalized progression.
            </p>

          </div>

          {/* Card 3 */}

          <div className="glass-card rounded-3xl p-10">

            <div className="mb-6 text-6xl">
              🏆
            </div>

            <h3 className="mb-5 text-3xl font-bold">
              Competitive Mindset
            </h3>

            <p className="leading-8 text-gray-400">
              Leadership, resilience, discipline, and confidence are
              developed alongside volleyball skills to prepare athletes
              for competition and life.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}