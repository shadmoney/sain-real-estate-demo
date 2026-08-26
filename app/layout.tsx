import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAIN Real Estate Platform Demo",
  description: "A private product demonstration by SAIN Industries using synthetic property data.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
