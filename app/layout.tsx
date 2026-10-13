import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { Providers } from "@/components/ui";
import "./globals.css";

const anton = Anton({ variable: "--font-anton", weight: "400", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitness Plus — Wellness & Good Life | Gulshan, Dhaka",
  description:
    "Redesign concept for Fitness Plus, Gulshan: premium gym, separate ladies' gym, in-house physiotherapist, Fit Revolution programs and corporate wellness.",
  // Design concept / proposal preview: keep it out of search results
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#070708" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} antialiased`}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
