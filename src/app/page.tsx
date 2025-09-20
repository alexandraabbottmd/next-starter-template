"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        {/* ✅ Hero image */}
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          priority
          style={{
            objectFit: "contain",      // keeps proportions
            objectPosition: "center",  // ensures photo is centered
          }}
        />

        {/* Title + tagline */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "5%",
            color: "white",
          }}
        >
          <h1 className="hero-title">
            ABBOTT
            <br />
            SPORT PERFORMANCE
          </h1>
          <p className="hero-tagline">SCIENCE IN EVERY REP</p>
        </div>

        {/* Nav */}
        <nav
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
          }}
        >
          <div className="dropdown">
            <span style={{ cursor: "pointer", color: "white" }}>Services ▾</span>
            <div className="dropdown-content">
              <Link href="/services/exercise">Exercise Programs</Link>
              <Link href="/services/rehab">Rehab Programs</Link>
              <Link href="/services/nutrition">Nutrition</Link>
              <Link href="/services/concierge">Concierge Medicine</Link>
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
          }}
        >
          About Dr. Abbott →
        </a>
      </section>
    </main>
  );
}
