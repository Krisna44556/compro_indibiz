import React from 'react';

export default function AreaLayanan() {
  // Data wilayah cakupan agar mudah Anda edit/tambah di masa depan
  const wilayahList = [
    {
      kota: "Kota Bandung",
      kecamatan: ["Coblong", "Regol", "Antapani", "Buahbatu", "Lengkong", "Andir", "Sukajadi", "Bandung Kidul"],
      status: "Tersedia 100% Fiber",
      color: "border-blue-100 bg-blue-50/50"
    },
    {
      kota: "Kota Cimahi",
      kecamatan: ["Cimahi Utara", "Cimahi Tengah", "Cimahi Selatan"],
      status: "Tersedia 100% Fiber",
      color: "border-emerald-100 bg-emerald-50/30"
    },

  ];

  return (
    <section id="arealayanan" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 ">
        
        {/* Judul Seksi Area Layanan */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            Sudah Hadir di Wilayah Anda
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Nikmati koneksi internet super cepat Indibiz yang telah menjangkau berbagai ruko, sekolah, dan perkantoran di area berikut.
          </p>
        </div>

        {/* GRID WILAYAH */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {wilayahList.map((wilayah, index) => (
            <div 
              key={index}
              className={`border rounded-[32px] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${wilayah.color} group`}
            >
              <div>
                {/* Bagian Atas: Nama Kota */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📍</span> {/* Bisa diganti <MapPin className="text-[#00a8ec] w-5 h-5" /> */}
                    <h3 className="font-black text-xl text-slate-800 tracking-tight">
                      {wilayah.kota}
                    </h3>
                  </div>
                </div>

                {/* Status Ketersediaan */}
                <span className="inline-block text-[10px] font-bold bg-white px-3 py-1 rounded-full text-slate-700 shadow-sm mb-6 border border-slate-100">
                  ⚡ {wilayah.status}
                </span>

                {/* Daftar Kecamatan dengan Bullet Kasual */}
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {wilayah.kecamatan.map((kec, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-sm text-slate-600">
                        <span className="text-[#00a8ec] text-xs">✓</span>
                        <span className="truncate">{kec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tombol Cek Lokasi via WhatsApp */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <a 
                  href={`https://wa.me/6282258122523?text=Halo%20Indibiz,%20saya%20mau%20cek%20ketersediaan%20jaringan%20di%20${wilayah.kota}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 text-white hover:bg-[#00a8ec] text-xs font-bold py-3 px-4 rounded-xl shadow-sm transition-all duration-200 text-center block group-hover:scale-[1.01]"
                >
                  Cek Alamat Rumah
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Tambahan di Bawah Grid */}
        <div className="mt-12 text-center bg-slate-50 border border-slate-100 rounded-2xl p-4 max-w-2xl mx-auto">
          <p className="text-xs text-slate-500">
            Rumah atau ruko Anda tidak ada di daftar di atas? Jangan khawatir, tim kami terus melakukan perluasan jaringan fiber optik setiap harinya. <a href="https://wa.me/6282258122523" className="text-[#00a8ec] font-bold underline">Hubungi Sales Tim Kami</a>
          </p>
        </div>

      </div>
    </section>
  );
}