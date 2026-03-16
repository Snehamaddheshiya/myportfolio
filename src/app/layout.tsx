import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sneha Maddheshiya | Computer Science Engineer",
  description:
    "Portfolio of Sneha Maddheshiya, showcasing projects in Java, Python, Web Development, and achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jbMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <div className="fixed top-0 left-0 bg-accent rounded-full pointer-events-none z-[10000] hidden md:block w-1 h-1" />
        {children}
      </body>
    </html>
  );
}
