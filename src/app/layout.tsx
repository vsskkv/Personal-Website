import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikram Singh Kainth",
  description: "Made by Vikram Singh Kainth",
  icons: {
    icon: [
      { url: '/favicon.ico?v=3', sizes: 'any' },
      { url: '/favicon.ico?v=3', sizes: '32x32' },
      { url: '/favicon.ico?v=3', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico?v=3',
    apple: '/favicon.ico?v=3',
  },
};

// Navigation links for all pages
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'News', href: '/news' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#contact' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Minimal Gradient Navigation Bar */}
        <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 mr-4 rounded bg-white flex items-center justify-center">
              <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
            </div>
          </Link>
          <div className="flex gap-6">
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
        </nav>
        {children}
      </body>
    </html>
  );
}
