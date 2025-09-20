"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "black", color: "white", padding: "2rem" }}>
      <section style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Title + Headshot */}
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Dr Abbott</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <Image
            src="/about/headshotcolor.jpg"
            alt="Dr Abbott headshot"
            width={200}
            height={260}
            style={{ borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.6)" }}
          />
          <p style={{ maxWidth: "500px", lineHeight: "1.6" }}>
            Alexandra Abbott, MD is a board-certified sports medicine physician.
          </p>
        </div>

        {/* Collegiate athlete */}
        <h2>Collegiate athlete</h2>
        <div style={{ display: "flex", gap: "1.5rem", marginBottom: "3rem" }}>
          <Image
            src="/about/action.jpg"
            alt="Action soccer"
            width={300}
            height={200}
            style={{ borderRadius: "12px" }}
          />
          <Image
            src="/about/action2.jpg"
            alt="Action soccer 2"
            width={300}
            height={200}
            style={{ borderRadius: "12px" }}
          />
        </div>

        {/* Kinesiology + Research */}
        <h2>Kinesiology with emphasis in Exercise Science</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3rem" }}>
          <Image src="/about/kinesiology1.jpg" alt="Chart" width={250} height={180} style={{ borderRadius: "12px" }} />
          <Image src="/about/kinesiology2.jpg" alt="Data" width={250} height={180} style={{ borderRadius: "12px" }} />
          <Image src="/about/kinesiology3.jpg" alt="Building" width={250} height={180} style={{ borderRadius: "12px" }} />
          <Image src="/about/kinesiology4.jpg" alt="Graph" width={250} height={180} style={{ borderRadius: "12px" }} />
        </div>
        <h3>Prolific research in sports medicine, orthopedics, and pediatrics</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "3rem" }}>
          <Image
            src="/about/researcher.jpg"
            alt="Researcher"
            width={200}
            height={240}
            style={{ borderRadius: "12px" }}
          />
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/?term=Abbott+A&cauthor_id=35253062"
            target="_blank"
            style={{ color: "#4da6ff", textDecoration: "underline" }}
          >
            Dr Abbott’s publications (PubMed)
          </Link>
        </div>

        {/* Athletes cared for */}
        <h2>Thousands of athletes cared for, including NCAA Division I, NBA, MLB athletes</h2>
        <div style={{ display: "flex", gap: "1.5rem", marginBottom: "3rem" }}>
          <Image src="/about/NCAA.jpg" alt="NCAA" width={250} height={180} style={{ borderRadius: "12px" }} />
          <Image src="/about/NBA.jpg" alt="NBA" width={250} height={180} style={{ borderRadius: "12px" }} />
          <Image src="/about/MLB.jpg" alt="MLB" width={250} height={180} style={{ borderRadius: "12px" }} />
        </div>
        <p>
          She currently practices at Stanford Children’s —{" "}
          <Link
            href="https://www.stanfordchildrens.org/en/doctor/alexandra-morgan-abbott.html"
            target="_blank"
            style={{ color: "#4da6ff", textDecoration: "underline" }}
          >
            Dr Abbott’s Stanford profile
          </Link>
        </p>

        {/* Lifelong passion */}
        <h2>Lifelong passion and dedication to health, wellness, and physical fitness</h2>
        <div style={{ display: "flex", gap: "1.5rem", marginBottom: "3rem" }}>
          <Image src="/about/snatch.jpg" alt="Snatch" width={250} height={300} style={{ borderRadius: "12px" }} />
          <Image src="/about/yoga.jpg" alt="Yoga" width={250} height={300} style={{ borderRadius: "12px" }} />
        </div>

        {/* Closing */}
        <p style={{ maxWidth: "600px", marginBottom: "2rem" }}>
          As a primary care physician <em>who has done the reps herself</em>, Dr Abbott applies cutting edge research in
          sports performance, injury prevention and treatment, nutrition, and more to help you turn the corner and reach
          your full potential.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Image src="/about/ask dr abbott.jpg" alt="Ask Dr Abbott" width={250} height={280} style={{ borderRadius: "12px" }} />
          <Link href="/contact" style={{ color: "#4da6ff", fontWeight: "bold" }}>
            Ask Dr Abbott → link to consultation form
          </Link>
        </div>
      </section>
    </main>
  );
}
