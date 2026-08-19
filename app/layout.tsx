import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Company Memory",
  description: "Turn your company's scattered knowledge into a private, searchable AI memory in seven days.",
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
