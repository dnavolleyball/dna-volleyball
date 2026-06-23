import {
  Trophy,
  Dna,
  Medal,
} from "lucide-react";
export default function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden py-32"
    >
      {/* Section Overlay */}
      

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[6px] text-purple-400">
            Athlete Pathway
          </p>

          <h2 className="mb-6 text-5xl font-black">
            Your Athlete Development Pathway
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-9 text-gray-400">
            Every athlete begins their journey at a different stage. Our
            progressive training pathway develops confident volleyball players
            from foundational skills to high-performance competition.
          </p>
        </div>

        {/* Pathway */}
        <div className="mb-16 flex items-center justify-center gap-4 text-lg font-semibold text-purple-400">
          <span>NOVA</span>
          <span>→</span>
          <span>HELIX</span>
          <span>→</span>
          <span>APEX</span>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* NOVA */}
          <div className="glass-card rounded-3xl p-10">
            <div className="mb-3 text-sm uppercase tracking-[4px] text-purple-400">
              Beginner
            </div>

            <h3 className="mb-4 text-4xl font-black">
              DNA NOVA
            </h3>

            <p className="mb-8 leading-8 text-gray-400">
              Ages 12–14 with little or no volleyball experience.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>✓ Passing Fundamentals</li>
              <li>✓ Setting &amp; Volleying</li>
              <li>✓ Serving Basics</li>
              <li>✓ Hitting Introduction</li>
              <li>✓ Footwork &amp; Movement</li>
            </ul>
          </div>

          {/* HELIX */}
          <div className="glass-card rounded-3xl border-2 border-purple-500 p-10">
            <div className="mb-6 flex items-center justify-between">
              <div className="text-sm uppercase tracking-[4px] text-purple-400">
                Intermediate
              </div>

              <div className="rounded-full bg-purple-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                Coach's Pick
              </div>
            </div>

            <h3 className="mb-4 text-4xl font-black">
              DNA HELIX
            </h3>

            <p className="mb-8 leading-8 text-gray-400">
              Ages 12–14 with school volleyball or beginner REP/Club
              experience.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>✓ Advanced Ball Control</li>
              <li>✓ Offensive Systems</li>
              <li>✓ Defensive Reading</li>
              <li>✓ Game Situations</li>
              <li>✓ Competitive Training</li>
            </ul>
          </div>

          {/* APEX */}
          <div className="glass-card rounded-3xl p-10">
            <div className="mb-3 text-sm uppercase tracking-[4px] text-purple-400">
              Advanced
            </div>

            <h3 className="mb-4 text-4xl font-black">
              DNA APEX
            </h3>

            <p className="mb-8 leading-8 text-gray-400">
              Ages 13–15 with REP/Club volleyball experience.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>✓ High Performance Training</li>
              <li>✓ Position-Specific Skills</li>
              <li>✓ Tactical Decision Making</li>
              <li>✓ Match Preparation</li>
              <li>✓ Elite Competitive Mindset</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}