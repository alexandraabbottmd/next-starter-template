import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export const metadata = {
  title: "Abbott Sport Performance",
  description: "Science in every rep — physician-designed, evidence-based training and rehab.",
};

export default function HomePage() {
  return (
    <main className="hero">
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Athlete training"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center top",
          zIndex: -1,
        }}
      />

      {/* Navigation */}
      <Nav />

      {/* Left block with title/tagline */}
      <div className="left-block">
        <h1>ABBOTT<br />SPORT PERFORMANCE</h1>
        <p>SCIENCE IN EVERY REP</p>
      </div>

      {/* Bottom-right block with About link */}
      <div className="bottom-block">
        <Link href="/about">About Dr. Abbott →</Link>
      </div>
    </main>
  );
}
