"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide hover:text-gray-300"
        >
          ABBOTT SPORT PERFORMANCE
        </Link>
        <nav>
          <div className="relative group">
            <button className="text-lg font-semibold hover:text-gray-300">
              Services
            </button>
            <ul className="absolute right-0 mt-2 hidden w-48 bg-black text-white rounded-md shadow-lg group-hover:block">
              <li>
                <Link
                  href="/services/exercise"
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  Exercise Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/rehab"
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  Rehab Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/nutrition"
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  Nutrition
                </Link>
              </li>
              <li>
                <Link
                  href="/services/concierge"
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  Concierge Medicine
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Title section */}
      <section className="text-center mt-10">
        <h1 className="text-5xl font-bold tracking-tight">Dr Abbott</h1>
      </section>
    </main>
  );
}
