"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

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
            fontSize: "1.1rem",
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
              fontSize: "1rem",
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
          paddingTop: "6rem", // raised higher
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: playfair.style.fontFamily,
            fontSize: "3rem",
            marginBottom: "1.5rem",
          }}
        >
          Dr Abbott
        </h1>

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
            margin: "0 auto",
          }}
        />

        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            marginTop: "1rem",
          }}
        >
          Alexandra Abbott, MD is a board-certified sports medicine physician.
        </p>
      </section>

      {/* Sections from your mockup */}
      <section style={{ marginTop: "4rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: playfair.style.fontFamily, fontSize: "2rem", marginBottom: "1rem" }}>
          Collegiate Athlete
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Image src="/about/action.jpg" alt="Action" width={250} height={160} style={{ borderRadius: "10px" }} />
          <Image src="/about/action2.jpg" alt="Action 2" width={250} height={160} style={{ borderRadius: "10px" }} />
        </div>
      </section>

      <section style={{ marginTop: "4rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: playfair.style.fontFamily, fontSize: "2rem", marginBottom: "1rem" }}>
          Research in Sports Medicine & Pediatrics
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Image src="/about/kinesiology1.jpg" alt="Kinesiology" width={180} height={120} style={{ borderRadius: "10px" }} />
          <Image src="/about/kinesiology2.jpg" alt="Kinesiology" width={180} height={120} style={{ borderRadius: "10px" }} />
          <Image src="/about/kinesiology3.jpg" alt="Kinesiology" width={180} height={120} style={{ borderRadius: "10px" }} />
          <Image src="/about/kinesiology4.jpg" alt="Kinesiology" width={180} height={120} style={{ borderRadius: "10px" }} />
          <Image src="/about/researcher.jpg" alt="Research" width={180} height={120} style={{ borderRadius: "10px" }} />
        </div>
      </section>

      <section style={{ marginTop: "4rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: playfair.style.fontFamily, fontSize: "2rem", marginBottom: "1rem" }}>
          Thousands of Athletes Cared For
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Image src="/about/NCAA.jpg" alt="NCAA" width={220} height={140} style={{ borderRadius: "10px" }} />
          <Image src="/about/NBA.jpg" alt="NBA" width={220} height={140} style={{ borderRadius: "10px" }} />
          <Image src="/about/MLB.jpg" alt="MLB" width={220} height={140} style={{ borderRadius: "10px" }} />
        </div>
      </section>

      <section style={{ marginTop: "4rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: playfair.style.fontFamily, fontSize: "2rem", marginBottom: "1rem" }}>
          Passion for Health & Fitness
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Image src="/about/snatch.jpg" alt="Snatch" width={220} height={300} style={{ borderRadius: "10px" }} />
          <Image src="/about/yoga.jpg" alt="Yoga" width={220} height={300} style={{ borderRadius: "10px" }} />
        </div>
      </section>

      <section style={{ margin: "4rem auto", textAlign: "center", maxWidth: "600px" }}>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
          As a primary care physician who has done the reps herself, Dr. Abbott applies cutting-edge
          research in sports performance, injury prevention and treatment, nutrition, and more to help
          you turn the corner and reach your full potential.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Image src="/about/ask dr abbott.jpg" alt="Ask Dr Abbott" width={250} height={250} style={{ borderRadius: "10px" }} />
          <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
            <Link href="/contact" style={{ color: "white", textDecoration: "underline" }}>
              Ask Dr. Abbott → Consultation Form
            </Link>
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
