"use client";

import { useState } from "react"; // Importing useState for dropdown functionality
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [servicesOpen, setServicesOpen] = useState(false); // State for dropdown visibility

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Fixed Header Banner */}
      <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
        <div className="container mx-auto px-8 h-20 flex justify-between items-center bg-black">
          <Link href="/" className="text-lg font-bold tracking-wide text-white">
            ABBOTT <br /> SPORT PERFORMANCE
          </Link>

          {/* Services Dropdown */}
          <nav
            style={{
              position: "absolute",
              top: "5%",
              right: "5%",
              zIndex: 20,
            }}
          >
            <div className="dropdown">
              <span
                className="dropdown-label font-semibold cursor-pointer"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
              </span>
              <div
                className={`dropdown-content ${servicesOpen ? "show" : ""}`}
                style={{
                  position: "absolute",
                  backgroundColor: "black",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
                  padding: "10px 0",
                  right: "0",
                  minWidth: "200px",
                  zIndex: "10",
                }}
              >
                <Link
                  href="/services/exercise"
                  onClick={() => setServicesOpen(false)}
                  className="px-4 py-2 block text-white hover:bg-gray-800"
                >
                  Exercise Programs
                </Link>
                <Link
                  href="/services/rehab"
                  onClick={() => setServicesOpen(false)}
                  className="px-4 py-2 block text-white hover:bg-gray-800"
                >
                  Rehab Programs
                </Link>
                <Link
                  href="/services/nutrition"
                  onClick={() => setServicesOpen(false)}
                  className="px-4 py-2 block text-white hover:bg-gray-800"
                >
                  Nutrition
                </Link>
                <Link
                  href="/services/concierge"
                  onClick={() => setServicesOpen(false)}
                  className="px-4 py-2 block text-white hover:bg-gray-800"
                >
                  Concierge Medicine
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* This spacer div is now correctly placed outside the header. */}
      <div className="h-20"></div>

      {/* Main Content */}
      <main className="container mx-auto px-8 pt-32">
        {/* Hero Section */}
        <section className="text-center h-screen pt-20">
          <h1 className="text-5xl font-bold mb-6">Dr Abbott</h1>
          <div className="flex justify-center mb-6">
            <Image
              src="/about/headshotcolor.jpg"
              alt="Dr. Alexandra Abbott headshot"
              width={240}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mt-4 text-lg italic max-w-2xl mx-auto">
            Alexandra Abbott, MD is a <br /> board-certified sports medicine physician.
          </p>
        </section>

        {/* Segue */}
        <section className="mt-20 text-center">
          <p className="text-center italic mt-10 max-w-2xl mx-auto">
            Her expertise comes from years of education, training, and experience:
          </p>
        </section>

        {/* Collegiate Athlete */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Collegiate Athlete</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <Image
              src="/about/action.jpg"
              alt="Goalkeeper save"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <Image
              src="/about/action2.jpg"
              alt="Soccer action"
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </section>

        {/* Kinesiology */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">Kinesiology <br /> with emphasis in Exercise Science</h2>
          <div className="flex justify-center flex-wrap gap-6">
            <Image
              src="/about/kinesiology1.jpg"
              alt="Graph"
              width={250}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/about/kinesiology2.jpg"
              alt="Data"
              width={250}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/about/kinesiology3.jpg"
              alt="Building"
              width={250}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/about/kinesiology4.jpg"
              alt="Spreadsheet"
              width={250}
              height={200}
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Research */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">Prolific research in <br /> Sports Medicine, Orthopedics, and Pediatrics</h2>
          <div className="flex justify-center">
            <Image
              src="/about/researcher.jpg"
              alt="Researcher"
              width={100}
              height={200}
              className="rounded-lg"
            />
          </div>
          <p className="mt-4">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=Abbott+A&cauthor_id=35253062"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Dr. Abbott’s Publications
            </a>
          </p>
        </section>

        {/* Athletes Cared For */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Thousands of athletes cared for, <br /> including NCAA Division I, NBA, MLB athletes
          </h2>
          <div className="flex justify-center gap-6">
            <Image
              src="/about/NCAA.jpg"
              alt="NCAA Rose Bowl"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/about/NBA.jpg"
              alt="NBA court"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/about/MLB.jpg"
              alt="MLB stadium"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <p className="mt-4 text-sm italic">
            She currently practices at {" "}
            <a
              href="https://www.stanfordchildrens.org/en/doctor/alexandra-morgan-abbott"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Stanford University
            </a>
          </p>
        </section>

        {/* Fitness Passion */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">Lifelong passion and dedication to health, wellness, and physical fitness</h2>
          <div className="flex justify-center gap-6">
            <Image
              src="/about/snatch.jpg"
              alt="Snatch"
              width={250}
              height={350}
              className="rounded-lg"
            />
            <Image
              src="/about/yoga.jpg"
              alt="Yoga"
              width={250}
              height={350}
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Ask Dr Abbott */}
        <section className="text-center mt-16">
          <p className="text-lg italic max-w-2xl mx-auto">
            As a primary care physician who has done the reps herself, Dr. Abbott applies cutting-edge research in sports
            performance, injury prevention and treatment, nutrition, and more to help you turn the corner and reach your full
            potential.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/about/ask dr abbott.jpg"
              alt="Ask Dr Abbott"
              width={175}
              height={350}
              className="rounded-lg"
            />
          </div>
          <p className="mt-4">
            <Link href="/contact" className="text-blue-400 hover:underline font-semibold">
              Contact Us
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
