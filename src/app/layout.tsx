import "./globals.css";
import { Playfair_Display, Open_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Abbott Sport Performance",
  description: "Science in every rep — physician-designed, evidence-based training and rehab.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
