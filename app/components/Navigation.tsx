"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-emerald-700 to-green-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">🌲</span>
            <span className="text-xl font-bold">Elite Man Tours</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700"
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

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-emerald-200 transition">
              Home
            </Link>
            <Link
              href="/adventures"
              className="hover:text-emerald-200 transition"
            >
              Adventures
            </Link>
            <Link href="/about" className="hover:text-emerald-200 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-emerald-200 transition">
              Contact
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block hover:text-emerald-200 transition">
              Home
            </Link>
            <Link
              href="/adventures"
              className="block hover:text-emerald-200 transition"
            >
              Adventures
            </Link>
            <Link
              href="/about"
              className="block hover:text-emerald-200 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block hover:text-emerald-200 transition"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
