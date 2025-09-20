import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Abbott Sport Performance",
  description: "Science in every rep — physician-designed, evidence-based training and rehab.",
};

export default function HomePage() {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      {/* Fullscreen hero */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          backgroundColor: "#000",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Image
          src="/hero.jpg" // put your hero image in /public/hero.jpg
          alt="Athlete training"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.9,
          }}
        />

        {/* Overlay content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "f
