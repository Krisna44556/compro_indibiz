// app/produk-digital/[id]/page.tsx

import Link from "next/link";

// 1. Tambahkan fungsi ini agar Next.js tahu ID apa saja yang akan dicetak jadi HTML statis
export async function generateStaticParams() {
  // Masukkan 5 ID produk digital sesuai brosur Indibiz milik klienmu
  return [
    { id: 'managed-wifi' },
    { id: 'netmonk' },
    { id: 'pijar' },
    { id: 'cloud-storage' },
    { id: 'cctv-security' }
  ];
}

export default async function DetailProduk({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const productName = resolvedParams.id.replace('-', ' ').toUpperCase();

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-25 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-sm text-center">
        
        <h1 className="text-3xl font-extrabold text-[#1e3fae] mb-2">{productName}</h1>
        <p className="text-[#1e3fae] text-sm mb-8">Halaman Detail Brosur dan Poster Layanan Digital</p>
        

        <Link 
          href="/#produk-digital" 
          className="group flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 bg-white px-4 py-2.5 rounded-full border border-slate-100 shadow-sm transition-all duration-200 hover:-translate-x-1"
        >
          {/* Ikon Panah Kiri */}
          <span className="transform transition-transform group-hover:-translate-x-0.5"></span> 
          Kembali ke Beranda
        </Link>

        {/* Kontainer Tempat Poster Gambar */}
        <div className="w-full bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 overflow-hidden shadow-inner p-4 mt-8">
          <img 
            src={`/poster/${resolvedParams.id}.jpg`} 
            alt={`Poster ${productName}`}
            className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            // 🛠️ PASTIKAN SUDAH TIDAK ADA KATA onError DI SINI
          />
        </div>
         <div className="mt-8">
              <h4 className="text-sm font-bold text-slate-900">Syarat & Ketentuan</h4>
              <p className="text-xs text-[#1e3fae] mt-2">Biaya Pesang Baru 150k Di Bayarkan Saat installasi Pemasangan Di lokasi Anda <br /> Biaya Pasang Belum Termasuk PPN 11% <br /> Kontrak Minimal 1 Tahun</p>
            </div>
         
      </div>
      

    </main>
  );
}