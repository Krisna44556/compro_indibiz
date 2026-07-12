import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

// Menggunakan tipe Promise untuk params sesuai standar Next.js terbaru
interface Props {
  params: Promise<{ slug: string }>;
}

// 1. DATA DUMMY KONTEN ARTIKEL
const dataArtikel: Record<string, { title: string; date: string; content: string[]; image: string; desc: string }> = {
  "internet-stabil-umkm": {
    title: "Pentingnya Internet Stabil untuk Efisiensi Operasional UMKM",
    desc: "Bagaimana konektivitas digital yang andal dapat memangkas biaya operasional bisnis lokal Anda.",
    date: "10 Juli 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
    content: [
      "Di era digital saat ini, kecepatan dan kestabilan internet bukan lagi sekadar fasilitas tambahan, melainkan pondasi utama operasional UMKM. Mulai dari manajemen stok barang, kasir digital (POS), hingga komunikasi dengan pelanggan melalui media sosial, semuanya bergantung pada jaringan internet.",
      "Salah satu hambatan terbesar pelaku usaha di Bandung dan Cimahi adalah gangguan koneksi di tengah jam sibuk. Dengan menggunakan jaringan dedicated dari Indibiz, risiko delay transaksi kasir atau gagal unggah data promosi bisa tekanan hingga nol persen.",
      "Investasi pada internet berkualitas terbukti memangkas waktu kerja manual dan meningkatkan kepuasan pelanggan secara signifikan karena layanan yang diberikan jauh lebih cepat dan responsif."
    ]
  },
  "transformasi-digital-lokal": {
    title: "Transformasi Digital: Cara Bisnis Lokal Berkompetisi di Era Modern",
    desc: "Langkah mudah bagi para pelaku usaha di Bandung Barat dan Cimahi untuk memanfaatkan ekosistem digital.",
    date: "08 Juli 2026",
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=1000&auto=format&fit=crop&q=80",
    content: [
      "Banyak pelaku bisnis lokal merasa transformasi digital adalah hal yang rumit dan mahal. Padahal, langkah awal bisa dimulai dari hal sederhana seperti mendigitalisasi pencatatan keuangan dan menyediakan akses Wi-Fi yang lancar untuk para pengunjung ruko atau kafe Anda.",
      "Indibiz hadir sebagai jembatan bagi UMKM di Jawa Barat untuk go-digital tanpa perlu khawatir masalah infrastruktur dan biaya bulanan yang membengkak.",
    ]
  }
};

// =========================================================================
// 2. FITUR WAJIB UNTUK OUTPUT EXPORT
// =========================================================================
export async function generateStaticParams() {
  return Object.keys(dataArtikel).map((slug) => ({
    slug: slug,
  }));
}

// =========================================================================
// 3. GENERATE METADATA SEO OTOMATIS (Sudah ditambah AWATING PARAMS)
// =========================================================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; // <--- Perbaikan wajib di sini
  const artikel = dataArtikel[resolvedParams.slug];
  
  if (!artikel) return { title: 'Artikel Tidak Ditemukan - Indibiz' };

  return {
    title: `${artikel.title} | Indibiz Bandung Cimahi`,
    description: artikel.desc,
    openGraph: {
      title: artikel.title,
      description: artikel.desc,
      images: [{ url: artikel.image }],
    },
  };
}

// =========================================================================
// 4. TAMPILAN HALAMAN DETAIL ARTIKEL (Sudah ditambah AWAITING PARAMS)
// =========================================================================
export default async function DetailArtikelPage({ params }: Props) {
  const resolvedParams = await params; 
  const slug = resolvedParams.slug;
  const artikel = dataArtikel[slug];

  if (!artikel) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] px-4">
        <h1 className="text-2xl font-black text-slate-800">Artikel tidak ditemukan</h1>
        <Link href="/" className="mt-4 text-[#00a8ec] font-bold underline">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#f8fafc] pt-28 pb-20 font-sans">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#00a8ec] transition-colors mb-6 uppercase tracking-wider">➔ Kembali ke Beranda</Link>
        <div className="space-y-3 mb-8">
          <span className="text-[10px] font-bold text-[#00a8ec] uppercase tracking-widest bg-[#00a8ec]/10 px-3 py-1 rounded-full">Edukasi Bisnis</span>
          <h1 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight leading-tight pt-2">{artikel.title}</h1>
        </div>
        <div className="w-full h-64 md:h-[400px] rounded-[35px] overflow-hidden shadow-md mb-10">
          <img src={artikel.image} alt={artikel.title} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
          {artikel.content.map((paragraf, index) => <p key={index}>{paragraf}</p>)}
        </div>
      </div>
    </article>
  );
}