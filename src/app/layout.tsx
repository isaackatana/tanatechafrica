// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// App Metadata
export const metadata: Metadata = {
  title: "Tana Tech Africa — Digital Solutions",
  description:
    "Tana Tech Africa offers website & mobile app development, branding, and digital services tailored for businesses in Africa.",
  openGraph: {
    title: "Tana Tech Africa",
    description:
      "Website & mobile app development, branding, and digital solutions for Africa.",
    images: ["/meta-images/home-meta.jpg"],
    url: "https://tanatechafrica.vercel.app", // adjust as needed
  },
  icons: {
    icon: "/TTS-logo-icon.png",
  },
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-white text-black dark:bg-gray-950 dark:text-white antialiased`}
      >
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
          <Header />
          <main className="container mx-auto px-4 py-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
