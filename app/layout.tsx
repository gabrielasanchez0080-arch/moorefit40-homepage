import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MooreFIT 40+",
  description: "Get Moore from your 40s and beyond.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
