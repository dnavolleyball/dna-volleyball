import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { Activity, Zap, Trophy } from "lucide-react";

const programs = [
  {
    icon: Activity,
    level: "Beginner",
    name: "DNA Nova",
    price: "$30",
    ages: "Ages 8–14",
    experience: "Little or no volleyball experience.",
    description:
      "The first stage of the DNA Athlete Pathway, focused on developing movement quality, coordination, confidence, and the core volleyball fundamentals that prepare athletes for future success.",
    skills: [
      "Passing fundamentals",
      "Setting & volleying",
      "Serving basics",
      "Hitting introduction",
      "Footwork & movement",
    ],
  },
  {
    icon: Zap,
    level: "Intermediate",
    name: "DNA Helix",
    price: "$30",
    ages: "Ages 12–14",
    experience: "School volleyball or beginner REP/Club experience.",
    description:
      "Structured development phase focused on performance growth and competitive readiness.",
    skills: [
      "Advanced ball control",
      "Offensive systems",
      "Defensive reading",
      "Game situations",
      "Competitive training",
    ],
    featured: true,
  },
  {
    icon: Trophy,
    level: "Advanced",
    name: "DNA Apex",
    price: "$30",
    ages: "Ages 13–15",
    experience: "REP/Club volleyball experience.",
    description:
      "Elite performance stage focused on position-specific development, match preparation, and peak output.",
    skills: [
      "High performance training",
      "Position-specific skills",
      "Tactical decision making",
      "Match preparation",
      "Elite competitive mindset",
    ],
  },
];

export default function Programs() {
  return (
    <Section id="programs" className="pt-0 md:pt-4">
      <SectionHeader
        title="Athlete Evolution Pathway"
        subtitle="From foundation to elite performance — structured progression built within a unified athlete development system."
      />

      <div className="mt-10 flex justify-center">
        <div className="inline-flex items-center gap-4 rounded-full border border-purple-500/25 bg-purple-500/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.25em] text-purple-300">
          <span>NOVA</span>
          <span className="text-purple-500">→</span>
          <span>HELIX</span>
          <span className="text-purple-500">→</span>
          <span>APEX</span>
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {programs.map((program) => {
          const Icon = program.icon;

          return (
            <div
              key={program.name}
              className={`
                relative overflow-hidden rounded-[2rem] border p-8
                transition duration-500 hover:-translate-y-2
                ${
                  program.featured
                    ? "border-purple-400/70 bg-purple-500/[0.11] shadow-[0_0_70px_rgba(168,85,247,0.18)]"
                    : "border-purple-500/25 bg-white/[0.025] hover:border-purple-400/50 hover:bg-purple-500/[0.055]"
                }
              `}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-70" />

              {program.featured && (
                <div className="relative mb-5 inline-flex rounded-full bg-purple-500 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_0_25px_rgba(168,85,247,0.55)]">
                  Most Popular
                </div>
              )}

              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.4em] text-purple-300">
                    {program.level}
                  </p>

                  <h3 className="mt-5 text-4xl font-black uppercase tracking-tight text-white">
                    {program.name}
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-200">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
              </div>

              <div className="relative mt-6 rounded-2xl border border-purple-500/20 bg-black/25 px-5 py-4">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                  Starting at
                </p>

                <div className="mt-1 flex items-end gap-2">
                  <span className="text-4xl font-black text-purple-300">
                    {program.price}
                  </span>

                  <span className="pb-1 text-sm text-gray-400">
                    per athlete / session
                  </span>
                </div>
              </div>

              <div className="relative mt-6 space-y-3">
                <p className="text-base font-semibold text-gray-200">
                  {program.ages}
                </p>

                <p className="text-base leading-7 text-gray-400">
                  {program.experience}
                </p>

                <p className="text-base leading-7 text-gray-400">
                  {program.description}
                </p>
              </div>

              <div className="relative mt-7 h-px w-full bg-gradient-to-r from-purple-500/40 via-purple-500/10 to-transparent" />

              <ul className="relative mt-7 space-y-4">
                {program.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-3 text-base text-gray-200"
                  >
                    <span className="mt-1 text-purple-300">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] border border-purple-500/25 bg-white/[0.025] px-6 py-10 text-center shadow-[0_0_60px_rgba(168,85,247,0.08)] sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5" />

        <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[90px]" />

        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-purple-300">
            Customized Training
          </p>

          <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Looking for Something Different?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-400">
            Whether you&apos;re a school team, club team, small group, or
            individual athlete looking to improve a specific skill, DNA
            Volleyball offers customized training experiences tailored to your
            goals.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-purple-500/30 bg-purple-500/[0.06] px-5 py-2.5 text-sm font-medium text-purple-200">
              Private Group Training
            </span>

            <span className="rounded-full border border-purple-500/30 bg-purple-500/[0.06] px-5 py-2.5 text-sm font-medium text-purple-200">
              Team Training
            </span>

            <span className="rounded-full border border-purple-500/30 bg-purple-500/[0.06] px-5 py-2.5 text-sm font-medium text-purple-200">
              Position-Specific Skill Clinics
            </span>
          </div>

          <a
            href="mailto:info@dnavolleyball.ca?subject=Customized%20Training%20Inquiry"
            className="btn-secondary mt-8 inline-flex"
          >
            Email Us to Learn More
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-3xl text-center">
        <p className="text-sm leading-7 text-gray-500">
          Pricing starts at{" "}
          <span className="font-semibold text-gray-300">
            $30 per athlete / session
          </span>
          . Session availability, locations, and registration are managed
          through our official Communiti page. Pricing may vary for specialty
          clinics or events.
        </p>

        <a
          href="https://book.communiti.app/dnavolleyball"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8 inline-flex"
        >
          View Upcoming Sessions
        </a>
      </div>
    </Section>
  );
}