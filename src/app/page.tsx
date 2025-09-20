"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="hero">
      <Image
        src="/hero.jpg"   // Make sure this file is there
        alt="Abbott Athletes Hero"
        fill
        priority
        className="hero-bg"
      />

      <div className="nav">
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

      <div className="hero-text">
        <h1>ABBOTT<br/>SPORT PERFORMANCE</h1>
        <p className="tagline">SCIENCE IN EVERY REP</p>
      </div>

      <div className="about-link">
        <Link href="/about">About Dr. Abbott →</Link>
      </div>
    </main>
  );
}
