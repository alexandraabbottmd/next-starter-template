{/* Top Navigation */}
<nav
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 3rem", // ✅ consistent spacing on both sides
    maxWidth: "1200px",   // ✅ keeps nav content within centered box
    margin: "0 auto",     // ✅ centers container
    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.6)",
  }}
>
  {/* Left: Site Title */}
  <Link
    href="/"
    style={{ color: "white", fontSize: "1rem", fontWeight: "bold", textDecoration: "none" }}
  >
    ABBOTT SPORT PERFORMANCE
  </Link>

  {/* Right: Services dropdown */}
  <div className="group relative inline-block text-left">
    <button
      style={{
        color: "white",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        background: "none",
        border: "none",
      }}
    >
      Services ▾
    </button>
    <div className="absolute right-0 hidden group-hover:flex flex-col mt-2 bg-black min-w-[200px] z-50">
      <Link href="/services/exercise" className="px-4 py-2 text-white hover:bg-gray-800">
        Exercise Programs
      </Link>
      <Link href="/services/rehab" className="px-4 py-2 text-white hover:bg-gray-800">
        Rehab Programs
      </Link>
      <Link href="/services/nutrition" className="px-4 py-2 text-white hover:bg-gray-800">
        Nutrition
      </Link>
      <Link href="/services/concierge" className="px-4 py-2 text-white hover:bg-gray-800">
        Concierge Medicine
      </Link>
    </div>
  </div>
</nav>
