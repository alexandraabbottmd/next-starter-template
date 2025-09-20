export const metadata = {
  title: "About Dr. Abbott | Abbott Sport Performance",
  description: "Learn about Dr. Alexandra Abbott’s background, her approach to sports medicine, and her philosophy in athlete development.",
};

export default function AboutPage() {
  return (
    <main
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "sans-serif",
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Hero intro section */}
      <section style={{ marginBottom: "3rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1rem" }}>
          Get to Know Dr. Alexandra Abbott
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.6 }}>
          I’m a sports medicine physician dedicated to helping athletes recover, prevent injury, and achieve their peak performance. My practice combines evidence-based rehabilitation, sport-specific training, and personalized care to support your goals.
        </p>
      </section>

      {/* Profile / Bio */}
      <section style={{ marginBottom: "2rem" }}>
        {/* Optional image placeholder */}
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "#333",
            borderRadius: "100px",
            marginBottom: "1.5rem",
          }}
        >
          {/* Replace with actual photo later */}
        </div>
        <p style={{ marginBottom: "1.5rem", lineHeight: 1.6 }}>
          Dr. Abbott earned her medical degree from XYZ University, followed by fellowship training in sports medicine. She has worked with collegiate and professional athletes, focusing on injury recovery, biomechanics, and human performance.
        </p>
        <p style={{ marginBottom: "1.5rem", lineHeight: 1.6 }}>
          Her philosophy is rooted in collaboration — partnering with you to build plans that are realistic, measurable, and tailored to your sport, demands, and personal journey.
        </p>
        <p style={{ marginBottom: "1.5rem", lineHeight: 1.6 }}>
          With concierge services, Dr. Abbott ensures direct access and personalized feedback, avoiding one-size-fits-all programs. Every plan includes ongoing assessment, adjustments, and adherence to the latest evidence in sports science.
        </p>
      </section>

      {/* Additional sections (optionally) */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>
          Education & Credentials
        </h2>
        <ul style={{ lineHeight: 1.6, marginLeft: "1.25rem" }}>
          <li>MD, Sports Medicine — XYZ University</li>
          <li>Fellowship in Athletic Performance</li>
          <li>Board-Certified in Sports Medicine</li>
          <li>Years of experience with X, Y, Z teams / athletes</li>
        </ul>
      </section>

      {/* Call to action */}
      <section style={{ marginBottom: "2rem", textAlign: "center" }}>
        <a
          href="/services"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "white",
            color: "black",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Explore Services
        </a>
      </section>
    </main>
  );
}
