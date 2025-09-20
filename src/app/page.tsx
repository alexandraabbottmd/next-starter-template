"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="hero">
      {/* Background image (change path to your real hero photo in /public) */}
      <Image
        src="/home/hero.jpg"   // 👈 replace with your actual hero image filename
        alt="Abbott Athletes"
        fill
        priority
        className="hero-bg"
      />

      {/* Navbar */}
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

      {/* Hero text */}
      <div className="hero-text">
        <h1>
          ABBOTT
          <br />
          SPORT PERFORMANCE
        </h1>
        <div className="tagline">SCIENCE IN EVERY REP</div>
      </div>

      {/* About link */}
      <div className="about-link">
        <Link href="/about">About Dr. Abbott →</Link>
      </div>
    </main>
  );
}
