import { Mail, MapPin, Camera } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden pt-28 pb-16">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[42%] h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[190px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#020202]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
        <p className="mb-4 uppercase tracking-[8px] text-purple-400">
          Start Your Journey
        </p>

        <h2 className="text-5xl font-black leading-tight md:text-7xl">
          Ready to Unlock
          <span className="block gradient-text">
            Your Volleyball DNA?
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-300 md:text-xl">
          Whether your athlete is beginning their volleyball journey or
          preparing for the next competitive level, DNA Volleyball provides
          the environment, coaching, and development pathway to help them grow.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
  href="https://book.communiti.app/dnavolleyball"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
>
  View Upcoming Sessions
</a>

          <a
            href="https://www.instagram.com/dnavolleyballca/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Follow @dnavolleyballca
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">
          <a
            href="mailto:info@dnavolleyball.ca"
            className="group rounded-3xl border border-purple-500/20 bg-white/[0.025] px-6 py-8 backdrop-blur-sm transition hover:border-purple-400/50 hover:bg-purple-500/[0.06]"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 transition group-hover:bg-purple-500/20">
              <Mail size={24} strokeWidth={1.8} className="text-purple-300" />
            </div>

            <h3 className="text-sm font-bold uppercase tracking-[5px] text-purple-300">
              Email
            </h3>

            <p className="mt-4 text-base text-gray-300 transition group-hover:text-white">
              info@dnavolleyball.ca
            </p>
          </a>

          <div className="rounded-3xl border border-purple-500/20 bg-white/[0.025] px-6 py-8 backdrop-blur-sm">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10">
              <MapPin size={24} strokeWidth={1.8} className="text-purple-300" />
            </div>

            <h3 className="text-sm font-bold uppercase tracking-[5px] text-purple-300">
              Location
            </h3>

            <p className="mt-4 text-base text-gray-300">
              Durham Region, Ontario
            </p>
          </div>

          <a
            href="https://instagram.com/dnavolleyballca"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-purple-500/20 bg-white/[0.025] px-6 py-8 backdrop-blur-sm transition hover:border-purple-400/50 hover:bg-purple-500/[0.06]"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 transition group-hover:bg-purple-500/20">
              <Camera size={24} strokeWidth={1.8} className="text-purple-300" />
            </div>

            <h3 className="text-sm font-bold uppercase tracking-[5px] text-purple-300">
              Instagram
            </h3>

            <p className="mt-4 text-base font-semibold text-purple-300 transition group-hover:text-purple-200">
              @dnavolleyballca
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}