import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { Activity, Zap, Trophy } from "lucide-react";

export default function Programs() {
  return (
    <Section id="programs">
      <SectionHeader
        title="Athlete Evolution Pathway"
        subtitle="From foundation to elite performance — structured progression built within a unified performance system."
      />

      <div className="relative mt-16">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
          <div className="absolute inset-0 w-px bg-gradient-to-b from-purple-400/60 via-violet-500/25 to-transparent" />
          <div className="absolute inset-0 w-px translate-x-[6px] bg-gradient-to-b from-transparent via-purple-300/10 to-transparent opacity-30" />
        </div>

        <div className="relative flex items-center mb-28">
          <div className="w-1/2 pr-12 text-right">
            <h3 className="text-2xl font-bold text-purple-300 tracking-wide">
              NOVA
            </h3>
            <p className="text-white/70 mt-2">
              Foundation stage focused on movement quality, coordination, and athletic awareness.
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-purple-500/30 border border-purple-400/60 flex items-center justify-center">
            <Activity className="w-5 h-5 text-purple-200" />
          </div>

          <div className="w-1/2" />
        </div>

        <div className="relative flex items-center mb-28">
          <div className="w-1/2" />

          <div className="w-10 h-10 rounded-full bg-violet-500/30 border border-violet-400/60 flex items-center justify-center">
            <Zap className="w-5 h-5 text-violet-200" />
          </div>

          <div className="w-1/2 pl-12">
            <h3 className="text-2xl font-bold text-violet-300 tracking-wide">
              HELIX
            </h3>
            <p className="text-white/70 mt-2">
              Structured development phase focused on performance growth and competitive readiness.
            </p>
          </div>
        </div>

        <div className="relative flex items-center mb-10">
          <div className="w-1/2 pr-12 text-right">
            <h3 className="text-2xl font-bold text-white tracking-wide">
              APEX
            </h3>
            <p className="text-white/70 mt-2">
              Elite performance stage focused on domination and peak output.
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-white" />
          </div>

          <div className="w-1/2" />
        </div>
      </div>
    </Section>
  );
}