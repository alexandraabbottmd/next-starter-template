"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
      >
        {/* Title + Tagline */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "5%",
          }}
        >
          <h1 className="hero-title">
            ABBOTT
            <br />
            SPORT PERFORMANCE
          </h1>
          <p className="hero-tagline">SCIENCE IN EVERY REP</p>
        </div>

        {/* Nav (top right) */}
        <nav
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
          }}
        >
          <div className="dropdown">
            <span style={{ cursor: "pointer" }}>Services ▾</span>
            <div className="dropdown-content">
              <Link href="/services/exercise">Exercise Programs</Link>
              <Link href="/services/rehab">Rehab Programs</Link>
              <Link href="/services/nutrition">Nutrition</Link>
              <Link href="/services/concierge">Concierge Medicine</Link>
            </div>
          </div>
        </nav>

        {/* About link (bottom right) */}
        <a
          href="/about"
          className="about-link"
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
          }}
        >
          About Dr. Abbott →
        </a>
      </section>
    </main>
  );
}
