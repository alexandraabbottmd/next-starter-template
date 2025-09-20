"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-container">
      <nav>
        <ul>
          <li className={open ? "open" : ""}>
            <span onClick={() => setOpen(!open)}>Services ▾</span>
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
