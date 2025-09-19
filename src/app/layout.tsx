import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Abbott Sport Performance",
  description: "Physician-designed, custom exercise prescription.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {/* Site title + tagline */}
          <header className="masthead">
            <h1 className="site-title">
              <Link href="/">Abbott Sport Performance</Link>
            </h1>
            <p className="tagline">Physician-designed, custom exercise prescription</p>
          </header>

          {/* Horizontal banner nav with dropdowns */}
          <nav className="navbar" aria-label="Primary">
            <ul className="menu" role="menubar">
              <li className="has-dropdown" role="none">
                <Link role="menuitem" href="/#services">Services</Link>
                <ul className="dropdown" role="menu" aria-label="Services">
                  <li role="none"><Link role="menuitem" href="/services/exercise">Exercise Programs</Link></li>
                  <li role="none"><Link role="menuitem" href="/services/rehab">Rehab Programs</Link></li>
                  <li role="none"><Link role="menuitem" href="/services/nutrition">Nutrition</Link></li>
                  <li role="none"><Link role="menuitem" href="/services/concierge">Concierge Medicine</Link></li>
                </ul>
              </li>
              <li role="none"><Link role="menuitem" href="/consult">Consultation</Link></li>
              <li role="none"><Link role="menuitem" href="/about">About Dr. Abbott</Link></li>
              <li role="none"><Link role="menuitem" href="/#contact">Contact</Link></li>
            </ul>
          </nav>

          {children}

          <footer>
            © {new Date().getFullYear()} Abbott Sport Performance • Sunnyvale, CA
          </footer>
        </div>
      </body>
    </html>
  );
}
