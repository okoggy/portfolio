import type { Metadata, Viewport } from "next";
import { Albert_Sans, Fragment_Mono } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const fragmentMono = Fragment_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-fragment-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swayam S Rai — Personal Portfolio",
  description:
    "Developer sharpening how I think through algorithms and data structures, one problem at a time.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${fragmentMono.variable}`}>
      <body className="bg-paper text-ink antialiased selection:bg-blue-200/50 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
