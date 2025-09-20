import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-wide hover:text-gray-300"
        >
          ABBOTT SPORT PERFORMANCE
        </Link>
        <nav>
          <div className="relative group">
            <button className="text-lg font-bold hover:text-gray-300">
              Services
            </button>
            <ul className="absolute right-0 mt-2 hidden w-56 bg-black text-white rounded-md shadow-lg group-hover:block list-none p-0 m-0">
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

      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-extrabold mb-6">Dr Abbott</h1>
        <div className="flex justify-center mb-6">
          <div className="relative w-[300px] h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/dr-abbott.jpg"
              alt="Dr. Abbott"
              fill
              className="object-cover rounded-xl"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
        </div>
        <p className="text-lg max-w-xl mx-auto leading-relaxed">
          Alexandra Abbott, MD is a <br />
          <span className="font-semibold">
            board-certified sports medicine physician.
          </span>
        </p>
      </section>

      {/* Experience Segue */}
      <section className="text-center mt-10 mb-6">
        <p className="italic text-gray-300">
          Her expertise comes from years of education, training, and experience:
        </p>
      </section>

      {/* Collegiate Athlete */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold mb-6">Collegiate Athlete</h2>
        <div className="flex justify-center gap-6">
          <Image
            src="/images/soccer1.jpg"
            alt="Soccer goalie"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <Image
            src="/images/soccer2.jpg"
            alt="Soccer field play"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Kinesiology + Research */}
      <section className="grid md:grid-cols-2 gap-12 text-center py-10 px-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Kinesiology with emphasis in Exercise Science
          </h2>
          <div className="flex justify-center gap-4">
            <Image
              src="/images/kinesiology1.jpg"
              alt="Kinesiology chart"
              width={200}
              height={150}
              className="rounded-lg object-cover"
            />
            <Image
              src="/images/kinesiology2.jpg"
              alt="Kinesiology research"
              width={200}
              height={150}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Prolific research in sports medicine, orthopedics, and pediatrics
          </h2>
          <Image
            src="/images/research.jpg"
            alt="Research"
            width={250}
            height={200}
            className="rounded-lg object-cover mx-auto mb-3"
          />
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/?term=Abbott+A&cauthor_id=35253062"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            View Dr. Abbott’s publications on PubMed
          </Link>
        </div>
      </section>

      {/* Patients */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-bold mb-6">
          Thousands of athletes cared for, including NCAA Division I, NBA, MLB athletes
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <Image
            src="/images/rosebowl.jpg"
            alt="Rose Bowl"
            width={250}
            height={180}
            className="rounded-lg object-cover"
          />
          <Image
            src="/images/ucla.jpg"
            alt="UCLA Health"
            width={250}
            height={180}
            className="rounded-lg object-cover"
          />
          <Image
            src="/images/stadium.jpg"
            alt="Stadium"
            width={250}
            height={180}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Passion + Fitness */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-bold mb-6">
          Lifelong passion and dedication to health, wellness, and physical fitness
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <Image
            src="/images/fitness1.jpg"
            alt="Workout 1"
            width={250}
            height={300}
            className="rounded-lg object-cover"
          />
          <Image
            src="/images/fitness2.jpg"
            alt="Workout 2"
            width={250}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Closing */}
      <section className="text-center py-10 px-6 max-w-3xl mx-auto">
        <p className="mb-6">
          As a primary care physician <em>who has done the reps herself</em>, Dr.
          Abbott applies cutting edge research in sports performance, injury
          prevention and treatment, nutrition, and more to help you turn the
          corner and reach your full potential.
        </p>
        <Link
          href="/contact"
          className="text-lg font-bold text-blue-400 hover:underline"
        >
          Ask Dr. Abbott
        </Link>
      </section>
    </div>
  );
}
