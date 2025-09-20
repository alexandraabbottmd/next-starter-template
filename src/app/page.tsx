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
            filter: "contrast(0.9) brightness(0.9) blur(1px)", // softened look
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
                  <li><Link href="/services/exercise">Exercise</Link></li>
                  <li><Link href="/services/rehab">Rehab</Link></li>
                  <li><Link href="/services/nutrition">Nutrition</Link></li>
                  <li><Link href="/services/concierge">Concierge</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        {/* Title closer to middle-left */}
        <div
          style={{
            position: "absolute",
            top: "35%", // raise title higher into negative space
            left: "60px",
            zIndex: 5,
            color: "#fff",
            lineHeight: 1.1,
          }}
        >
          <div style={{ fontSize: "clamp(64px,8vw,96px)", fontWeight: 800 }}>
            ABBOTT
          </div>
          <div style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 600 }}>
            SPORT PERFORMANCE
          </div>
        </div>

        {/* About link mid-right instead of bottom */}
        <div
          style={{
            position: "absolute",
            top: "45%",
            right: "60px",
            zIndex: 5,
          }}
        >
          <Link
            href="/about"
            style={{ color: "#fff", fontSize: "18px", fontWeight: 500 }}
          >
            About Dr. Abbott →
          </Link>
        </div>
      </section>
    </main>
  );
}
