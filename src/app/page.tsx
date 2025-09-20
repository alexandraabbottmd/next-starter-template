"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="hero">
      <div className="overlay">
        <h1 className="title">ABBOTT</h1>
        <h2 className="subtitle">SPORT PERFORMANCE</h2>
        <p className="tagline">SCIENCE IN EVERY REP</p>
        <div className="about-link">
          <Link href="/about">About Dr. Abbott →</Link>
        </div>
      </div>
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
    </main>
  );
}
