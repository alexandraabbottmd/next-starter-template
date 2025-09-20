import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Abbott Sport Performance",
  description: "Physician-designed, evidence-based training and rehab.",
};

export default function HomePage() {
  return (
    <main style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      <section
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#000",
          overflow: "hidden",
        }}
      >
        {/* Full background image */}
        <Image
          src="/hero.jpg"
          alt="Athlete training"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Overlay nav/header */}
        <header
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 5,
            padding: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            color: "#fff",
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: "1px",
          }}
        >
          {/* Logo / Title */}
          <div style={{ lineHeight: 1.2 }}>
            <div>ABBOTT</div>
            <div>SPORT PERFORMANCE</div>
          </div>

          {/* Nav */}
          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
                gap: "24px",
                position: "relative",
              }}
            >
              {/* Dropdown for Services */}
              <li style={{ position: "relative" }}>
                <span style={{ cursor: "pointer" }}>Services ▾</span>
                <ul
                  className="dropdown"
                  style={{
                    display: "none",
                    position: "absolute",
                    right: 0,
                    marginTop: "8px",
                    background: "rgba(0,0,0,0.85)",
                    border: "1px solid #333",
                    borderRadius: "8px",
                    padding: "8px 0",
                    listStyle: "none",
                    minWidth: "220px",
                  }}
                >
                  <li>
                    <Link href="/services/exercise" style={{ display: "block", padding: "8px 16px" }}>
                      Exercise Programs
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/rehab" style={{ display: "block", padding: "8px 16px" }}>
                      Rehab Programs
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/nutrition" style={{ display: "block", padding: "8px 16px" }}>
                      Nutrition
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/concierge" style={{ display: "block", padding: "8px 16px" }}>
                      Concierge Medicine
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/cart">🛒 Cart</Link>
              </li>
              <li>
                <Link href="/about">About Dr. Abbott</Link>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    </main>
  );
}
