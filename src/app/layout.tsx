import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
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
      <body className={`${inter.variable} antialiased`}>
        <div className="relative min-h-screen flex flex-col">
          {/* Background */}
          <FlickeringGrid
            className="fixed inset-0 -z-10 w-full h-full"
            squareSize={4}
            gridGap={6}
            color="#5c718a"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
          <Header />
          <main className="main-content flex-1">{children}</main>
          <Footer />
        </div>

        {/* Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VBSG04TBXV"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VBSG04TBXV');
          `}
        </Script>

        <SpeedInsights />
      </body>
    </html>
  );
}
