"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="hero">
      {/* Nav */}
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

      {/* Background Image */}
      <div className="hero-bg">
        <Image
          src="/hero.jpg"
          alt="Athlete training"
          fill
          priority
          style={{
            objectFit: "contain", // no stretching
            objectPosition: "center top",
            backgroundColor: "black", // letterbox margins
          }}
        />
      </div>

      {/* Text Overlay */}
      <div className="hero-text">
        <h1>ABBOTT<br />SPORT PERFORMANCE</h1>
        <p className="tagline">SCIENCE IN EVERY REP</p>
      </div>

      {/* About link */}
      <div className="about-link">
        <Link href="/about">About Dr. Abbott →</Link>
      </div>
    </main>
  );
}
