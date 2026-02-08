"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBase = `transform transition-all duration-300 ease-in-out`;

  return (
    <>
      <nav
        className={`w-full ${navBase} ${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-50 bg-white/75 text-gray-900 backdrop-blur-md shadow-md"
            : "relative bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              {/* <span className="text-2xl">🌲</span> */}
              <span className="text-lg font-semibold">EliteManTours</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className={`hover:underline transition ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                Home
              </Link>
              <Link
                href="/adventures"
                className={`hover:underline transition ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                Adventures
              </Link>
              <Link
                href="/about"
                className={`hover:underline transition ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`hover:underline transition ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div
              className={`md:hidden pb-4 space-y-2 ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              <Link href="/" className="block hover:underline transition">
                Home
              </Link>
              <Link
                href="/adventures"
                className="block hover:underline transition"
              >
                Adventures
              </Link>
              <Link href="/about" className="block hover:underline transition">
                About
              </Link>
              <Link
                href="/contact"
                className="block hover:underline transition"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* spacer to prevent layout shift when nav becomes fixed */}
      {isScrolled && <div className="h-16" />}
    </>
  );
}
