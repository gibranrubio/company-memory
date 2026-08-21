import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Knowledge | A working memory for your business",
  description: "The most important database in your company is still your head. I build it into a private AI memory your whole team can ask. Free guide, or done for you in seven days.",
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
