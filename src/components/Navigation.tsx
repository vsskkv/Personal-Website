'use client';
import { useState } from 'react';
import Link from 'next/link';

// Navigation links for all pages
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="w-8 h-8 mr-2 sm:mr-4 rounded bg-white flex items-center justify-center">
            <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white font-medium text-lg transition-colors hover:text-indigo-200 focus:text-indigo-200 focus:outline-none"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-indigo-500">
          <div className="flex flex-col gap-3 pt-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white font-medium text-lg transition-colors hover:text-indigo-200 focus:text-indigo-200 focus:outline-none py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}