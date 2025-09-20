"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "absolute",
        top: "2%",
        right: "5%",
        zIndex: 5,
        color: "#fff",
        fontWeight: 500,
        fontSize: "14px",
        letterSpacing: "1px",
      }}
    >
      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0, padding: 0 }}>
          <li className={open ? "open" : ""} style={{ position: "relative" }}>
            <span
              onClick={() => setOpen(!open)}
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              Services ▾
            </span>
            <ul className="dropdown">
              <li><Link href="/services/exercise">Exercise Programs</Link></li>
              <li><Link href="/services/rehab">Rehab Programs</Link></li>
              <li><Link href="/services/nutrition">Nutrition</Link></li>
              <li><Link href="/services/concierge">Concierge Medicine</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
