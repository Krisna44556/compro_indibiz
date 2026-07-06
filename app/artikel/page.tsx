'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Artikel {
  id: string;
  title: string;
  category: 'Network' | 'Cloud' | 'Security';
  tags: string[];
  points: string[];
  desc: string;
}

export default function ArtikelPage() {
  // State untuk filter kategori interaktif
  const [activeFilter, setActiveFilter] = useState<string>('Semua');

  const daftarArtikel: Artikel[] = [
    {
      id: 'panduan-wifi-kantor',
      desc: 'Panduan Internet Bisnis Bandung Barat untuk UMKM Naik Kelas Kabupaten Bandung Barat (KBB) bukan lagi sekadar wilayah penyangga. Dalam beberapa tahun terakhir, kawasan seperti Padalarang, Ngamprah, hingga Lembang dan Parongpong telah bertransformasi menjadi pusat pertumbuhan ekonomi baru.',
      title: 'Solusi Internet Bisnis Bandung Barat untuk UMKM Naik Kelas',
      category: 'Network',
      tags: ['Core Network', 'Cloud Infrastructure', 'Security'],
      points: [
        'Akses WiFi Berkecepatan Tinggi',
        'Integrasi Keamanan Jaringan',
        'Sistem Monitoring Real-time'
      ],

    },
    {
      id: 'manfaat-cloud-bisnis',
      desc: 'semakin ketat Dari warung kopi di Padalarang hingga glamping mewah di Lembang semua berlomba-lomba mendapatkan perhatian konsumen Untuk memenangkan hati pelanggan Anda membutuhkan lebih dari sekadar produk yang bagus Anda membutuhkan visibilitas.',
      title: '5 Strategi Internet Bisnis (KBB) Bersama Indibiz untuk Tingkatkan Omzet',
      category: 'Cloud',
      tags: ['Core Network', 'Cloud Infrastructure', 'Security'],
      points: [
        'Manfaat Cloud Infrastructure',
        'Integrasi Keamanan Jaringan',
        'Sistem Monitoring Real-time'
      ],
    },
    {
      id: 'pentingnya-managed-it',
      title: 'Digitalisasi Wisata dan Kuliner Bandung Barat Peran Penting Indibiz',
      desc: 'Kabupaten Bandung Barat adalah surga bagi wisatawan. Dari kawasan wisata sejuk Lembang, petualangan di Ciwidey, hingga kawasan kuliner yang menjamur di sekitar Setu Cileunca dan Padalarang. Potensi alam dan kulinernya luar biasa.',
      category: 'Security',
      tags: ['Core Network', 'Cloud Infrastructure', 'Security'],
      points: [
        'Mengapa 24/7 Managed IT Support',
        'Penting untuk Keamanan Data',
        'Sistem Monitoring Real-time'
      ],
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


        {/* 3-COLUMNS PREMIUM GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {artikelTersaring.map((artikel) => (
            <div
              key={artikel.id}
              className={`relative rounded-[36px] p-8 md:p-9 border flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl bg-gradient-to-b group ${artikel.id}`}
            >

              {/* BAGIAN ATAS: BADGES & THUMBNAIL */}
              <div>


                {/* JUDUL UTAMA */}
                <h3 className="text-xl md:text-2xl font-black tracking-tight leading-snug mb-8 min-h-[56px] line-clamp-3">
                  {artikel.title}
                </h3>

                {/* isi dari artikel */}
                <p className="text-sm md:text-base text-slate-800 leading-relaxed font-medium">
                  {artikel.desc}
                </p>

                {/* TOMBOL BACA INTERAKTIF */}
                <div className="mb-8">
                  <Link
                    href={`/artikel/${artikel.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm font-bold shadow-sm transition-all duration-300 transform group-hover:scale-[1.02] ${artikel.id.includes('text-slate-900')
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


            </div>
          ))}
        </div>

      </div>
    </div>
  );
}