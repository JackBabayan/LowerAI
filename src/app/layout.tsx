import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noctuatech.org"),
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
    images: [
      {
        url: "/Logo_Noctua_Tech.png",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", type: "image/x-icon" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
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
