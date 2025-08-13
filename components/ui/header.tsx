"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <ul className="hidden md:flex flex-1 items-center justify-center gap-6">
            <li>
              <Link
                href="https://gosheaper.info"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </Link>
            </li>
            <li className="relative group">
              <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Services
              </button>
              <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <Link
                    href="/services/shipping"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Shipping Services
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>


        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 z-40 h-full w-full bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex h-16 items-center justify-between px-4">
          <Logo />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 p-2"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="https://gosheaper.info"
                className="block py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="flex items-center justify-between py-3 text-lg font-medium text-gray-800 cursor-pointer hover:text-gray-900 transition-colors">
                  Services
                  <svg
                    className="h-5 w-5 transform transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="mt-2 space-y-2 pl-4">
                  <li>
                    <Link
                      href="/services/shipping"
                      className="block py-2 text-base text-gray-600 hover:text-gray-800 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Shipping Services
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
