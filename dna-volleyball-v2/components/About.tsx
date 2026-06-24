import { Activity, Target, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 uppercase tracking-[8px] text-purple-400">
            Our Philosophy
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            Develop. Train.
            <span className="block gradient-text">
              Evolve.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-gray-300">
            DNA Volleyball is built around long-term athlete evolution.
            Every session connects technical skill, purposeful training,
            and competitive mindset so athletes grow with confidence,
            discipline, and direction.
          </p>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          <div className="glass-card rounded-3xl p-10">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10">
              <Activity
                size={34}
                strokeWidth={1.6}
                className="text-purple-300"
              />
            </div>

            <p className="mb-3 text-sm uppercase tracking-[5px] text-purple-400">
              Develop
            </p>

            <h3 className="mb-5 text-3xl font-bold">
              Technical Mastery
            </h3>

            <p className="leading-8 text-gray-400">
              Build efficient movement, ball control, and foundational
              technique athletes can trust under pressure.
            </p>
          </div>

          <div className="glass-card rounded-3xl border-2 border-purple-500/70 p-10 shadow-[0_0_70px_rgba(168,85,247,0.18)]">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/40 bg-purple-500/15">
              <Target
                size={34}
                strokeWidth={1.6}
                className="text-purple-200"
              />
            </div>

            <p className="mb-3 text-sm uppercase tracking-[5px] text-purple-400">
              Train
            </p>

            <h3 className="mb-5 text-3xl font-bold text-purple-300">
              Purposeful Practice
            </h3>

            <p className="leading-8 text-gray-300">
              Every drill has intent. Athletes learn how to repeat,
              adjust, compete, and progress through structured coaching.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-10">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10">
              <Sparkles
                size={34}
                strokeWidth={1.6}
                className="text-purple-300"
              />
            </div>

            <p className="mb-3 text-sm uppercase tracking-[5px] text-purple-400">
              Evolve
            </p>

            <h3 className="mb-5 text-3xl font-bold">
              Competitive Growth
            </h3>

            <p className="leading-8 text-gray-400">
              Confidence, discipline, resilience, and decision-making are
              developed alongside volleyball skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}