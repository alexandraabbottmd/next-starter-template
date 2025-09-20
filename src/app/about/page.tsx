"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ margin: 0, padding: 0, backgroundColor: "black", color: "white" }}>
      {/* Top Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          zIndex: 100,
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        {/* Left: Site Title */}
        <Link href="/" style={{ color: "white", fontSize: "1rem", fontWeight: "bold", textDecoration: "none" }}>
          ABBOTT SPORT PERFORMANCE
        </Link>

        {/* Right: Services Dropdown */}
        <div style={{ position: "relative" }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Services ▾
          </button>
          <div
            style={{
              position: "absolute",
              right: 0,
              marginTop: "0.5rem",
              backgroundColor: "black",
              border: "1px solid #333",
              display: "none",
              flexDirection: "column",
            }}
            className="dropdown"
          >
            <Link href="/services/exercise" style={{ padding: "0.5rem 1rem", textDecoration: "none", color: "white" }}>
              Exercise Programs
            </Link>
            <Link href="/services/rehab" style={{ padding: "0.5rem 1rem", textDecoration: "none", color: "white" }}>
              Rehab Programs
            </Link>
            <Link href="/services/nutrition" style={{ padding: "0.5rem 1rem", textDecoration: "none", color: "white" }}>
              Nutrition
            </Link>
            <Link href="/services/concierge" style={{ padding: "0.5rem 1rem", textDecoration: "none", color: "white" }}>
              Concierge Medicine
            </Link>
          </div>
        </div>

        {/* Small dropdown toggle script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const btn = document.querySelector('nav button');
                const menu = document.querySelector('nav .dropdown');
                if (btn && menu) {
                  btn.addEventListener('click', () => {
                    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
                  });
                }
              });
            `,
          }}
        />
      </nav>

      {/* About Section */}
      <section style={{ padding: "8rem 2rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Dr Abbott</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "2rem" }}>
          <Image src="/about/headshotcolor.jpg" alt="Dr Abbott" width={200} height={250} style={{ borderRadius: "12px" }} />
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            Alexandra Abbott, MD is a board-certified sports medicine physician.
          </p>
        </div>
        {/* (keep the rest of your about page content here...) */}
      </section>
    </main>
  );
}
