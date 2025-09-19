// Trigger redeploy

export const metadata = {
  title: "Abbott Sport Performance",
  description: "Physician-designed, custom exercise prescription.",
};

export default function HomePage() {
  return (
    <main>
      {/* HERO (centered, clean, roomy) */}
      <section className="hero">
        <div
          className="container"
          style={{ padding: 0, textAlign: "center", maxWidth: 980, margin: "0 auto" }}
        >
          <h1 style={{ fontSize: "clamp(34px,5vw,56px)", lineHeight: 1.1, margin: "0 0 8px" }}>
            Physician-designed, custom exercise prescription
          </h1>
          <p style={{ margin: "0 0 22px", color: "var(--muted)", fontSize: "clamp(16px,2vw,20px)" }}>
            Evidence-based programs for rehab, pre-hab, performance, nutrition, and concierge care.
          </p>

          {/* Big centered image (ensure your file is at /public/hero.jpg) */}
          <div style={{ display: "flex", justifyContent: "center", margin: "18px 0 8px" }}>
            <img
              src="/hero.jpg"
              alt="Athlete training — Abbott Sport Performance"
              style={{
                maxWidth: "100%",
                width: "1100px",
                height: "auto",
                borderRadius: "18px",
                border: "1px solid var(--line)",
              }}
            />
          </div>

          <div className="btns" style={{ justifyContent: "center" }}>
            <a className="btn primary" href="/consult">Book a Consultation</a>
            <a className="btn ghost" href="/services/exercise">View Programs</a>
          </div>
        </div>
      </section>

      {/* SERVICES (clickable cards) */}
      <section id="services" className="section">
        <div className="container">
          <h2>Services</h2>
          <div className="cards">
            <a className="card" href="/services/exercise">
              <h3>Exercise Programs</h3>
              <p>Sport-specific plans or fully custom training schedules.</p>
            </a>
            <a className="card" href="/services/rehab">
              <h3>Rehab Programs</h3>
              <p>Injury-based rehab or custom recovery scheduling.</p>
            </a>
            <a className="card" href="/services/nutrition">
              <h3>Sports Nutrition</h3>
              <p>Consults and regular check-ins tailored to your needs.</p>
            </a>
            <a className="card" href="/services/concierge">
              <h3>Concierge Medicine</h3>
              <p>Telehealth consults for illness, injury, or concussion.</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
