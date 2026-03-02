import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EasyFlow | Smarter Task & Logistics for E-commerce",
  description: "The unified operating system for e-commerce brands. Capture tasks, sync your calendar with Gantt, manage BOMs, and automate restocking — all in one timeline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-[100dvh] bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-accent)]/20"
        )}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 w-full relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
