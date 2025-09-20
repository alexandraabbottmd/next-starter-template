export const metadata = {
  title: "About Dr. Abbott | Abbott Sport Performance",
  description: "Meet Dr. Alexandra Abbott, sports medicine physician and founder of Abbott Sport Performance.",
};

export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "4rem 2rem",
        fontFamily: "sans-serif",
        color: "white",
        backgroundColor: "black",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
        About Dr. Abbott
      </h1>

      <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
        Dr. Alexandra Abbott is a board-certified pediatric sports medicine
        physician dedicated to helping athletes of all levels recover from
        injury, prevent future setbacks, and reach their peak performance.
      </p>

      <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
        Her approach combines evidence-based exercise prescription,
        individualized rehab planning, and sports nutrition guidance. With a
        concierge-style model, patients receive direct access to physician-led
        expertise tailored to their unique goals.
      </p>

      <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
        Dr. Abbott’s philosophy: every athlete deserves care that is
        comprehensive, ethical, and personalized. Whether you’re returning from
        injury or looking to push performance boundaries, Abbott Sport
        Performance provides the tools and guidance to help you succeed.
      </p>

      <div style={{ marginTop: "2.5rem" }}>
        <a
          href="/services/rehab"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "white",
            color: "black",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Explore Services →
        </a>
      </div>
    </main>
  );
}
