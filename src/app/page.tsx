"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import "./globals.css";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // ✅ properly closed

  return (
    <main style={{ margin: 0, padding: 0, overflow: "hidden", backgroundColor: "black" }}>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
      >
        {/* Title + Tagline */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "5%",
            color: "white",
            zIndex: 10,
          }}
        >
          <h1 style={{ fontSize: "3rem", margin: 0, fontFamily: "sans-serif", fontWeight: "bold" }}>
            ABBOTT <br /> SPORT PERFORMANCE
          </h1>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1.2rem",
              letterSpacing: "2px",
              fontFamily: "sans-serif",
            }}
          >
            SCIENCE IN EVERY REP
          </p>
        </div>

        {/* Navigation */}
        <nav
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
            zIndex: 20,
          }}
        >
          <div className="dropdown" ref={dropdownRef}>
            <button
              className="dropdown-label"
              onClick={() => setOpen(!open)}
            >
              Services
          
            <div className={`dropdown-content ${open ? "show" : ""}`}>
              <Link href="/services/exercise">Exercise Programs</Link>
              <Link href="/services/rehab">Rehab Programs</Link>
              <Link href="/services/nutrition">Nutrition</Link>
              <Link href="/services/concierge">Concierge Medicine</Link>
            </div>
          </div>
        </nav>

        {/* About link */}
        <Link
          href="/about"
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
            color: "white",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontFamily: "sans-serif",
          }}
        >
          About Dr. Abbott
        </Link>
      </section>
    </main>
  );
}
