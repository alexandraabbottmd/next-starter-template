"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          priority
          style={{
            objectFit: "contain",   // keeps correct proportions
            objectPosition: "center",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-6 right-8 z-20">
        <div className="group relative inline-block">
          <button className="text-lg font-semibold">Services ▾</button>
          <div className="absolute right-0 hidden mt-2 w-48 bg-black bg-opacity-80 text-white group-hover:block">
            <Link href="/services/exercise" className="block px-4 py-2 hover:bg-gray-700">Exercise Programs</Link>
            <Link href="/services/rehab" className="block px-4 py-2 hover:bg-gray-700">Rehab Programs</Link>
            <Link href="/services/nutrition" className="block px-4 py-2 hover:bg-gray-700">Nutrition</Link>
            <Link href="/services/concierge" className="block px-4 py-2 hover:bg-gray-700">Concierge Medicine</Link>
          </div>
        </div>
      </nav>

      {/* Text overlay */}
      <div className="relative z-10 flex flex-col h-full justify-center px-12">
        <h1 className="text-6xl font-bold leading-tight">
          ABBOTT
          <br />
          SPORT PERFORMANCE
        </h1>
        <p className="mt-4 text-xl tracking-widest">
          SCIENCE IN EVERY REP
        </p>
      </div>

      {/* About Link */}
      <div className="absolute bottom-8 right-12 z-10">
        <Link href="/about" className="text-lg font-medium hover:underline">
          About Dr. Abbott →
        </Link>
      </div>
    </main>
  );
}
