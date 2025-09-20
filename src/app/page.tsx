"use client";

import Link from "next/link";
import "./globals.css";

export default function HomePage() {
  return (
    <main>
      <div className="hero">
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-left"></div>
          <div className="nav-right">
            <div className="dropdown">
              <button className="dropbtn">Services ▾</button>
              <div className="dropdown-content">
                <Link href="/services/exercise">Exercise Programs</Link>
                <Link href="/services/rehab">Rehab Programs</Link>
                <Link href="/services/nutrition">Nutrition</Link>
                <Link href="/services/concierge">Concierge Medicine</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Title */}
        <h1 className="hero-title">ABBOTT<br />SPORT PERFORMANCE</h1>

        {/* Tagline */}
        <p className="hero-tagline">SCIENCE IN EVERY REP</p>

        {/* About link */}
        <Link href="/about" className="about-link">
          About Dr. Abbott →
        </Link>
      </div>
    </main>
  );
}
