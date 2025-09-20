"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          ABBOTT SPORT PERFORMANCE
        </Link>
        <div>
          <Link href="/services" className="text-lg font-semibold hover:underline">
            Services
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-8">
        <h1 className="text-5xl font-extrabold mb-6">Dr Abbott</h1>

        {/* Headshot with fade */}
        <div className="relative w-[350px] h-[450px] mx-auto">
          <Image
            src="/headshotcolor.jpg"
            alt="Dr. Abbott"
            fill
            className="object-cover rounded-lg"
            style={{
              maskImage:
                "radial-gradient(circle at center, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        {/* Subtitle with line break */}
        <p className="mt-6 text-xl text-center leading-relaxed max-w-2xl mx-auto">
          Alexandra Abbott, MD is a <br />
          board-certified sports medicine physician.
        </p>
      </section>

      {/* Intro line */}
      <section className="text-center mt-10">
        <p className="italic text-lg text-gray-300">
          Her expertise comes from years of education, training, and experience:
        </p>
      </section>

      {/* Collegiate Athlete */}
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Collegiate Athlete</h2>
        <div className="flex justify-center gap-8">
          <Image
            src="/goalie.jpg"
            alt="Goalkeeper save"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <Image
            src="/soccer.jpg"
            alt="Soccer action"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Kinesiology + Research */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Kinesiology with emphasis in Exercise Science
        </h2>
        <div className="flex justify-center gap-6 mb-12">
          <Image src="/graph.jpg" alt="Graph" width={200} height={150} className="rounded-md" />
          <Image src="/data.jpg" alt="Data" width={200} height={150} className="rounded-md" />
          <Image src="/building.jpg" alt="Building" width={200} height={150} className="rounded-md" />
        </div>

        <h2 className="text-3xl font-semibold mb-6">
          Prolific research in sports medicine, orthopedics, and pediatrics
        </h2>
        <div className="flex flex-col items-center">
          <Image src="/research.jpg" alt="Research photo" width={300} height={200} className="rounded-md" />
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/?term=Abbott+A&cauthor_id=35253062"
            target="_blank"
            className="mt-4 text-blue-400 hover:underline"
          >
            Dr. Abbott’s publications on PubMed
          </Link>
        </div>
      </section>

      {/* Athletes cared for */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl italic mb-6">
          Thousands of athletes cared for, including NCAA Division I, NBA, MLB athletes
        </h2>
        <div className="flex justify-center gap-8">
          <Image src="/rosebowl.jpg" alt="Rose Bowl" width={250} height={200} className="rounded-lg" />
          <Image src="/ucla.jpg" alt="UCLA Health" width={250} height={200} className="rounded-lg" />
          <Image src="/stadium.jpg" alt="Dodger Stadium" width={250} height={200} className="rounded-lg" />
        </div>
        <p className="mt-4 text-sm text-gray-400 italic">
          She currently practices at Stanford Children’s —{" "}
          <Link
            href="https://www.stanfordchildrens.org/en/doctor/alexandra-morgan-abbott.html"
            target="_blank"
            className="underline"
          >
            See profile here
          </Link>
        </p>
      </section>

      {/* Fitness passion */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl italic mb-6">
          Lifelong passion and dedication to health, wellness, and physical fitness
        </h2>
        <div className="flex justify-center gap-8">
          <Image src="/weights.jpg" alt="Workout" width={250} height={300} className="rounded-lg" />
          <Image src="/yoga.jpg" alt="Stretching" width={250} height={300} className="rounded-lg" />
        </div>
      </section>

      {/* Closing statement */}
      <section className="mt-20 text-center max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed">
          As a primary care physician <span className="italic">who has done the reps herself</span>, Dr. Abbott
          applies cutting edge research in sports performance, injury prevention and treatment, nutrition, and
          more to help you turn the corner and reach your full potential.
        </p>
      </section>

      {/* Ask Dr. Abbott */}
      <section className="mt-20 text-center">
        <Image src="/sideline.jpg" alt="Sideline photo" width={250} height={250} className="rounded-full mx-auto" />
        <Link href="/consultation" className="block mt-6 text-xl font-semibold text-blue-400 hover:underline">
          Ask Dr. Abbott
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500 space-x-4">
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/disclaimer" className="hover:underline">
          Disclaimer
        </Link>
      </footer>
    </div>
  );
}
