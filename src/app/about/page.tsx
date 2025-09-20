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
          padding: "1rem 2rem", // ✅ now controls left/right consistently
          zIndex: 100,
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        {/* Left: Site Title */}
        <Link href="/" style={{ color: "white", fontSize: "1rem", fontWeight: "bold", textDecoration: "none" }}>
          ABBOTT SPORT PERFORMANCE
        </Link>

        {/* Right: Services Dropdown */}
        <div className="group relative inline-block text-left">
          <button
            style={{
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
          >
            Services ▾
          </button>
          <div
            className="absolute right-0 hidden group-hover:flex flex-col mt-2 bg-black min-w-[200px] z-50"
          >
            <Link href="/services/exercise" className="px-4 py-2 text-white hover:bg-gray-800">
              Exercise Programs
            </Link>
            <Link href="/services/rehab" className="px-4 py-2 text-white hover:bg-gray-800">
              Rehab Programs
            </Link>
            <Link href="/services/nutrition" className="px-4 py-2 text-white hover:bg-gray-800">
              Nutrition
            </Link>
            <Link href="/services/concierge" className="px-4 py-2 text-white hover:bg-gray-800">
              Concierge Medicine
            </Link>
          </div>
        </div>
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
      </section>
    </main>
  );
}
