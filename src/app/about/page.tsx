"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <main
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        fontFamily: inter.style.fontFamily,
      }}
    >
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
        <Link
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            textDecoration: "none",
            color: "white",
          }}
        >
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
            <Link href="/exercise" style={{ display: "block", margin: "0.5rem 0", color: "white" }}>
              Exercise Programs
            </Link>
            <Link href="/rehab" style={{ display: "block", margin: "0.5rem 0", color: "white" }}>
              Rehab Programs
            </Link>
            <Link href="/nutrition" style={{ display: "block", margin: "0.5rem 0", color: "white" }}>
              Nutrition
            </Link>
            <Link href="/concierge" style={{ display: "block", margin: "0.5rem 0", color: "white" }}>
              Concierge Medicine
            </Link>
          </div>
        </div>
      </nav>

      {/* Intro Section */}
      <section
        style={{
          paddingTop: "8rem",
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "2rem" }}>
          Dr Abbott
        </h1>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image
            src="/about/headshotcolor.jpg"
            alt="Dr Abbott"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "250px",
              height: "auto",
              borderRadius: "15px",
            }}
          />

          <p style={{ fontSize: "1.25rem", lineHeight: "1.8", marginTop: "1.5rem", maxWidth: "600px" }}>
            Alexandra Abbott, MD is a board-certified sports medicine physician.
          </p>
        </div>
      </section>

      <style jsx>{`
        .dropdown:hover .dropdown-content {
          display: block;
        }
      `}</style>
    </main>
  );
}
