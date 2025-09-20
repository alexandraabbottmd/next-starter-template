"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ margin: 0, padding: 0, overflow: "hidden", backgroundColor: "black" }}>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh", // ✅ guarantees the image has space
          backgroundColor: "black",
        }}
      >
        {/* Hero Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src="/hero.jpg"
            alt="Hero"
            fill
            priority
            style={{
              objectFit: "contain",   // ✅ keeps proportions
              objectPosition: "center",
            }}
          />
        </div>

        {/* Temp placeholder text just to confirm overlay renders */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            color: "white",
            zIndex: 10,
          }}
        >
          <h1>CHECKING HERO VISIBILITY</h1>
        </div>
      </section>
    </main>
  );
}
