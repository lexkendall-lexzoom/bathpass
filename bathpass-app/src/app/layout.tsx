import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bathpass — Membership for Bathhouse Culture",
  description:
    "Flexible credit-based membership across the best bathhouses, saunas, and recovery spaces. Book with credits. Go with others. Make it ritual.",
  openGraph: {
    title: "Bathpass — Membership for Bathhouse Culture",
    description:
      "Flexible credit-based membership across the best bathhouses, saunas, and recovery spaces.",
    siteName: "Bathpass",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
