import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar/page";

const robotoRegular = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const robotoBold = localFont({
  src: "./fonts/Roboto-Bold.ttf",
  variable: "--font-geist-mono",
  weight: "500 900",
});

export const metadata: Metadata = {
  title: "Sfera Nəşriyyatı",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
     <html lang="en">
      <body
        className={`${robotoBold.variable} ${robotoRegular.variable} antialiased`}
      >
       <div className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-3">
      <Header/>
      <Navbar/>
      </div>
        <main className="flex-1">
        {children}
        </main>
        <Footer/>
       </div>
      </body>
    </html>
   </ClerkProvider>
  );
}
