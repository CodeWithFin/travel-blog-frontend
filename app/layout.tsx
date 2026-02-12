import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ImageStrip from "./components/ImageStrip";
import ContactSubscribe from "./components/ContactSubscribe";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Red Explorers - Travel Blog",
  description: "Location independent bloggers and world travelers sharing adventures across 60+ countries",
  icons: {
    icon: "/assets/logos/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <ImageStrip />
        <ContactSubscribe />
        <Footer />
      </body>
    </html>
  );
}
