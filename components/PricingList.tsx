import React from 'react';

export default function PricingList() {
  // Array data paket agar mudah diubah nilainya sewaktu-waktu di masa depan
  const semuaPaket = [
    { speed: "50 Mbps", price: "Rp 355.000", tipe: "NON FUP", cocok: "Cocok untuk Ruko & Cafe Kecil" },
    { speed: "75 Mbps", price: "Rp 415.000", tipe: "NON FUP", cocok: "Paling Pas untuk Kantor & Sekolah" },
    { speed: "100 Mbps", price: "Rp 535.000", tipe: "BASIC FUP", cocok: "Terbaik untuk Hotel & Bisnis Besar" },
    { speed: "150 Mbps", price: "Rp 620.000", tipe: "BASIC FUP", cocok: "Kebutuhan Data Skala Besar" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 mt-20 relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight mb-10 leading-[1.15]"> PAKET BASIC</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Contoh Kartu Paket (Bisa Anda looping dari data asli nanti) */}
          {[
            { mbps: '50', harga: '320.000', tipe: 'BASIC' },
            { mbps: '75', harga: '365.000', tipe: 'BASIC' },
            { mbps: '100', harga: '440.000', tipe: 'BASIC' },
            { mbps: '150', harga: '540.000', tipe: 'BASIC' },
            { mbps: '200', harga: '675.000', tipe: 'BASIC' },
            { mbps: '300', harga: '950.000', tipe: 'BASIC' },
          ].map((paket, index) => (

            
            <div 
              key={index} 
              className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-slate-800 tracking-tighter">{paket.mbps}</span>
                  <span className="text-xl font-bold text-slate-400">Mbps</span>
                </div>
                
                <p className="text-2xl font-black text-[#00a8ec] mt-2">Rp {paket.harga}<span className="text-xs font-normal text-slate-400">/bulan</span></p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-50 space-y-4">
                <div className="text-xs text-slate-500 space-y-1">
                  <p className="font-bold text-slate-700 text-sm">PAKET {paket.tipe}</p>
                  <p>Biaya pasang Rp 150.000 + PPN 11%</p>
                </div>

                <button className="w-full bg-[#00a8ec] hover:bg-[#0096dc] text-white font-bold py-3 px-4 rounded-2xl shadow-md transition-all duration-200 tracking-wide text-sm">
                  <a href={`https://wa.me/6282258122523?text=Halo%20Indibiz,%20saya%20mau%20berlangganan%20paket%20${paket.mbps} Mbps`}>BERLANGGANAN SEKARANG</a>
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>
  );
}