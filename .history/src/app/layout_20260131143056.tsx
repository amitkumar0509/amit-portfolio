import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "AI & Machine Learning Engineer | Real-Time Intelligent Systems",
    template: "%s | AI/ML Portfolio",
  },
  description:
    "Production-grade portfolio showcasing ML pipelines, data analytics, and real-time AI systems engineering.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "AI & Machine Learning Engineer | Real-Time Intelligent Systems",
    description:
      "Production-grade portfolio with ML pipelines, data-driven systems, and real-time AI engineering.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
