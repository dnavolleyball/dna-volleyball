export default function BackgroundDNA() {
  return (
    <>
      {/* Left DNA */}
      <div
        className="
          fixed
          top-0
          left-0
          h-full
          w-[500px]
          pointer-events-none
          -z-10
          opacity-20
          dna-left
        "
      >
        <div
          className="absolute inset-0 bg-left bg-repeat-y"
          style={{
            backgroundImage: "url('/dna-background.png')",
            backgroundSize: "500px auto",
          }}
        />
      </div>

      {/* Right DNA */}
      <div
        className="
          fixed
          top-0
          right-0
          h-full
          w-[500px]
          pointer-events-none
          -z-10
          opacity-20
          dna-right
        "
      >
        <div
          className="absolute inset-0 bg-right bg-repeat-y"
          style={{
            backgroundImage: "url('/dna-background.png')",
            backgroundSize: "500px auto",
          }}
        />
      </div>
    </>
  );
}