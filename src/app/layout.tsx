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
