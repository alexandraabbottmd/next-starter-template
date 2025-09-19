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
    </main>
  );
}
