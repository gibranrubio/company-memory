import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clone Your Brain | Company Memory",
  description: "Turn everything you know about your company into a private AI memory. Follow the free guide or get a done-for-you Brain Clone in seven days.",
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
