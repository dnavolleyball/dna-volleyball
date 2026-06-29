import Image from "next/image";
import InteractiveImage from "@/components/ui/InteractiveImage";
import StatCard from "@/components/ui/StatCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            right-[8%]
            top-[32%]
            h-[900px]
            w-[900px]
            rounded-full
            bg-purple-500/10
            blur-[260px]
            animate-atmosphere
          "
        />

        <div
          className="
            absolute
            right-[18%]
            top-[42%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-violet-400/10
            blur-[180px]
          "
        />
      </div>

      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pt-28 md:px-8 md:pt-0 xl:px-16">
        <div className="relative z-20 w-full lg:w-[45%]">
          <p className="mb-6 h-6 uppercase tracking-[8px] text-purple-400 md:h-auto">
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
              href="https://book.communiti.app/dnavolleyball"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Upcoming Sessions
            </a>

            <a href="#programs" className="btn-secondary">
              View Programs
            </a>
          </div>

          <div className="mt-20 grid max-w-xl grid-cols-3 gap-10">
            <StatCard value="200+" label="Athletes Developed" />
            <StatCard value="5+" label="Years Coaching" />
            <StatCard value="3" label="Development Programs" />
          </div>
        </div>

        <div className="relative hidden lg:flex w-[55%] items-center justify-center overflow-visible">
          <span className="hero-particle hero-particle-1"></span>
          <span className="hero-particle hero-particle-2"></span>
          <span className="hero-particle hero-particle-3"></span>
          <span className="hero-particle hero-particle-4"></span>
          <span className="hero-particle hero-particle-5"></span>
          <span className="hero-particle hero-particle-6"></span>

          <InteractiveImage>
            <Image
              src="/heroimage.png"
              alt="DNA Volleyball Development"
              width={1100}
              height={1100}
              priority
              className="
                relative
                z-10
                w-full
                max-w-[950px]
                h-auto
                object-contain
                float-slow
                select-none
                drop-shadow-[0_0_60px_rgba(168,85,247,.25)]
              "
            />
          </InteractiveImage>
        </div>
      </div>
    </section>
  );
}