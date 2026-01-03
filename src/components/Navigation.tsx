'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation links for all pages
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { 
    name: 'Consultancy', 
    href: '/venture-consultancy',
    subLinks: [
      { name: 'Overview', href: '/venture-consultancy' },
      { name: 'Services', href: '/venture-consultancy/services' },
      { name: 'Health Check', href: '/venture-consultancy/health-check' },
      { name: 'Contact', href: '/venture-consultancy/contact' },
    ]
  },
  { name: 'Contact', href: '/#contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="w-8 h-8 mr-2 sm:mr-4 rounded bg-white flex items-center justify-center">
            <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.subLinks ? (
                <div className="flex items-center gap-1 cursor-pointer text-white font-medium text-lg transition-colors hover:text-indigo-200">
                  <Link href={link.href}>{link.name}</Link>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-white font-medium text-lg transition-colors hover:text-indigo-200 focus:text-indigo-200 focus:outline-none"
                >
                  {link.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              <AnimatePresence>
                {link.subLinks && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                  >
                    {link.subLinks.map(subLink => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-indigo-500 overflow-hidden"
          >
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map(link => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <div className="flex flex-col gap-2">
                      <div className="text-white font-semibold text-lg py-2 flex justify-between items-center opacity-70">
                        {link.name}
                      </div>
                      <div className="pl-4 flex flex-col gap-2">
                        {link.subLinks.map(subLink => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="text-white font-medium text-lg transition-colors hover:text-indigo-200 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white font-medium text-lg transition-colors hover:text-indigo-200 focus:text-indigo-200 focus:outline-none py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
