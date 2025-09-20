"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "black",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* ✅ NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "black",
          zIndex: 100,
        }}
      >
        {/* Home link */}
        <Link href="/" style={{ fontWeight: "bold", textDecoration: "none", color: "white" }}>
          ABBOTT SPORT PERFORMANCE
        </Link>

        {/* Services dropdown */}
        <div className="dropdown-wrapper" style={{ position: "relative" }}>
          <span style={{ cursor: "pointer", fontWeight: "bold" }}>Services ▾</span>
          <div className="dropdown">
            <Link href="/services/exercise"><a>Exercise Programs</a></Link>
            <Link href="/services/rehab"><a>Rehab Programs</a></Link>
            <Link href="/services/nutrition"><a>Nutrition</a></Link>
            <Link href="/services/concierge"><a>Concierge Medicine</a></Link>
          </div>
        </div>
      </nav>

      {/* ✅ MAIN CONTENT */}
      <section style={{ paddingTop: "6rem", maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Dr Abbott</h1>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "4rem" }}>
          <Image
            src="/about/headshotcolor.jpg"
            alt="Dr Abbott"
            width={250}
            height={300}
            style={{ borderRadius: "15px" }}
          />
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            Alexandra Abbott, MD is a board-certified sports medicine physician.
          </p>
        </div>
      </section>

      {/* ✅ Scoped CSS */}
      <style jsx>{`
        .dropdown {
          display: none;
          position: absolute;
          right: 0;
          background-color: black;
          padding: 0.5rem 0;
          min-width: 220px;
          z-index: 200;
        }

        .dropdown a {
          display: block;
          padding: 0.5rem 1rem;
          color: white;
          text-decoration: none;
        }

        .dropdown a:hover {
          background-color: #222;
        }

        .dropdown-wrapper:hover .dropdown {
          display: block;
        }
      `}</style>
    </main>
  );
}
