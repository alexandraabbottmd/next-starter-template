"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Navigation */}
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
          className="text-xl font-bold tracking-wide hover:opacity-80"
          style={{ textDecoration: "none", color: "white" }}
        >
          ABBOTT SPORT PERFORMANCE
        </Link>

        <div className="relative group">
          <button className="font-bold text-xl hover:opacity-80" style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>
            Services <span className="ml-1 inline-block">▼</span>
          </button>
          <div className="absolute right-0 mt-2 hidden group-hover:block bg-black rounded-lg shadow-lg">
            <ul className="p-2 space-y-2">
              <li><Link href="/exercise" className="block px-4 py-1 hover:underline">Exercise Programs</Link></li>
              <li><Link href="/rehab" className="block px-4 py-1 hover:underline">Rehab Programs</Link></li>
              <li><Link href="/nutrition" className="block px-4 py-1 hover:underline">Nutrition</Link></li>
              <li><Link href="/concierge" className="block px-4 py-1 hover:underline">Concierge Medicine</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="mt-[6rem] text-center px-4">
        <h1 className="text-4xl font-bold mb-6">Dr Abbott</h1>
        <div className="relative inline-block">
          {/* The container for the image with overlay fades */}
          <div style={{ position: "relative", display: "inline-block", width: "260px", height: "340px", overflow: "hidden", borderRadius: "20px" }}>
            <Image
              src="/about/headshotcolor.jpg"
              alt="Dr Abbott"
              fill
              priority
              className="object-cover rounded-xl"
            />
            {/* Fade overlays */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              background: "linear-gradient(to top, transparent 30%, black 90%)",
            }}></div>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              background: "linear-gradient(to left, transparent 30%, black 90%)",
            }}></div>
            <div style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              background: "linear-gradient(to right, transparent 30%, black 90%)",
            }}></div>
          </div>

          <p className="max-w-xl mx-auto text-lg leading-relaxed mt-4">
            Alexandra Abbott, MD is a <br /> board-certified sports medicine physician.
          </p>
        </div>
      </section>

      {/* Restore other sections here as before */}
      {/* ... (Collegiate Athlete, Research, Athletes cared for, Passion, Final section) ... */}

    </main>
  );
}
