import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Company Memory",
  description: "Give Claude Code a persistent memory for your business. Follow the free guide or get a done-for-you Company Memory in seven days.",
  other: {
    "codex-preview": "development",
  },
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
