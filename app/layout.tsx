// Components
import { Toaster } from "@/components/ui/toaster"

// Metadata
import type { Metadata } from "next";

// Fonts
import { Inter } from "next/font/google";

// Styles
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Posts App",
  description: "Posts App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
