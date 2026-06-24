import Image from "next/image";
import { Activity, Target, Sparkles } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <div className="relative max-w-[460px]">
            <div className="absolute -inset-6 rounded-3xl bg-purple-600/10 blur-[90px]" />

            <div className="relative rounded-[2rem] border border-purple-500/40 bg-white/[0.02] p-3 shadow-[0_0_50px_rgba(168,85,247,0.18)]">
              <Image
                src="/founder.jpg"
                alt="RJ Bernardino"
                width={460}
                height={600}
                priority
                className="rounded-[1.5rem] object-cover float-slow"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mb-4 uppercase tracking-[8px] text-purple-400">
            Meet Your Coach
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            RJ
            <span className="block gradient-text">Bernardino</span>
          </h2>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
            Founder • Head Coach • Athlete Development Specialist
          </p>

          <div className="mt-8 space-y-5 text-lg leading-8 text-gray-300">
            <p>
              After years of working with young athletes, I developed a deep
              appreciation for what volleyball can teach beyond the game itself.
              The sport creates opportunities to build confidence, discipline,
              resilience, leadership, and a lifelong love of learning.
            </p>

            <p>
              DNA Volleyball was created to provide a development-focused
              environment where athletes can progress at their own pace,
              strengthen their technical foundation, and gain the confidence to
              compete. Success is important, but lasting growth happens when
              athletes genuinely understand the game, enjoy the process, and
              continue striving to improve long after the final point is played.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-purple-500/20 bg-white/[0.03] p-5">
              <Activity
                size={26}
                strokeWidth={1.6}
                className="mb-4 text-purple-300"
              />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">
                Develop
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Build strong fundamentals.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-500/30 bg-purple-500/[0.06] p-5">
              <Target
                size={26}
                strokeWidth={1.6}
                className="mb-4 text-purple-200"
              />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-200">
                Train
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                Practice with purpose.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-500/20 bg-white/[0.03] p-5">
              <Sparkles
                size={26}
                strokeWidth={1.6}
                className="mb-4 text-purple-300"
              />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">
                Evolve
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Grow through challenge.
              </p>
            </div>
          </div>


          <div className="glass-card mt-8 rounded-3xl p-7">
            <p className="text-2xl italic leading-relaxed text-gray-100">
              Great athletes aren't defined by wins alone. They're defined by
              their commitment to learn, grow, and improve every day.
            </p>

            <p className="mt-5 text-lg font-semibold text-purple-400">
              — RJ Bernardino
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}