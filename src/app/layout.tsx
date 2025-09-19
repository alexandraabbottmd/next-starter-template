import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Abbott Sport Performance",
  description: "Physician-designed, custom exercise prescription.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="masthead">
            <h1 className="site-title">Abbott Sport Performance</h1>
            <p className="tagline">Physician-designed, custom exercise prescription</p>
          </header>

          <nav className="navbar" aria-label="Primary">
            <ul className="menu" role="menubar">
              <li className="has-dropdown" role="none">
                <a role="menuitem" href="/#services">Services</a>
                <ul className="dropdown" role="menu" aria-label="Services">
                  <li role="none"><a role="menuitem" href="/services/exercise">Exercise Programs</a></li>
                  <li role="none"><a role="menuitem" href="/services/rehab">Rehab Programs</a></li>
                  <li role="none"><a role="menuitem" href="/services/nutrition">Nutrition</a></li>
                  <li role="none"><a role="menuitem" href="/services/concierge">Concierge Medicine</a></li>
                </ul>
              </li>
              <li role="none"><a role="menuitem" href="/consult">Consultation</a></li>
              <li role="none"><a role="menuitem" href="/about">About Dr. Abbott</a></li>
              <li role="none"><a role="menuitem" href="/#contact">Contact</a></li>
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

