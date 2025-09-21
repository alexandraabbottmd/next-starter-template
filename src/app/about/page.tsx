"use client";

import { useState } from "react"; // Importing useState for dropdown functionality
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [servicesOpen, setServicesOpen] = useState(false); // State to control dropdown visibility

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Fixed Header Banner */}
      <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
        <div className="container mx-auto px-8 h-20 flex justify-between items-center bg-black">
          <Link href="/" className="text-lg font-bold tracking-wide text-white">
            ABBOTT <br /> SPORT PERFORMANCE
          </Link>

          {/* Services Dropdown */}
          <nav
            style={{
              position: "absolute",
              top: "5%",
              right: "5%",
              zIndex: 20,
            }}
          >
            <div className="dropdown">
              <span
                className="dropdown-label font-semibold cursor-pointer"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
              </span>
              <div
                className={`dropdown-content ${servicesOpen ? "show" : ""}`}
                style={{
                  position: "absolute",
                  backgroundColor: "black",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
                  padding: "10px 0",
                  right: "0",
                  minWidth: "200px",
                  zIndex: "10",
                }}
              >
                <Link
                  href="/services/exercise"
                  onClick={() => setServicesOpen(false)}
                  className="px-4 py-2 block text-white hover:bg-gray-800"
                >
                  Exercise Programs
                </Link>

