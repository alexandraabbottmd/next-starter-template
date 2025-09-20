"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="hero-container">
      <section
        className="hero"
        style={{
          backgroundImage: "url('/hero.jpg')", // ✅ forces hero.jpg
        }}
      >
        {/* Top-right nav */}
        <nav className="nav">
          <div className="dropdown">
            <button className="dropbtn">Services ▾</button>
            <div className="dropdown-content">
              <Link href="/services/exercise">Exercise Programs</Link>
              <Link href="/services/rehab">Rehab Programs</Link>
              <Link href="/services/nutrition">Nutrition</Link>
              <Link href="/services/concierge">Concierge Medicine</Link>
            </div>
          </div>
        </nav>

        {/* Title + tagline (left side, vertically centered) */}
        <div className="hero-text">
          <h1 className="title">ABBOTT</h1>
          <h1 className="subtitle">SPORT PERFORMANCE</h1>
          <p className="tagline">SCIENCE IN EVERY REP</p>
        </div>

        {/* Bottom-right link */}
        <div className="about-link">
          <Link href="/about">About Dr. Abbott →</Link>
        </div>
      </section>
    </main>
  );
}
