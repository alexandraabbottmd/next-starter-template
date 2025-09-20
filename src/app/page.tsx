"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ margin: 0, padding: 0, overflow: "hidden", backgroundColor: "black" }}>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/hero.jpg')", // ✅ CSS background works
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
            color: "white",
            zIndex: 10,
          }}
        >
          <h1 style={{ fontSize: "3rem", margin: 0 }}>ABBOTT<br />SPORT PERFORMANCE</h1>
          <p style={{ marginTop: "1rem", fontSize: "1.2rem", letterSpacing: "2px" }}>
            SCIENCE IN EVERY REP
          </p>
        </div>

        {/* Navigation */}
        <nav
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
            zIndex: 20,
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <span style={{ cursor: "pointer", color: "white" }}>Services ▾</span>
            <div
              style={{
                display: "none",
                position: "absolute",
                right: 0,
                marginTop: "0.5rem",
                backgroundColor: "rgba(0,0,0,0.85)",
                padding: "0.5rem",
              }}
              className="dropdown-content"
            >
              <Link href="/services/exercise" style={{ display: "block", color: "white", padding: "0.25rem 0" }}>Exercise Programs</Link>
              <Link href="/services/rehab" style={{ display: "block", color: "white", padding: "0.25rem 0" }}>Rehab Programs</Link>
              <Link href="/services/nutrition" style={{ display: "block", color: "white", padding: "0.25rem 0" }}>Nutrition</Link>
              <Link href="/services/concierge" style={{ display: "block", color: "white", padding: "0.25rem 0" }}>Concierge Medicine</Link>
            </div>
          </div>
        </nav>

        {/* About link */}
        <a
          href="/about"
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
            color: "white",
            textDecoration: "none",
            fontSize: "1.2rem",
            zIndex: 10,
          }}
        >
          About Dr. Abbott →
        </a>
      </section>
    </main>
  );
}
