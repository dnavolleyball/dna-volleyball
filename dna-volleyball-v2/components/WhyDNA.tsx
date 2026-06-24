import { MapPin, Sparkles, GraduationCap } from "lucide-react";

export default function WhyDNA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
        <p className="mb-4 uppercase tracking-[8px] text-purple-400">
          Why DNA?
        </p>

        <h2 className="text-5xl font-black md:text-6xl">
          Durham. Nova.
          <span className="block gradient-text">
            Academy.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-gray-300">
          DNA Volleyball is more than a name. It represents our community,
          our belief in new beginnings, and our commitment to long-term
          athlete development.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="glass-card rounded-3xl p-8 text-left">
            <MapPin
              size={36}
              strokeWidth={1.6}
              className="mb-6 text-purple-300"
            />

            <h3 className="mb-4 text-2xl font-bold">
              Durham
            </h3>

            <p className="leading-8 text-gray-400">
              Durham represents our home community in Ontario and the athletes
              we are proud to develop, support, and serve.
            </p>
          </div>

          <div className="glass-card rounded-3xl border-2 border-purple-500/60 p-8 text-left shadow-[0_0_70px_rgba(168,85,247,0.18)]">
            <Sparkles
              size={36}
              strokeWidth={1.6}
              className="mb-6 text-purple-200"
            />

            <h3 className="mb-4 text-2xl font-bold text-purple-300">
              Nova
            </h3>

            <p className="leading-8 text-gray-300">
              Nova represents the birth of a star — the beginning of an
              athlete's journey, growth, confidence, and potential.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 text-left">
            <GraduationCap
              size={36}
              strokeWidth={1.6}
              className="mb-6 text-purple-300"
            />

            <h3 className="mb-4 text-2xl font-bold">
              Academy
            </h3>

            <p className="leading-8 text-gray-400">
              Academy reflects a place to learn, train, and evolve through
              purposeful coaching, technical mastery, and long-term development.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-16 max-w-4xl text-2xl font-semibold leading-10 text-white">
          Every athlete has the potential to develop, train, evolve, and become
          something greater through purposeful coaching.
        </p>
      </div>
    </section>
  );
}