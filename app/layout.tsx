import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. Import Navbar dan Footer yang sudah kamu buat
import Navbar from "@/components/Navbar";
import DigitalProducts from "@/components/VisiMisi";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indibiz Bandung & Cimahi | Internet WIFI Cepat untuk Bisnis & UMKM",
  description: "Solusi internet fiber andal tanpa kuota dari Telkom Indonesia khusus ruko, kantor, dan usaha Anda di area Bandung Barat, Kota Bandung, dan Cimahi.",
  keywords: ['Internet WIFI Bandung', 'Indibiz Cimahi', 'WiFi Dedicated', 'Internet Kantor Bandung', 'Indibiz', 'Telkom Indonesia'],
  
};

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        {/* 2. Taruh Navbar di paling atas */}
        <Navbar />
        
        {/* 3. children ini adalah isi dari app/page.tsx kamu */}
        {children}

        
      
        
       
        
        {/* 4. Taruh Footer di paling bawah */}
        <Footer />
      </body>
    </html>
  );

  
}