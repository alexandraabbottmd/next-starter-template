"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Page container */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        
        {/* Header */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Dr. Abbott</h1>
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <Image
              src="/about/profile.jpg" // replace with your headshot file path
              alt="Dr. Alexandra Abbott"
              width={250}
              height={250}
              className="rounded-xl shadow-lg"
            />
            <p className="text-lg max-w-xl mt-6 md:mt-0">
              Alexandra Abbott, MD is a board-certified sports medicine
              physician. Her expertise comes from years of education, training,
              and experience.
            </p>
          </div>
        </section>

        {/* Collegiate athlete */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Collegiate athlete</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="/about/athlete1.jpg"
              alt="Collegiate athlete"
              width={400}
              height={300}
              className="rounded-xl shadow-md"
            />
            <Image
              src="/about/athlete2.jpg"
              alt="Collegiate athlete"
              width={400}
              height={300}
              className="rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* Research + publications */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Research & Publications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <Image src="/about/research1.jpg" alt="Research" width={300} height={200} className="rounded-lg shadow" />
            <Image src="/about/research2.jpg" alt="Research" width={300} height={200} className="rounded-lg shadow" />
            <Image src="/about/research3.jpg" alt="Research" width={300} height={200} className="rounded-lg shadow" />
            <Image src="/about/research4.jpg" alt="Research" width={300} height={200} className="rounded-lg shadow" />
          </div>
          <p>
            Prolific research in sports medicine, orthopedics, and pediatrics.{" "}
            <Link
              href="https://pubmed.ncbi.nlm.nih.gov/?term=Abbott+A&cauthor_id=35253062"
              target="_blank"
              className="underline hover:text-gray-300"
            >
              Dr. Abbott’s work
            </Link>
          </p>
        </section>

        {/* Athletes cared for */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Thousands of athletes cared for</h2>
          <p className="mb-6">Including NCAA Division I, NBA, MLB athletes.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Image src="/about/rosebowl.jpg" alt="Rose Bowl" width={400} height={300} className="rounded-xl shadow-md" />
            <Image src="/about/ucla.jpg" alt="UCLA" width={400} height={300} className="rounded-xl shadow-md" />
            <Image src="/about/mlb.jpg" alt="MLB" width={400} height={300} className="rounded-xl shadow-md" />
          </div>
          <p className="mt-4 text-sm">
            She currently practices at{" "}
            <Link
              href="https://www.stanfordchildrens.org/en/doctor/d-alexandra-morgan-abbott.html"
              target="_blank"
              className="underline hover:text-gray-300"
            >
              Stanford Children’s
            </Link>
            .
          </p>
        </section>

        {/* Passion & wellness */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Lifelong passion and dedication to health, wellness, and physical fitness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image src="/about/training1.jpg" alt="Training" width={400} height={300} className="rounded-xl shadow-md" />
            <Image src="/about/training2.jpg" alt="Training" width={400} height={300} className="rounded-xl shadow-md" />
          </div>
        </section>

        {/* Closing */}
        <section className="text-center space-y-6">
          <p className="text-lg max-w-2xl mx-auto">
            As a primary care physician <span className="italic">who has done the reps herself</span>, Dr. Abbott applies cutting-edge research in sports performance, injury prevention and treatment, nutrition, and more to help you turn the corner and reach your full potential.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200"
          >
            Ask Dr. Abbott → Consultation Form
          </Link>
        </section>

      </div>
    </main>
  );
}
