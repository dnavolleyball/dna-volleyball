export default function BackgroundDNA() {
  return (
    <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
      {/* Left DNA */}
      <div className="absolute left-0 top-0 h-full w-[760px] opacity-45">
        <div
          className="absolute inset-0 bg-left bg-repeat-y"
          style={{
            backgroundImage: "url('/dna-background.png')",
            backgroundSize: "760px auto",
          }}
        />
      </div>

      {/* Right DNA */}
      <div className="absolute right-0 top-0 h-full w-[760px] opacity-45">
        <div
          className="absolute inset-0 bg-right bg-repeat-y"
          style={{
            backgroundImage: "url('/dna-background.png')",
            backgroundSize: "760px auto",
          }}
        />
      </div>
    </div>
  );
}