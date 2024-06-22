import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome :: Judith Yusuf",
  description: "I'm Judith. Welcome to my little corner of the tech space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="w-[full] border border-link-dark">
        {children}
        </div>
      </body>
    </html>
  );
}
