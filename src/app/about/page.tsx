"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
      {/* Top Navigation */}
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
          zIndex: 50,
        }}
      >
        <Link href="/" style={{ fontWeight: "bold", fontSize: "1.2rem", textDecoration: "none", color: "white" }}>
          ABBOTT SPORT PERFORMANCE
        </Link>

        <div className="dropdown" style={{ position: "relative" }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            Services ▼
          </button>
          <div
            className="dropdown-content"
            style={{
              display: "none",
              position: "absolute",
              right: 0,
              backgroundColor: "black",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              zIndex: 100,
            }}
          >
            <Link href="/exercise" style={{ color: "white", textDecoration: "none", display: "block", margin: "0.5rem 0" }}>
              Exercise Programs
            </Link>
            <Link href="/rehab" style={{ color: "white", textDecoration: "none", display: "block", margin: "0.5rem 0" }}>
              Rehab Programs
            </Link>
            <Link href="/nutrition" style={{ color: "white", textDecoration: "none", display: "block", margin: "0.5rem 0" }}>
              Nutrition
            </Link>
            <Link href="/concierge" style={{ color: "white", textDecoration: "none", display: "block", margin: "0.5rem 0" }}>
              Concierge Medicine
            </Link>
          </div>
        </div>
      </nav>

      {/* Intro Section */}
      <section style={{ paddingTop: "8rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Dr Abbott</h1>

        <Image
          src="/about/headshotcolor.jpg"
          alt="Dr Abbott"
          width={250}
          height={300}
          style={{ borderRadius: "15px", margin: "0 auto" }}
        />

        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginTop: "1.5rem" }}>
          Alexandra Abbott, MD is a board-certified sports medicine physician.
        </p>
      </section>

      <style jsx>{`
        .dropdown:hover .dropdown-content {
          display: block;
        }
      `}</style>
    </main>
  );
}
