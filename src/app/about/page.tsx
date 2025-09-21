"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
        <div className="container mx-auto px-6 lg:px-12 h-20 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold tracking-wide text-white">
            ABBOTT SPORT PERFORMANCE
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="font-semibold cursor-pointer">Services</span>
            {servicesOpen && (
              <ul className="absolute right-0 mt-2 bg-black text-white shadow-lg rounded min-w-[220px] list-none">
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
        </div>
      </header>

      {/* Hero */}
      <main className="pt-40">
        <section className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl font-bold mb-6">Dr. Alexandra Abbott</h1>
          <div className="flex justify-center mb-6">
            <Image
              src="/about/headshotcolor.jpg"
              alt="Dr. Alexandra Abbott headshot"
              width={240}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="text-lg italic max-w-2xl mx-auto">
            Alexandra Abbott, MD is a <br /> board-certified sports medicine physician.
          </p>
        </section>

        {/* Segue */}
        <section className="container mx-auto px-6 lg:px-12 text-center py-20">
          <p className="italic text-lg max-w-2xl mx-auto">
            Her expertise comes from years of education, training, and experience:
          </p>
        </section>

        {/* Collegiate Athlete */}
        <section className="container mx-auto px-6 lg:px-12 py-20">
          <h2 className="text-3xl font-bold mb-8">Collegiate Athlete</h2>
          <div className="flex flex-wrap justify-center gap-8">
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
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </section>

        {/* Kinesiology */}
        <section className="container mx-auto px-6 lg:px-12 text-center py-20">
          <h2 className="text-3xl font-bold mb-8">
            Kinesiology with emphasis in Exercise Science
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Image src="/about/kinesiology1.jpg" alt="Graph" width={250} height={200} className="rounded-lg" />
            <Image src="/about/kinesiology2.jpg" alt="Data" width={250} height={200} className="rounded-lg" />
            <Image src="/about/kinesiology3.jpg" alt="Building" width={250} height={200} className="rounded-lg" />
            <Image src="/about/kinesiology4.jpg" alt="Spreadsheet" width={250} height={200} className="rounded-lg" />
          </div>
        </section>

        {/* Research */}
        <section className="container mx-auto px-6 lg:px-12 text-center py-20">
          <h2 className="text-3xl font-bold mb-8">
            Prolific research in sports medicine, orthopedics, and pediatrics
          </h2>
          <div className="flex justify-center mb-6">
            <Image
              src="/about/researcher.jpg"
              alt="Researcher"
              width={320}
              height={250}
              className="rounded-lg"
            />
          </div>
          <p>
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
        <section className="container mx-auto px-6 lg:px-12 text-center py-20">
          <h2 className="text-3xl font-bold mb-8">
            Thousands of athletes cared for, including NCAA Division I, NBA, MLB athletes
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <Image src="/about/NCAA.jpg" alt="NCAA Rose Bowl" width={300} height={200} className="rounded-lg" />
            <Image src="/about/NBA.jpg" alt="NBA court" width={300} height={200} className="rounded-lg" />
            <Image src="/about/MLB.jpg" alt="MLB stadium" width={300} height={200} className="rounded-lg" />
          </div>
          <p className="text-sm italic">
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
        <section className="container mx-auto px-6 lg:px-12 text-center py-20">
          <h2 className="text-3xl font-bold mb-8">
            Lifelong passion and dedication to health, wellness, and physical fitness
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Image src="/about/snatch.jpg" alt="Snatch" width={250} height={350} className="rounded-lg" />
            <Image src="/about/yoga.jpg" alt="Yoga" width={250} height={350} className="rounded-lg" />
          </div>
        </section>

        {/* Ask Dr Abbott */}
        <section className="container mx-auto px-6 lg:px-12 text-center py-20">
          <p className="text-lg italic max-w-2xl mx-auto mb-6">
            As a primary care physician who has done the reps herself, Dr. Abbott applies cutting edge research
            in sports performance, injury prevention and treatment, nutrition, and more to help you reach your full potential.
          </p>
          <div className="flex justify-center mb-4">
            <Image src="/about/ask dr abbott.jpg" alt="Ask Dr Abbott" width={300} height={200} className="rounded-lg" />
          </div>
          <Link href="/contact" className="text-blue-400 hover:underline font-semibold">
            Ask Dr. Abbott
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-400 border-t border-gray-800">
        <p>Contact</p>
        <p>Disclaimers</p>
      </footer>
    </div>
  );
}


