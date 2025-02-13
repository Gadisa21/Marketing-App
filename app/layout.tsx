import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import {SearchProvider} from "@/context/SearchContext";

export const metadata: Metadata = {
  title: "Marketing App",
  description: "Marketing App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
        <NavBar />
        {children}
        </SearchProvider>
      </body>
    </html>
  );
}
