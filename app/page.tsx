export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, rgba(139,92,246,.25), transparent 35%), #050505",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <p
          style={{
            color: "#8B5CF6",
            fontSize: "14px",
            letterSpacing: "3px",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          Durham Region • Ages 12–15 • All Levels
        </p>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: 1,
            fontWeight: 800,
            marginBottom: "30px",
          }}
        >
          From NOVA to
          <br />
          APEX:
          <br />
          <span style={{ color: "#8B5CF6" }}>Build Your Volleyball DNA.</span>
        </h1>

        <p
          style={{
            maxWidth: "650px",
            color: "#b3b3b3",
            fontSize: "22px",
            lineHeight: 1.8,
          }}
        >
          Where the next generation of Durham Region athletes discover their
          potential, strengthen their skills, and reach peak performance.
        </p>

        <button
          style={{
            marginTop: "45px",
            padding: "18px 34px",
            background: "#8B5CF6",
            color: "white",
            border: "none",
            borderRadius: "999px",
            fontSize: "18px",
            fontWeight: 700,
          }}
        >
          View Programs
        </button>
      </div>
    </main>
  );
}