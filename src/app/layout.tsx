import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Car Garage Auto Service | #1 Car Repair & Service in Al Quoz Dubai — 30% Off",
  description:
    "Trusted car repair & mechanical service in Al Quoz, Dubai for 20+ years. Major & minor car service, engine repair, brake service, diagnostics & more. Open 24/7. Call now for FLAT 30% OFF!",
  keywords:
    "car garage dubai, car repair al quoz, car service dubai, engine repair dubai, brake repair dubai, car mechanic dubai, 24/7 car garage, car maintenance dubai",
  openGraph: {
    title: "Car Garage Auto Service | Expert Car Repair in Al Quoz Dubai",
    description:
      "20+ years of trusted car repair & service. FLAT 30% OFF on all mechanical services. Open 24/7 in Al Quoz, Dubai. Call now!",
    type: "website",
    locale: "en_AE",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
