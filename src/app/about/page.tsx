"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
{/* Fixed Header Banner */}
<header className="fixed top-0 left-0 w-full h-16 bg-black bg-opacity-90 backdrop-blur flex justify-between items-center px-6 shadow-md z-50">
  <Link href="/" className="text-lg font-bold tracking-wide text-white">
    ABBOTT SPORT PERFORMANCE
  </Link>

  <div
    className="relative"
    onMouseEnter={() => setServicesOpen(true)}
    onMouseLeave={() => setServicesOpen(false)}
  >
    <span className="font-semibold cursor-pointer">Services ▾</span>
    {servicesOpen && (
  <ul className="absolute right-0 mt-2 bg-black text-white shadow-lg rounded min-w-[200px] translate-x-[-20%]">
        <li className="px-4 py-2 hover:bg-gray-800">
          <Link href="/services/exercise">Exercise Programs</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-800">
          <Link href="/services/rehab">Rehab Programs</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-800">
          <Link href="/services/nutrition">Nutrition</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-800">
          <Link href="/services/concierge">Concierge Medicine</Link>
        </li>
      </ul>
    )}
  </div>
</header>

{/* Spacer so content starts below the header */}
<div className="h-16" />


      {/* Hero */}
      <section className="text-center mt-24">
        <h1 className="text-4xl font-bold mb-6">Dr Abbott</h1>
        <div className="flex justify-center">
          <Image
            src="/about/headshotcolor.jpg"
            alt="Headshot"
            width={320}
            height={400}
            className="rounded-lg"
          />
        </div>
        <p className="mt-4 text-lg">
          Alexandra Abbott, MD is a <br /> board-certified sports medicine
          physician.
        </p>
      </section>

      {/* Segue */}
      <p className="text-center italic mt-10">
        Her expertise comes from years of education, training, and experience:
      </p>

      {/* Collegiate Athlete */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-6">Collegiate Athlete</h2>
        <div className="flex justify-center gap-6">
          <Image
            src="/about/action.jpg"
            alt="Goalkeeper save"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src="/about/action2.jpg"
            alt="Soccer action"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Kinesiology */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Kinesiology with emphasis in Exercise Science
        </h2>
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
        <h2 className="text-3xl font-bold mb-6">
          Prolific research in sports medicine, orthopedics, and pediatrics
        </h2>
        <div className="flex justify-center">
          <Image
            src="/about/researcher.jpg"
            alt="Researcher"
            width={320}
            height={250}
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
            Dr. Abbott’s publications (link to PubMed)
          </a>
        </p>
      </section>

      {/* Athletes cared for */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Thousands of athletes cared for, including NCAA Division I, NBA, MLB
          athletes
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
          She currently practices at Stanford Children’s —{" "}
          <a
            href="https://www.stanfordchildrens.org/en/doctor/alexandra-morgan-abbott"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            view profile
          </a>
        </p>
      </section>

      {/* Fitness passion */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Lifelong passion and dedication to health, wellness, and physical
          fitness
        </h2>
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
          As a primary care physician who has done the reps herself, Dr. Abbott
          applies cutting edge research in sports performance, injury prevention
          and treatment, nutrition, and more to help you turn the corner and
          reach your full potential.
        </p>
        <div className="mt-6 flex justify-center">
          <Image
            src="/about/ask dr abbott.jpg"
            alt="Ask Dr Abbott"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
        <p className="mt-4">
          <Link
            href="/contact"
            className="text-blue-400 hover:underline font-semibold"
          >
            Ask Dr. Abbott
          </Link>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 pb-6 text-sm text-gray-400">
        <p>Contact</p>
        <p>Disclaimers</p>
      </footer>
    </div>
  );
}
