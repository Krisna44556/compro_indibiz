import React from 'react';
import PricingList from "@/components/PricingList";
import AreaLayanan from "@/components/AreaLayanan";
import ArtikelList from "@/components/ArtikelList";
import VisiMisi from "@/components/VisiMisi";
import ScrollAnimation from '@/components/ScrollAnimation'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 scroll-smooth">
      
     <ScrollAnimation>
      {/* =========================================================================
          1. HERO BANNER (Diberi ID "home")
          ========================================================================= */}
      <section 
        id="home"
        className="relative text-white pt-24 pb-36 px-4 text-center rounded-b-[45px] shadow-lg bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out"
        style={{ backgroundImage: "url('/poster/tema.jpeg')" }}
      >
        {/* Lapisan Overlay Biru Transparan */}
        <div className="absolute inset-0 bg-[#00a8ec]/85 rounded-b-[45px] z-0"></div>

        {/* Konten Utama */}
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded-full backdrop-blur-sm">
            OFFICIAL PARTNER TELKOM INDONESIA
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Internet Cepat & <span className="text-black">Stabil</span> Untuk Bisnis Anda di Bandung & Cimahi
          </h1>
          <p className="text-white/90 text-base md:text-lg font-medium max-w-xl mx-auto">
            Indibiz hadir dengan koneksi andal tanpa batas kuota untuk mendukung kemajuan bisnis lokal Anda.
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. DAFTAR PAKET ATAS (Diberi ID "pricing" agar menu "Paket" mengarah ke sini)
          Diberi pb-24 (padding bottom) agar tidak meluber menabrak konten bawah.
          ========================================================================= */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 -mt-16 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {[
            { mbps: '50', harga: '355.000', tipe: 'BASIC FUP' },
            { mbps: '75', harga: '415.000', tipe: 'BASIC FUP' },
            { mbps: '100', harga: '535.000', tipe: 'BASIC FUP' },
            { mbps: '150', harga: '620.000', tipe: 'BASIC FUP' },
            { mbps: '200', harga: '790.000', tipe: 'BASIC FUP' },
            { mbps: '300', harga: '1.130.000', tipe: 'BASIC FUP' },
          ].map((paket, index) => (
            
            <div 
              key={index} 
              // Menambahkan hover:scale-[1.02] & transition duration untuk animasi interaktif saat disentuh kursor
              className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl group"
            >
              <div>        
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-slate-800 tracking-tighter transition-transform duration-300 group-hover:scale-105 inline-block">{paket.mbps}</span>
                  <span className="text-xl font-bold text-slate-400">Mbps</span>
                </div>
                
                <p className="text-2xl font-black text-[#00a8ec] mt-2">Rp {paket.harga}<span className="text-xs font-normal text-slate-400">/bulan</span></p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
                <div className="text-xs text-slate-500 space-y-1">
                  <p className="font-bold text-slate-700 text-sm">PAKET {paket.tipe}</p>
                  <p>Biaya pasang Rp 150.000 + PPN 11%</p>
                </div>

                <a 
                  href={`https://wa.me/6282258122523?text=Halo%20Indibiz,%20saya%20mau%20berlangganan%20paket%20${paket.mbps} Mbps`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#00a8ec] hover:bg-[#0096dc] text-white font-bold py-3 px-4 rounded-2xl shadow-md transition-all duration-200 tracking-wide text-sm text-center block"
                >
                  BERLANGGANAN SEKARANG
                </a>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* =========================================================================
          3. SEKSI VISI MISI (File Berbeda)
          Diberi ID "produk" agar menu "Produk Digital" mengarah ke sini
          ========================================================================= */}
       

      {/* =========================================================================
          4. SEKSI DAFTAR HARGA RINGKASAN DI BAWAH (File Berbeda)
          Diberi ID "layanan" agar menu "Area Layanan" mengarah ke sini
          ========================================================================= */}
          <VisiMisi />
      

         <PricingList />

         <AreaLayanan />

      = <ArtikelList />
    
      </ScrollAnimation> 
    </main>
   
  );
}