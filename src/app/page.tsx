import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export const metadata = {
  title: "Abbott Sport Performance",
  description: "Science in every rep — physician-designed, evidence-based training and rehab.",
};

export default function HomePage() {
  return (
    <main style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      <section
        className="hero"
        style={{
          height: "100vh",
          width: "100vw",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image anchored cover */}
        <Image
          src="/hero.jpg"
          alt="Athlete training"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center top", // anchor from top center
          }}
        />

        {/* Navigation */}
        <Nav />

        {/* Title */}
        <h1 className="hero-title">ABBOTT<br />SPORT PERFORMANCE</h1>

        {/* Tagline */}
        <p className="hero-tagline">SCIENCE IN EVERY REP</p>

        {/* About link */}
        <Link href="/about" className="about-link">
          About Dr. Abbott →
        </Link>
      </section>
    </main>
  );
}
