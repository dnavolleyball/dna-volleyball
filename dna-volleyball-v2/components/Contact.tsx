export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Section Overlay */}
      

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-700/10
            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">

        {/* Heading */}

        <p className="mb-4 uppercase tracking-[8px] text-purple-400">
          Contact
        </p>

        <h2 className="text-5xl font-black md:text-6xl">
          Start Your
          <span className="block gradient-text">
            Volleyball Journey
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
          Whether your athlete is taking their first step into volleyball
          or preparing for the next competitive level, we'd love to help
          find the right development pathway.
        </p>

        {/* Contact Card */}

        <div className="glass-card mt-20 rounded-[32px] p-12">

          <h3 className="text-3xl font-bold">
            Ready to Unlock Your Athlete's DNA?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Follow us on Instagram for training updates, program
            announcements, athlete highlights, or reach out directly
            to learn more about our athlete development programs.
          </p>

          {/* Button */}

          <div className="mt-10 flex justify-center">

            <a
              href="https://instagram.com/dnavolleyball"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow @dnavolleyball
            </a>

          </div>

          {/* Divider */}

          <div className="mx-auto mt-14 h-px w-28 bg-purple-700" />

          {/* Contact Info */}

          <div className="mt-14 grid gap-10 md:grid-cols-2">

            <div>

              <div className="text-4xl">
                📧
              </div>

              <h4 className="mt-4 text-xl font-bold">
                Email
              </h4>

              <p className="mt-3 text-gray-400">
                info@dnavolleyball.ca
              </p>

            </div>

            <div>

              <div className="text-4xl">
                📍
              </div>

              <h4 className="mt-4 text-xl font-bold">
                Location
              </h4>

              <p className="mt-3 text-gray-400">
                Durham Region, Ontario
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}