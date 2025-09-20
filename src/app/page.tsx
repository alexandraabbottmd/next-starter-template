"use client"; // enable React hooks on this page

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
    <main style={{ margin: 0, padding: 0, overflow: "hidden" }}>
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
            filter: "contrast(0.9) brightness(0.9) blur(1px)", // soften image
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
                    <Link
                      href="/services/exercise"
                      style={{ display: "block", padding: "8px 16px", color: "#fff" }}
                    >
                      Exercise
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/rehab"
                      style={{ display: "block", padding: "8px 16px", color: "#fff" }}
                    >
                      Rehab
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/nutrition"
                      style={{ display: "block", padding: "8px 16px", color: "#fff" }}
                    >
                      Nutrition
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/concierge"
                      style={{ display: "block", padding: "8px 16px", color: "#fff" }}
                    >
                      Concierge
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        {/* Big title on bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "120px",
            left: "60px",
            zIndex: 5,
            color: "#fff",
            lineHeight: 1.1,
          }}
        >
          <div style={{ fontSize: "clamp(48px,8vw,96px)", fontWeight: 800 }}>
            ABBOTT
          </div>
          <div style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 600 }}>
            SPORT PERFORMANCE
          </div>
        </div>

        {/* About link on mid-bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "100px",
            right: "60px",
            zIndex: 5,
          }}
        >
          <Link
            href="/about"
            style={{ color: "#fff", fontSize: "16px", fontWeight: 500 }}
          >
            About Dr. Abbott →
          </Link>
        </div>
      </section>
    </main>
  );
}
