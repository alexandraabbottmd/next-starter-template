import Link from "next/link";
import Image from "next/image";

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
          style={{
            padding: 0,
            textAlign: "center",
            maxWidth: 980,
            margin: "60px auto 40px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(36px,5vw,60px)",
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            Physician-designed, custom exercise prescription
          </h1>

          <p
            style={{
              margin: "0 0 28px",
              color: "var(--muted)",
              fontSize: "clamp(16px,2vw,20px)",
              maxWidth: 720,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Evidence-based programs for rehab, pre-hab, performance, nutrition,
            and concierge-level care.
          </p>

          {/* Big centered image (ensure /public/hero.jpg exists) */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "28px 0 24px",
            }}
          >
            <Image
              src="/hero.jpg"
              alt="Athlete training — Abbott Sport Performance"
              width={1100}
              height={700}
              priority
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 20,
                border: "2px solid var(--line)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.07)",
              }}
            />
          </div>

          <div className="btns" style={{ justifyContent: "center", marginTop: 12 }}>
            <Link className="btn primary" href="/consult">
              Book a Consultation
            </Link>
            <Link className="btn ghost" href="/services/exercise">
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="section">
        <div className="container" style={{ textAlign: "center", color: "var(--muted)" }}>
          <div
            style={{
              borderTop: "1px solid var(--line)",
              borderBottom: "1px solid var(--line)",
              padding: "14px 8px",
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              justifyContent: "center",
              fontSize: 14,
            }}
          >
            <span>Board-certified Sports Medicine</span>
            <span>Evidence-based Programming</span>
            <span>Athlete-first, Time-aware Plans</span>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <h2 style={{ marginBottom: 8 }}>Why athletes choose Abbott Sport Performance</h2>
          <div
            className="cards"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
          >
            <div className="card">
              <h3>Physician oversight</h3>
              <p>Programming written with medical context—injury history, red flags, and recovery windows.</p>
            </div>
            <div className="card">
              <h3>Truly custom</h3>
              <p>Plans built around your real schedule, constraints, and sport—not templated workouts.</p>
            </div>
            <div className="card">
              <h3>Measurable progress</h3>
              <p>Clear milestones for pain, ROM, strength, and workload to guide safe progression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (clickable cards) */}
      <section id="services" className="section">
        <div className="container">
          <h2 style={{ marginBottom: 12 }}>Services</h2>
          <div className="cards">
            <Link className="card" href="/services/exercise">
              <h3>Exercise Programs</h3>
              <p>Sport-specific plans or fully custom training schedules.</p>
            </Link>

            <Link className="card" href="/services/rehab">
              <h3>Rehab Programs</h3>
              <p>Injury-based rehab or custom recovery scheduling.</p>
            </Link>

            <Link className="card" href="/services/nutrition">
              <h3>Sports Nutrition</h3>
              <p>Consults and regular check-ins tailored to your needs.</p>
            </Link>

            <Link className="card" href="/services/concierge">
              <h3>Concierge Medicine</h3>
              <p>Telehealth consults for illness, injury, or concussion.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL (simple, tasteful) */}
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="card" style={{ padding: 22 }}>
            <p style={{ fontStyle: "italic", margin: 0 }}>
              “The plan balanced rehab and performance perfectly. I hit my race goal pain-free
              for the first time in years.”
            </p>
            <p style={{ margin: "8px 0 0", color: "var(--muted)", fontSize: 14 }}>— M.G., marathoner</p>
          </div>
        </div>
      </section>

      {/* FAQ (native details/summary = no extra JS) */}
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <h2>FAQ</h2>

          <details className="card">
            <summary style={{ cursor: "pointer", fontWeight: 600 }}>Do you take insurance?</summary>
            <div style={{ marginTop: 8 }}>
              Most services are direct-pay. You can use insurance for labs or imaging ordered
              through your primary provider. Concierge consults are out-of-pocket.
            </div>
          </details>

          <details className="card">
            <summary style={{ cursor: "pointer", fontWeight: 600 }}>Is this remote or in-person?</summary>
            <div style={{ marginTop: 8 }}>
              Telehealth by default. In-person options may be available on request.
            </div>
          </details>

          <details className="card">
            <summary style={{ cursor: "pointer", fontWeight: 600 }}>
              What’s the difference between “exercise” and “rehab” programs?
            </summary>
            <div style={{ marginTop: 8 }}>
              Rehab focuses on pain, function, and return-to-sport criteria. Exercise programs
              target performance (strength, endurance, speed) with injury-aware progressions.
            </div>
          </details>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="cards">
            <div className="card" style={{ display: "grid", gap: 8 }}>
              <h3>Ready to get started?</h3>
              <p style={{ margin: 0 }}>
                Start with a consultation or browse programs tailored to your goals.
              </p>
              <div className="btns">
                <Link className="btn primary" href="/consult">
                  Book a Consultation
                </Link>
                <Link className="btn ghost" href="/services/exercise">
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
