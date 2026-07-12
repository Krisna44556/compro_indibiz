import React from 'react';

export default function VisiMisiPerusahaan() {
  // Daftar poin misi perusahaan (bisa Anda sesuaikan teksnya)
  const misiList = [
    {
      nomer: "01",
      title: "Solusi Digital Terintegrasi",
      desc: "Menyediakan layanan internet cepat dan ekosistem aplikasi digital yang dirancang khusus untuk mempercepat pertumbuhan bisnis lokal."
    },
    {
      nomer: "02",
      title: "Konektivitas Tanpa Batas",
      desc: "Menjamin kestabilan jaringan dengan rasio simetris 1:1 dan tanpa kuota batasan demi produktivitas usaha 24/7."
    },
    {
      nomer: "03",
      title: "Dukungan Penuh UMKM",
      desc: "Menjadi mitra strategis pelaku usaha di Cimahi & Bandung dalam melakukan transformasi digital dengan biaya yang terjangkau."
    }
  ];

  return (
    <section id="visimisi" className="py-10 bg-slate-50">
      <div className="relative rounded-[35px] min-h-[300px] shadow-xl overflow-hidden flex items-center justify-center p-8 md:p-12">  
          {/* 1. BACKGROUND MEDIA (Dipaksa mutlak memenuhi kotak) */}
          <div 
              className="w-full rounded-[35px] min-h-[350px] shadow-xl overflow-hidden flex items-center justify-center p-8 md:p-12 bg-fixed bg-cover bg-center relative"
              style={{ backgroundImage: "url('/poster/wifi.jpeg')" }} 
            >
  
          {/* Lapisan Gelap Permanen di atas gambar agar teks putih tetap kontras & tajam dibaca */}
          <div className="absolute inset-0 bg-slate-950/70 z-0"></div>
  
            {/* Konten Teks yang DIKUNCI di tengah-tengah menggunakan z-10 */}
          <div className="max-w-3xl text-center mx-auto space-y-6 relative z-10 flex flex-col items-center justify-center h-full">
    
            <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded-full backdrop-blur-sm">
              VISI KAMI
            </span>
    
            <h3 className="text-xl md:text-3xl font-black leading-relaxed tracking-tight text-white px-4">
              "Menjadi penggerak utama digitalisasi bisnis dan UMKM di Indonesia melalui konektivitas andal dan solusi digital yang inklusif."
            </h3>

          </div>
        </div>
        

        {/* ================= SEKSI MISI (Beberapa Grid Kolom) ================= */}
        <div className="space-y-9 text-center">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#00a8ec] uppercase tracking-widest bg-[#00a8ec]/10 px-4 py-1 rounded-full">
              MISI KAMI
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
              Langkah Nyata Kami Untuk Bisnis Anda
            </h2>
          </div>

          {/* Grid Kolom Misi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {misiList.map((misi, index) => (
              <div 
                key={index}
                className="bg-white p-6 ml-4 rounded-[28px] shadow-sm border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Penanda Nomer Misi */}
                  <div className="w-10 h-10 rounded-2xl bg-[#00a8ec]/10 flex items-center justify-center">
                    <span className="text-sm font-black text-[#00a8ec]">{misi.nomer}</span>
                  </div>
                  
                  {/* Judul & Detail Misi */}
                  <h4 className="text-lg font-bold text-slate-800 tracking-tight">
                    {misi.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {misi.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}