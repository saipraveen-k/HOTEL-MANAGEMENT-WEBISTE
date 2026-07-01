import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "StayEase - Hotel Management & Booking Platform",
  description: "Production-ready hotel booking SaaS with Firebase and Next.js."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main className="mx-auto w-full max-w-7xl px-4 py-8">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
