"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black text-white font-sans">
      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 fixed top-0 left-0 right-0 bg-black z-50">
        <Link
          href="/"
          className="text-base font-bold tracking-wide hover:opacity-80"
        >
          ABBOTT SPORT PERFORMANCE
        </Link>
        <div className="relative group">
          <span className="font-bold cursor-pointer hover:opacity-80">
            Services
          </span>
          <div className="absolute right-0 mt-2 hidden group-hover:block bg-black rounded shadow-lg">
            <ul className="p-2 text-sm space-y-2">
              <li><Link href="/exercise" className="hover:underline">Exercise Programs</Link></li>
              <li><Link href="/rehab" className="hover:underline">Rehab Programs</Link></li>
              <li><Link href="/nutrition" className="hover:underline">Nutrition</Link></li>
              <li><Link href="/concierge" className="hover:underline">Concierge Medicine</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* INTRO */}
      <section className="pt-32 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Dr Abbott</h1>

        <div className="relative mx-auto w-[280px] h-[360px] rounded-xl overflow-hidden">
          <Image
            src="/about/headshotcolor.jpg"
            alt="Dr Abbott"
            fill
            className="object-cover rounded-xl"
          />
          {/* gradient fade edges */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              backgroundColor: "black",
            }}
          />
        </div>

        <p className="mt-6 text-lg leading-snug">
          Alexandra Abbott, MD is a <br />
          board-certified sports medicine physician.
        </p>
      </section>

      {/* SEGUE */}
      <p className="italic text-center text-gray-300 mt-12">
        Her expertise comes from years of education, training, and experience:
      </p>

      {/* COLLEGIATE ATHLETE */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">Collegiate Athlete</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <Image src="/about/action.jpg" alt="Action" width={280} height={200} className="rounded-lg object-contain" />
          <Image src="/about/action2.jpg" alt="Action 2" width={280} height={200} className="rounded-lg object-contain" />
        </div>
      </section>

      {/* KINESIOLOGY + RESEARCH */}
      <section className="mt-16 grid md:grid-cols-2 gap-12 items-start px-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">
            Kinesiology with emphasis in Exercise Science
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Image src="/about/kinesiology1.jpg" alt="" width={150} height={120} className="rounded-lg object-contain" />
            <Image src="/about/kinesiology2.jpg" alt="" width={150} height={120} className="rounded-lg object-contain" />
            <Image src="/about/kinesiology3.jpg" alt="" width={150} height={120} className="rounded-lg object-contain" />
            <Image src="/about/kinesiology4.jpg" alt="" width={150} height={120} className="rounded-lg object-contain" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">
            Prolific research in sports medicine, orthopedics, and pediatrics
          </h2>
          <Image src="/about/researcher.jpg" alt="Researcher" width={250} height={250} className="rounded-lg mx-auto" />
          <p className="mt-4">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=Abbott+A&cauthor_id=35253062"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Dr. Abbott’s publications on PubMed
            </a>
          </p>
        </div>
      </section>

      {/* ATHLETES */}
      <section className="mt-16 text-center">
        <p className="italic mb-6">
          Thousands of athletes cared for, including NCAA Division I, NBA, MLB athletes
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <Image src="/about/NCAA.jpg" alt="NCAA" width={240} height={180} className="rounded-lg object-cover" />
          <Image src="/about/NBA.jpg" alt="NBA" width={240} height={180} className="rounded-lg object-cover" />
          <Image src="/about/MLB.jpg" alt="MLB" width={240} height={180} className="rounded-lg object-cover" />
        </div>
        <p className="mt-4 text-sm text-gray-400">
          She currently practices at{" "}
          <a
            href="https://www.stanfordchildrens.org/en/doctor/alexandra-morgan-abbott.html"
            className="underline hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stanford Children’s
          </a>.
        </p>
      </section>

      {/* PASSION */}
      <section className="mt-16 text-center">
        <h2 className="text-xl font-semibold mb-6">
          Lifelong passion and dedication to health, wellness, and physical fitness
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <Image src="/about/snatch.jpg" alt="Snatch" width={250} height={350} className="rounded-lg object-cover" />
          <Image src="/about/yoga.jpg" alt="Yoga" width={250} height={350} className="rounded-lg object-cover" />
        </div>
      </section>

      {/* FINAL */}
      <section className="mt-16 grid md:grid-cols-2 gap-12 px-8 items-center">
        <p className="text-lg leading-relaxed">
          As a primary care physician who has done the reps herself, Dr. Abbott applies
          cutting-edge research in sports performance, injury prevention and treatment,
          nutrition, and more to help you turn the corner and reach your full potential.
        </p>
        <div className="text-center">
          <Image src="/about/ask dr abbott.jpg" alt="Ask Dr Abbott" width={250} height={250} className="rounded-lg mx-auto" />
          <Link href="/contact" className="block mt-4 text-blue-400 hover:underline">
            Ask Dr. Abbott
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 text-center text-gray-400 text-sm pb-8">
        <p>Contact</p>
        <p>Disclaimers</p>
      </footer>
    </main>
  );
}
