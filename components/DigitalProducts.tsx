'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

interface ProductItem {
    id: string;
    title: string;
    description: string;
    icon: string; // Menggunakan emoji atau svg path nantinya
    bgClass: string;
    gridClass: string;
    bgImg: string; 
}

export default function DigitalProducts() { // Pastikan nama komponen sesuai
  // 🛠️ PASTIKAN VARIABEL INI ADA DI DALAM FUNGSI SEBELUM RETURN
  const products = [
    {
      id: 'managed-wifi',
      title: 'WIFI Managed Service',
      desc: 'Jaringan WiFi profesional yang terkelola penuh untuk kebutuhan kantor dan bisnis skala besar.',
      bgImage: '/poster/managed-wifi-cover.jpg',
    },
    {
      id: 'cctv',
      title: 'IndiBiz Antares Eazy',
      desc: 'Sistem keamanan pantau pintar 24/7 dengan integrasi penyimpanan cloud aman.',
      bgImage: '/poster/cctv-security-cover.jpg',
    },
    {
      id: 'oca',
      title: 'IndiBiz Oca',
      desc: 'Penyimpanan data bisnis lokal yang aman, cepat, dan mudah diakses dari mana saja.',
      bgImage: '/poster/cloud-storage-cover.jpg',
    },
    {
      id: 'pijar-sekolah',
      title: 'IndiBiz Pijar',
      desc: 'Aplikasi kasir & inventory modern untuk kelancaran transaksi harian usaha Anda.',
      bgImage: '/poster/pijar-cover.jpg',
    },
    {
      id: 'netmonk',
      title: 'IndiBiz NetMonk',
      desc: 'Pembuatan profil perusahaan digital profesional untuk meningkatkan branding pasar.',
      bgImage: '/poster/netmonk-cover.jpg',
    },
  ];
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
        <section ref={sectionRef} id="produk-digital" className="w-full py-28 bg-white px-6 md:px-24 border-t border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* HEADER SEKSI */}
                    <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Solusi Digital untuk Bisnis Anda
                    </h2>
                    <p className="text-slate-600 mt-3 text-sm md:text-base">
                        Lengkapi kebutuhan bisnis Anda dengan produk digital terbaik dari Indibiz.
                    </p>
                    </div>

                    {/* GRID LAYOUT UTAMA */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* 1. KARTU UTAMA (WIFI MANAGED SERVICE) - UKURAN BESAR */}
                    <Link 
                        href={`/produk-digital/${products[0].id}`}
                        className="group relative md:col-span-1 md:row-span-1.5 min-h-[400px] md:min-h-[500px] rounded-4xl overflow-hidden shadow-md hover:shadow-x2 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-end p-8"
                    >
                        {/* Gambar Latar Belakang (Menyesuaikan Grid Otomatis) */}
                        <img 
                        src={products[0].bgImage} 
                        alt={products[0].title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Lapisan Hitam Transparan agar Teks Terbaca */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        
                        {/* Konten Teks */}
                        <div className="relative z-10 text-white">
                        <h3 className="text-2xl font-bold mb-2">{products[0].title}</h3>
                        <p className="text-sm text-slate-200/90 leading-relaxed">{products[0].desc}</p>
                        </div>
                    </Link>

                    {/* 2. GRID UNTUK 4 KARTU KECIL LAINNYA */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {products.slice(1).map((product) => (
                        <Link
                            key={product.id}
                            href={`/produk-digital/${product.id}`}
                            className="group relative min-h-[238px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-end p-6"
                        >
                            {/* Gambar Latar Belakang */}
                            <img 
                            src={product.bgImage} 
                            alt={product.title}
                            className="absolute inset-0 w-full h-full object-top group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Lapisan Hitam Transparan */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                            
                            {/* Konten Teks */}
                            <div className="relative z-10 text-white">
                            <h3 className="text-xl font-bold mb-1.5">{product.title}</h3>
                            <p className="text-xs text-slate-200/90 leading-relaxed line-clamp-2">{product.desc}</p>
                            </div>
                        </Link>
                        ))}
                    </div>

                    </div>
            </div>
        </section>
    );
}