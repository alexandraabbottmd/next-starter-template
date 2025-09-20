"use client";

import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Abbott Sport Performance",
  description: "Science in every rep — physician-designed, evidence-based training and rehab.",
};

export default function HomePage() {
  return (
    <main style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      <section className="hero" style={{ height: "100vh", width: "100vw", position: "relative", overflow: "hidden" }}>
        <Image
          src="/hero.jpg"
          alt="Athlete training"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            filter: "contrast(0.9) brightness(0.9) blur(1px)",
          }}
        />

        {/* Top-right nav */}
        <header
          style={{
            position: "absolute",
            top: "2%",
            right: "5%",
            zIndex: 5,
            color: "#fff",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "1px",
          }}
        >
          <nav>
            <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0, padding: 0 }}>
              <li style={{ position: "relative" }}>
                <span style={{ cursor: "pointer", userSelect: "none" }}>Services ▾</span>
                <ul className="dropdown" style={{ display: "none" }}>
                  <li><Link href="/services/exercise" style={{ color: "#fff" }}>Exercise Programs</Link></li>
                  <li><Link href="/services/rehab" style={{ color: "#fff" }}>Rehab Programs</Link></li>
                  <li><Link href="/services/nutrition" style={{ color: "#fff" }}>Nutrition</Link></li>
                  <li><Link href="/services/concierge" style={{ color: "#fff" }}>Concierge Medicine</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        {/* Title */}
        <h1 className="hero-title">ABBOTT<br/>SPORT PERFORMANCE</h1>

        {/* Tagline */}
        <p className="hero-tagline">SCIENCE IN EVERY REP</p>

        {/* About link */}
        <Link href="/about" className="about-link">About Dr. Abbott →</Link>
      </section>
    </main>
  );
}
