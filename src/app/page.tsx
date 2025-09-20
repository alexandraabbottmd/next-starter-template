"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="hero">
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Athlete training"
        fill
        priority
        style={{
          objectFit: "cover", // fills screen, no stretch
          objectPosition: "center",
        }}
      />

      {/* Navbar */}
      <nav className="navbar">
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

      {/* Left text block */}
      <div className="overlay left">
        <h1>ABBOTT</h1>
        <h2>SPORT PERFORMANCE</h2>
        <p>SCIENCE IN EVERY REP</p>
      </div>

      {/* Bottom-right link */}
      <div className="overlay bottom-right">
        <Link href="/about">About Dr. Abbott →</Link>
      </div>
    </main>
  );
}
