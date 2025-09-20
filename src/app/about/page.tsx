"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center py-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-wide hover:opacity-80"
        >
          ABBOTT SPORT PERFORMANCE
        </Link>
        <div className="relative group">
          <button className="font-semibold hover:opacity-80">
            Services <span className="ml-1">▼</span>
          </button>
          <div className="absolute right-0 mt-2 hidden group-hover:block bg-black rounded shadow-lg">
            <ul className="p-2 space-y-1 text-sm">
              <li>
                <Link href="/exercise" className="hover:underline">
                  Exercise Programs
                </Link>
              </li>
              <li>
                <Link href="/rehab" className="hover:underline">
                  Rehab Programs
                </Link>
              </li>
              <li>
                <Link href="/nutrition" className="hover:underline">
                  Nutrition
                </Link>
              </li>
              <li>
                <Link href="/concierge" className="hover:underline">
                  Concierge Medicine
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="text-center mt-10">
        <h1 className="text-4xl font-extrabold mb-6">Dr Abbott</h1>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-[300px] h-[400px]">
            <Image
              src="/about/headshotcolor.jpg"
              alt="Dr Abbott"
              fill
              priority
              className="object-contain rounded-xl"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
              }}
            />
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-center">
            Alexandra Abbott, MD is a <br /> board-certified sports medicine
            physician.
          </p>
        </div>
      </section>
  


      {/* Segue */}
      <section className="text-center mt-12">
        <p className="italic text-gray-300">
          Her expertise comes from years of education, training, and experience:
        </p>
      </section>

      {/* Collegiate Athlete */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">Collegiate Athlete</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Image src="/about/action.jpg" alt="Action" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/about/action2.jpg" alt="Action 2" width={300} height={200} className="rounded-lg object-cover" />
        </div>
      </section>

      {/* Kinesiology & Research */}
      <section className="mt-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-xl font-semibold mb-4">Kinesiology with emphasis in Exercise Science</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Image src="/about/kinesiology1.jpg" alt="Kinesiology 1" width={200} height={150} className="rounded-lg object-contain" />
            <Image src="/about/kinesiology2.jpg" alt="Kinesiology 2" width={200} height={150} className="rounded-lg object-contain" />
            <Image src="/about/kinesiology3.jpg" alt="Kinesiology 3" width={200} height={150} className="rounded-lg object-contain" />
            <Image src="/about/kinesiology4.jpg" alt="Kinesiology 4" width={200} height={150} className="rounded-lg object-contain" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Prolific research in sports medicine, orthopedics, and pediatrics</h2>
          <Image src="/about/researcher.jpg" alt="Researcher" width={250} height={250} className="rounded-lg object-cover mx-auto" />
          <p className="mt-4 text-center">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=Abbott+A&cauthor_id=35253062"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Dr. Abbott’s publications on PubMed
            </a>
          </p>
        </div>
      </section>

      {/* Athletes cared for */}
      <section className="mt-16 text-center">
        <p className="italic mb-6">
          Thousands of athletes cared for, including NCAA Division I, NBA, MLB athletes
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Image src="/about/NCAA.jpg" alt="NCAA" width={250} height={200} className="rounded-lg object-cover" />
          <Image src="/about/NBA.jpg" alt="NBA" width={250} height={200} className="rounded-lg object-cover" />
          <Image src="/about/MLB.jpg" alt="MLB" width={250} height={200} className="rounded-lg object-cover" />
        </div>
        <p className="mt-4 text-sm text-gray-400">
          She currently practices at{" "}
          <a
            href="https://www.stanfordchildrens.org/en/doctor/alexandra-morgan-abbott.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200"
          >
            Stanford Children’s
          </a>.
        </p>
      </section>

      {/* Lifelong passion */}
      <section className="mt-16 text-center">
        <h2 className="text-xl font-semibold mb-6">
          Lifelong passion and dedication to health, wellness, and physical fitness
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Image src="/about/snatch.jpg" alt="Snatch" width={250} height={350} className="rounded-lg object-cover" />
          <Image src="/about/yoga.jpg" alt="Yoga" width={250} height={350} className="rounded-lg object-cover" />
        </div>
      </section>

      {/* Final section */}
      <section className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <p className="text-lg leading-relaxed">
          As a primary care physician <span className="italic">who has done the reps herself</span>, Dr. Abbott applies cutting edge
          research in sports performance, injury prevention and treatment, nutrition, and more to help you turn the corner and reach your full potential.
        </p>
        <div className="text-center">
          <Image src="/about/ask dr abbott.jpg" alt="Ask Dr Abbott" width={250} height={250} className="rounded-lg object-cover mx-auto" />
          <Link href="/contact" className="block mt-4 text-blue-400 hover:underline">
            Ask Dr. Abbott
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-400 text-sm">
        <p>Contact</p>
        <p>Disclaimers</p>
      </footer>
    </main>
  );
}
