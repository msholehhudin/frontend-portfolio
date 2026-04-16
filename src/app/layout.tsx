import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["200", "300", "400"],
});

export const metadata: Metadata = {
  title: "Muhammad Sholehhudin — Frontend Engineer",
  description:
    "Frontend Engineer specializing in React.js, Next.js, and modern frontend architecture. Based in Indonesia, open to remote opportunities worldwide.",
  keywords: [
    "Frontend Engineer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Remote",
    "Indonesia",
    "Muhammad Sholehhudin",
  ],
  authors: [{ name: "Muhammad Sholehhudin" }],
  openGraph: {
    title: "Muhammad Sholehhudin — Frontend Engineer",
    description:
      "Specializing in React.js, Next.js, and modern frontend architecture for global products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${fraunces.variable} font-sans bg-bg text-text-1 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
