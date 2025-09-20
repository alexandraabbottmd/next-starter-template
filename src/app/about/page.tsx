"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Navigation */}
      <nav
        className="flex justify-between items-center px-8 py-4 fixed top-0 left-0 right-0 bg-black z-50"
      >
        <Link
          href="/"
          className="text-lg font-extrabold tracking-wide hover:opacity-80"
        >
          ABBOTT SPORT PERFORMANCE
        </Link>

        <div className="relative group">
          <button className="font-extrabold text-lg hover:opacity-80">
            Services
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
      <section className="mt-[7rem] text-center px-4">
        <h1 className="text-5xl font-extrabold tracking-wide mb-6">Dr Abbott</h1>

        <div className="relative inline-block">
          {/* Image with subtle fade */}
          <div className="relative w-[260px] h-[340px] mx-auto rounded-xl overflow-hidden">
            <Image
              src="/about/headshotcolor.jpg"
              alt="Dr Abbott"
              fill
              priority
              className="object-cover rounded-xl"
            />
            {/* Soft fades (lighter) */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(to top, transparent 85%, black 100%),
                  linear-gradient(to bottom, transparent 85%, black 100%),
                  linear-gradient(to left, transparent 85%, black 100%),
                  linear-gradient(to right, transparent 85%, black 100%)
                `
              }}
            />
          </div>

          <p className="max-w-xl mx-auto text-lg leading-relaxed mt-4">
            Alexandra Abbott, MD is a <br />
            board-certified sports medicine physician.
          </p>
        </div>
      </section>
    </main>
  );
}
