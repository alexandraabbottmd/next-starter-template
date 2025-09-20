"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Abbott Sport Performance",
  description: "Physician-designed, evidence-based training and rehab.",
};

export default function HomePage() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <main>
      <section
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
        className="hero"
      >
        {/* Background image */}
        <Image
          src="/hero.jpg"
          alt="Athlete training"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "contrast(0.9) brightness(0.9) blur(1px)", // softened image
          }}
        />

        {/* Top-right nav */}
        <header
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            zIndex: 5,
            color: "#fff",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "1px",
          }}
        >
          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
                gap: "20px",
                position: "relative",
              }}
            >
              {/* Dropdown for Services */}
              <li
                className={servicesOpen ? "open" : ""}
                style={{ position: "relative" }}
              >
                <span
                  onClick={() => setServicesOpen(!servicesOpen)}
                  style={{ cursor: "pointer", userSelect: "none" }}
                >
                  Services ▾
                </span>
                <ul className="dropdown">
                  <li>
                    <Link href="/services/exercise">Exercise</Link>
                  </li>
                  <li>
                    <Link href="/services/rehab">Rehab</Link>
                  </li>
                  <li>
                    <Link href="/services/nutrition">Nutrition</Link>
                  </li>
                  <li>
                    <Link href="/services/concierge">Concierge</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        {/* Big title on bottom-left */}
        <div className="logo-title">
          <div className="line1">ABBOTT</div>
          <div className="line2">SPORT PERFORMANCE</div>
        </div>

        /* Dropdown container */
nav li {
  position: relative;
}

/* Dropdown hidden by default */
nav .dropdown {
  display: none;
  position: absolute;
  right: 0;
  margin-top: 8px;
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid #333;
  border-radius: 8px;
  padding: 8px 0;
  list-style: none;
  min-width: 200px;
  z-index: 10;
}

/* Show on hover (desktop) */
nav li:hover > .dropdown {
  display: block;
}

/* Show when React adds "open" (mobile click) */
nav li.open > .dropdown {
  display: block;
}

/* Dropdown links */
nav .dropdown a {
  display: block;
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;
}

nav .dropdown a:hover {
  background: rgba(255, 255, 255, 0.1);
}
