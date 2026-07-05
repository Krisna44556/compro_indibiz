'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Artikel {
  id: string;
  title: string;
  category: 'Network' | 'Cloud' | 'Security';
  tags: string[];
  points: string[];
  bgGradient: string;
  thumbnail: string;
}

export default function ArtikelPage() {
  // State untuk filter kategori interaktif
  const [activeFilter, setActiveFilter] = useState<string>('Semua');

  const daftarArtikel: Artikel[] = [
    {
      id: 'panduan-wifi-kantor',
      title: 'Panduan Memilih WIFI Managed Service untuk Kantor',
      category: 'Network',
      tags: ['Core Network', 'Cloud Infrastructure', 'Security'],
      points: [
        'Akses WiFi Berkecepatan Tinggi',
        'Integrasi Keamanan Jaringan',
        'Sistem Monitoring Real-time'
      ],
      bgGradient: 'from-blue-100 to-sky-200/60 text-slate-900 border-sky-100',
      thumbnail: '/poster/managed-wifi.jpg', // Ganti dengan aset gambar minimu
    },
    {
      id: 'manfaat-cloud-bisnis',
      title: 'Manfaat Cloud Infrastructure untuk Skalabilitas Bisnis',
      category: 'Cloud',
      tags: ['Core Network', 'Cloud Infrastructure', 'Security'],
      points: [
        'Manfaat Cloud Infrastructure',
        'Integrasi Keamanan Jaringan',
        'Sistem Monitoring Real-time'
      ],
      bgGradient: 'from-blue-500 to-indigo-600 text-white border-blue-400/30 shadow-blue-500/10',
      thumbnail: '/poster/cloud-storage.jpg',
    },
    {
      id: 'pentingnya-managed-it',
      title: 'Mengapa 24/7 Managed IT Support Penting untuk Keamanan Data',
      category: 'Security',
      tags: ['Core Network', 'Cloud Infrastructure', 'Security'],
      points: [
        'Mengapa 24/7 Managed IT Support',
        'Penting untuk Keamanan Data',
        'Sistem Monitoring Real-time'
      ],
      bgGradient: 'from-slate-900 via-blue-950 to-slate-950 text-white border-slate-800 shadow-xl',
      thumbnail: '/poster/cctv-security.jpg',
    },
  ];

  // Menyaring artikel secara instan berdasarkan tombol filter yang diklik
  const artikelTersaring = activeFilter === 'Semua' 
    ? daftarArtikel 
    : daftarArtikel.filter(item => item.category === activeFilter);

  return (
    <div className="w-full min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* HEADER UTAMA */}
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Artikel dan Wawasan Digital Terbaru
          </h1>
          <p className="text-slate-500 mt-4 text-base md:text-lg font-medium">
            Inspirasi dan Panduan untuk Transformasi Bisnis Anda
          </p>
        </div>

        {/* CONTROLLER FILTER INTERAKTIF */}
        <div className="flex items-center gap-2 md:gap-4 mb-16 bg-slate-100 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
          {['Semua', 'Network', 'Cloud', 'Security'].map((kategori) => (
            <button
              key={kategori}
              onClick={() => setActiveFilter(kategori)}
              className={`px-5 py-2 text-xs md:text-sm font-bold rounded-full transition-all duration-300 ${
                activeFilter === kategori
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {kategori}
            </button>
          ))}
        </div>

        {/* 3-COLUMNS PREMIUM GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {artikelTersaring.map((artikel) => (
            <div
              key={artikel.id}
              className={`relative rounded-[36px] p-8 md:p-9 border flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl bg-gradient-to-b group ${artikel.bgGradient}`}
            >
              
              {/* BAGIAN ATAS: BADGES & THUMBNAIL */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  {/* PIL BADGES */}
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {artikel.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                          artikel.bgGradient.includes('text-slate-900')
                            ? 'bg-slate-900/5 border-slate-900/10 text-slate-800'
                            : 'bg-white/10 border-white/20 text-white/90'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GAMBAR MINI (THUMBNAIL BULAT DI POJOK) */}
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/40 shadow-md shrink-0">
                    <img 
                      src={artikel.thumbnail} 
                      alt={artikel.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                </div>

                {/* JUDUL UTAMA */}
                <h3 className="text-xl md:text-2xl font-black tracking-tight leading-snug mb-8 min-h-[56px] line-clamp-3">
                  {artikel.title}
                </h3>

                {/* TOMBOL BACA INTERAKTIF */}
                <div className="mb-8">
                  <Link
                    href={`/artikel/${artikel.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm font-bold shadow-sm transition-all duration-300 transform group-hover:scale-[1.02] ${
                      artikel.bgGradient.includes('text-slate-900')
                        ? 'bg-blue-600/10 text-blue-700 hover:bg-blue-600/20'
                        : 'bg-white text-blue-900 hover:bg-slate-50'
                    }`}
                  >
                    Baca Artikel Lengkap
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* BAGIAN BAWAH: CHECKLIST POIN RELEVAN */}
              <div className={`pt-6 border-t ${
                artikel.bgGradient.includes('text-slate-900') ? 'border-slate-900/10' : 'border-white/10'
              }`}>
                <ul className="space-y-3">
                  {artikel.points.map((poin, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs md:text-sm font-semibold">
                      <svg
                        className={`w-4 h-4 shrink-0 ${
                          artikel.bgGradient.includes('text-slate-900') ? 'text-blue-600' : 'text-blue-400'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={artikel.bgGradient.includes('text-slate-900') ? 'text-slate-700' : 'text-slate-300'}>
                        {poin}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}