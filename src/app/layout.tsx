import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nahid Khan",
  description: "Full Stack Web & Mobile Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
  <div className="layout-wrapper">

         <Header />

<main className="main-content">
        {children}
  </main>
        <Footer />
  </div>
          {/* <header>My Navbar header</header>
        <footer>Nahid Portfolio footer</footer> */}
      </body>
    </html>
  );
}
