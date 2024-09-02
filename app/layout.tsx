import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Ryan Varela -  Links Úteis",
  description: "Veja meus projetos, solicite meus serviços ou até mesmo confira minhas redes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
