import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { SpeedInsights } from "@vercel/speed-insights/next"
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-VBSG04TBXV');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="relative min-h-screen flex flex-col">
          {/* Background */}
          <FlickeringGrid
            className="fixed inset-0 -z-10 w-full h-full"
            squareSize={4}
            gridGap={6}
            color="#5c718a"
            // color="#60A5FA"
            maxOpacity={0.5}
            flickerChance={0.1}
          />

          {/* Foreground content */}
          <Header />
          <main className="main-content flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>


    </html>
  );
}
