import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = "https://trainball.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TrainBall — Superpower Systemized Sport Platform",
    template: "%s · TrainBall",
  },
  description:
    "TrainBall turns football practice into measurable progress. Track your skills on a dynamic radar, follow structured video training, and level up your game.",
  applicationName: "TrainBall",
  keywords: [
    "football training",
    "soccer drills",
    "skill tracking",
    "sports app",
    "training app",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "TrainBall — Superpower Systemized Sport Platform",
    description:
      "Turn every training into a step forward. Structured football programs, recorded reps, synced fitness and a skill radar that grows as you train.",
    siteName: "TrainBall",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrainBall — Superpower Systemized Sport Platform",
    description:
      "Turn every training into a step forward. Structured football programs and a skill radar that grows as you train.",
  },
  icons: { icon: "../public/trainball-logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#060d0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-brand/30 selection:text-foreground">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
