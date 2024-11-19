import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


import { ReactNode } from 'react'; // Import ReactNode for typing

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <header>
          {/* Include your Navbar component here */}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
