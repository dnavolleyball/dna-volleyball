export default function BackgroundEffects() {
  return (
    <>
      {/* Purple Atmosphere */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          -z-[19]
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[1400px]
            w-[1400px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-700/10
            blur-[260px]
            animate-atmosphere
          "
        />

        <div
          className="
            absolute
            right-[-10%]
            top-[20%]
            h-[800px]
            w-[800px]
            rounded-full
            bg-fuchsia-600/10
            blur-[220px]
            animate-atmosphere-slow
          "
        />

        <div
          className="
            absolute
            left-[-10%]
            bottom-[10%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-violet-600/10
            blur-[220px]
            animate-atmosphere
          "
        />
      </div>

      {/* Floating Dust */}
      <div className="floating-dust pointer-events-none fixed inset-0 -z-[18]" />
    </>
  );
}