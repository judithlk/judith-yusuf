import type { Metadata } from "next";
import { Inter, Lato, Lumanosimo } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ReactNode } from "react";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Welcome :: Judith Yusuf",
  description: "I'm Judith. Welcome to my little corner of the tech space.",
  openGraph: {
    title: "Welcome :: Judith Yusuf",
    description: "I'm Judith. Welcome to my little corner of the tech space.",
    url: "https://judithyusuf.vercel.app",
    siteName: "Judith Yusuf - Web Developer",
    images: [{ url: "https://judithyusuf.vercel.app/og.png",
      alt: "Judith Yusuf"
     }],
     type: "website"
  },
  twitter: {
    title: "Welcome :: Judith Yusuf",
    description: "I'm Judith. Welcome to my little corner of the tech space.",
    images: [{ url: "https://judithyusuf.vercel.app/og.png",
      alt: "Judith Yusuf"
     }],
     card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/logo.png" className="rounded-full" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
      </head>
      <ThemeProvider>
        <body className={`dark:bg-dark-bg ${lato.className}`}>
          <NavBar />
          <div className="w-[full]">{children}</div>
        </body>
      </ThemeProvider>
    </html>
  );
}
