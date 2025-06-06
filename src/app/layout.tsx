import type { Metadata } from "next";
import NavBar from "./components/navBar";

export const metadata: Metadata = {
  title: "Final Project",
  description: "Ashley Doerfler, Oregon State University-Cascades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header><NavBar /></header>
        <main>{children}</main>
      </body>
    </html>
  );
}
