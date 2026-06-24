import { Mail, MapPin, Camera } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
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
            bg-purple-600/10
            blur-[190px]
          "
        />
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

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-gray-300">
          Whether your athlete is beginning their volleyball journey or
          preparing for the next competitive level, DNA Volleyball provides
          the environment, coaching, and development pathway to help them grow.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <a
            href="mailto:info@dnavolleyball.ca"
            className="btn-primary"
          >
            Contact DNA Volleyball
          </a>

          <a
            href="https://instagram.com/dnavolleyball"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Follow @dnavolleyball
          </a>

        </div>

        {/* Contact Details */}
        <div className="mx-auto mt-20 max-w-md space-y-8">

          {/* Email */}
          <div className="flex items-center justify-center gap-5">

            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-full
                border border-purple-500/40
                bg-purple-500/10
              "
            >
              <Mail
                size={24}
                strokeWidth={1.8}
                className="text-purple-300"
              />
            </div>

            <a
              href="mailto:info@dnavolleyball.ca"
              className="text-lg text-gray-200 hover:text-purple-300 transition"
            >
              info@dnavolleyball.ca
            </a>

          </div>

          <div className="mx-auto h-px w-16 bg-purple-500/30" />

          {/* Location */}
          <div className="flex items-center justify-center gap-5">

            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-full
                border border-purple-500/40
                bg-purple-500/10
              "
            >
              <MapPin
                size={24}
                strokeWidth={1.8}
                className="text-purple-300"
              />
            </div>

            <p className="text-lg text-gray-300">
              Durham Region, Ontario
            </p>

          </div>

          <div className="mx-auto h-px w-16 bg-purple-500/30" />

          {/* Instagram */}
          <div className="flex items-center justify-center gap-5">

            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-full
                border border-purple-500/40
                bg-purple-500/10
              "
            >
              <Camera
                size={24}
                strokeWidth={1.8}
                className="text-purple-300"
              />
            </div>

            <a
              href="https://instagram.com/dnavolleyball"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-purple-300 hover:text-purple-200 transition"
            >
              @dnavolleyball
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}