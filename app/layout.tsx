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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const title = "Suwantha Darshana | Software Engineer";
const description =
  "Portfolio of Suwantha Darshana, a software engineer and full stack developer crafting scalable, user-centric products.";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: title,
    template: "%s | Suwantha Darshana",
  },
  description,
  keywords: [
    "Suwantha Darshana",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Spring Boot",
    "Node.js",
    "Portfolio",
  ],
  applicationName: "Suwantha Darshana Portfolio",
  authors: [{ name: "Suwantha Darshana", url: "https://github.com/SuwanthaDarshana" }],
  creator: "Suwantha Darshana",
  publisher: "Suwantha Darshana",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl ?? "https://suwanthadarshana.vercel.app",
    title,
    description,
    siteName: "Suwantha Darshana Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Portrait of Suwantha Darshana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-teal-400 selection:text-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
