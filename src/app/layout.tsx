import type { Metadata } from "next";
import { Inter, Lato, Lumanosimo } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] })
const lato = Lato({subsets: ["latin"], weight: ["400"]})

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
      <body className={lato.className}>
        <NavBar />
        <div className="w-[full]">
        {children}
        </div>
      </body>
    </html>
  );
}
