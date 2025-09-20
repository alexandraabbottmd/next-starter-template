import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Abbott Sport Performance",
  description: "Science in every rep — physician-designed, evidence-based training and rehab.",
};

export default function HomePage() {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      {/* Fullscreen hero */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          backgroundColor: "#000",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {/* Background image */}
        <Image
          src="/hero.jpg"
          alt="Athlete training"
          fill
          priority
          style={{
            objectFit: "cover",
            opacity: 0.75,
          }}
        />

        {/* Overlay content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "24px",
            color: "#fff",
          }}
        >
          {/* Top bar */}
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            {/* Logo / Name */}
            <div>
              <div>ABBOTT</div>
              <div>SPORT PERFORMANCE</div>
            </div>

            {/* Right menu */}
            <nav style={{ textAlign: "right" }}>
              <div style={{ marginBottom: "12px" }}>
                <Link href="/services/exercise" style={{ marginRight: "20px" }}>
                  Services
                </Link>
                <Link href="/education" style={{ marginRight: "20px" }}>
                  Education
                </Link>
                <Link href="/cart" style={{ marginRight: "20px" }}>
                  🛒 0
                </Link>
              </div>
              <div>
                <Link href="/about">About Dr. Abbott</Link>
              </div>
            </nav>
          </header>

          {/* Hero tagline (center-left) */}
          <div
            style={{
              fontSize: "clamp(28px,4vw,54px)",
              fontWeight: 700,
              maxWidth: "50%",
              lineHeight: 1.2,
            }}
          >
            SCIENCE IN <br /> EVERY REP
          </div>
        </div>
      </section>
    </main>
  );
}
