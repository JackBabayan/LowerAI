import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noctua Tech - AI Solutions for Legal Infrastructure",
  description:
    "Noctua Tech modernizes Armenia's legal infrastructure through AI, making legal services faster and more accessible for government, professionals, and citizens.",
  keywords: [
    "Noctua Tech",
    "LegalTech",
    "GovTech",
    "Armenia",
    "AI legal assistant",
    "legal infrastructure",
  ],
  openGraph: {
    title: "Noctua Tech - AI Solutions for Legal Infrastructure",
    description:
      "AI-powered systems transforming legal access for government and citizens in Armenia.",
    type: "website",
    url: "https://noctuatech.org",
    siteName: "Noctua Tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
