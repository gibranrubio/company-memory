import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.buildmyknowledge.com"),
  title: "The Knowledge | A working memory for your business",
  description: "The most important database in your company is still your head. I build it into a private AI memory your whole team can ask. Free guide, or done for you in seven days.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Knowledge | A working memory for your business",
    description: "The most important database in your company is still your head. I build it into a private AI memory your whole team can ask. Free guide, or done for you in seven days.",
    url: "https://www.buildmyknowledge.com",
    siteName: "The Knowledge",
    type: "website",
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
