import type { Metadata } from "next";
import "@fontsource-variable/vazirmatn/index.css";
import "./globals.css";
import localFont from "next/font/local";
import { Inter, Oswald } from "next/font/google";

export const metadata: Metadata = {
  title: "Mohammad Moslemkhani",
  description: "Tennis and performance conditioning specialist",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon.ico", type: "image/svg+xml" }],
  },
};
const yekanbakh = localFont({
  src: [
      {
          path: "../public/fonts/yekanbakh/YekanBakhFaNum-Thin.woff2",
          weight: "100",
          style: "normal",
      },
      {
          path: "../public/fonts/yekanbakh/YekanBakhFaNum-Light.woff2",
          weight: "300",
          style: "normal",
      },
      {
          path: "../public/fonts/yekanbakh/YekanBakhFaNum-Regular.woff2",
          weight: "400",
          style: "normal",
      },
      {
          path: "../public/fonts/yekanbakh/YekanBakhFaNum-SemiBold.woff2",
          weight: "600",
          style: "normal",
      },
      {
          path: "../public/fonts/yekanbakh/YekanBakhFaNum-Bold.woff2",
          weight: "700",
          style: "normal",
      },
      {
          path: "../public/fonts/yekanbakh/YekanBakhFaNum-Black.woff2",
          weight: "900",
          style: "normal",
      },
  ],
  variable: "--font-yekanbakh",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className={`h-full antialiased ${yekanbakh.variable} ${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
