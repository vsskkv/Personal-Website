import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Analytics } from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Venture Consultancy',
    default: 'Power Platform Consultant UK | Vikram Singh Kainth | Venture Consultancy',
  },
  description: 'Expert Power Platform and Microsoft 365 automation consultancy for UK small businesses. Save time with Power Automate, Power Apps, and Power BI.',
  metadataBase: new URL('https://vikramsinghkainth.com'),
  alternates: {
    canonical: 'https://vikramsinghkainth.com/',
  },
  openGraph: {
    title: 'Power Platform Consultant UK | Venture Consultancy',
    description: 'Specialist Microsoft 365 and Power Platform automation for UK small businesses.',
    url: 'https://vikramsinghkainth.com/',
    siteName: 'Venture Consultancy',
    locale: 'en_GB',
    type: 'website',
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <ErrorBoundary>
          <Navigation />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
