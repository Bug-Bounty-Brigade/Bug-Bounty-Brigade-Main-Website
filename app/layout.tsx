import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextAuthProvider from "./Providers.js"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bug Bounty Brigade",
  description: " Join the leading community of ethical hackers and cybersecurity enthusiasts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
