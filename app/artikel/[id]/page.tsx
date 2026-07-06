import Link from 'next/link';

// 1. Daftarkan rute statis secara eksplisit
export async function generateStaticParams() {
  return [
    { id: 'panduan-wifi-kantor' },
    { id: 'manfaat-cloud-bisnis' },
    { id: 'pentingnya-managed-it' }
  ];
}

// 2. Definisikan tipe params langsung sesuai standar Next.js Static Export
interface PageProps {
  params: {
    id: string;
  };
}

export default function DetailArtikelPage({ params }: PageProps) {
  // Ambil ID langsung dari params tanpa async/await untuk mode dev yang lebih stabil
  const id = params.id;

  // DATA KONTEN LENGKAP ARTIKEL
  const dataArtikel: Record<string, { title: string; date: string; author: string; bgImage: string; content: string[] }> = {
    'panduan-wifi-kantor': {
      title: 'Panduan Memilih WIFI Managed Service untuk Kantor',
      date: '06 Juli 2026',
      author: 'Tim Ahli IndiBiz',
      bgImage: '/poster/managed-wifi.jpg',
      content: [
        'Koneksi internet yang tidak stabil seringkali menjadi hambatan terbesar dalam produktivitas kantor modern. Oleh karena itu, WiFi Managed Service hadir sebagai solusi total bagi perusahaan yang tidak ingin direpotkan dengan urusan konfigurasi, perawatan, hingga keamanan jaringan.',
        'Saat memilih layanan ini, pastikan provider Anda menyediakan sistem monitoring real-time 24/7. Hal ini krusial agar setiap gangguan kecil pada bandwidth atau perangkat keras dapat dideteksi dan diperbaiki sebelum sempat mengganggu jalannya pekerjaan karyawan Anda.',
        'Selain itu, perhatikan fitur keamanan yang ditawarkan. Layanan WiFi profesional yang baik wajib memiliki sistem enkripsi tingkat tinggi dan pemisahan jaringan (VLAN) yang jelas antara jaringan operasional staf inti dengan jaringan WiFi publik untuk tamu/klien.'
      ]
    },
    'manfaat-cloud-bisnis': {
      title: 'Manfaat Cloud Infrastructure untuk Skalabilitas Bisnis',
      date: '05 Juli 2026',
      author: 'Tech Consultant',
      bgImage: '/poster/cloud-storage.jpg',
      content: [
        'Infrastruktur berbasis cloud telah mengubah cara bisnis skala kecil hingga besar dalam mengelola data mereka. Dengan beralih ke cloud, perusahaan tidak perlu lagi berinvestasi besar pada server fisik lokal yang memerlukan biaya perawatan dan listrik yang tinggi.',
        'Keunggulan utama dari Cloud Infrastructure adalah skalabilitasnya yang instan. Ketika bisnis Anda sedang mengalami lonjakan transaksi atau pengguna, kapasitas penyimpanan dan komputasi server dapat ditingkatkan saat itu juga hanya dengan beberapa klik.',
        'Keamanan data juga jauh lebih terjamin karena penyedia cloud premium selalu menerapkan backup data otomatis secara berkala di berbagai pusat data (data center) yang terpisah, sehingga risiko kehilangan data akibat bencana fisik dapat diminimalisir.'
      ]
    },
    'pentingnya-managed-it': {
      title: 'Mengapa 24/7 Managed IT Support Penting untuk Keamanan Data',
      date: '04 Juli 2026',
      author: 'Cyber Security Analyst',
      bgImage: '/poster/cctv-security.jpg',
      content: [
        'Ancaman siber tidak pernah tidur. Peretasan, serangan malware, hingga kebocoran data sensitif seringkali terjadi di luar jam kerja normal kantor, di mana tim IT internal Anda biasanya sedang tidak bersiaga di depan layar komputer.',
        'Inilah alasan mengapa layanan Managed IT Support yang beroperasi penuh selama 24 jam dalam seminggu menjadi investasi wajib bagi bisnis modern. Tim ahli eksternal akan memantau seluruh lalu lintas jaringan Anda tanpa henti demi menghalau setiap aktivitas mencurigakan sejak dini.',
        'Dengan dukungan teknisi profesional yang selalu siap sedia, setiap insiden keamanan atau kendala teknis darurat dapat langsung ditangani dalam hitungan menit, menjaga integritas data berharga perusahaan sekaligus memastikan layanan bisnis Anda tetap berjalan lancar.'
      ]
    }
  };

  // Ambil data berdasarkan id, jika tidak ketemu arahkan ke wifi kantor
  const artikel = dataArtikel[id] || dataArtikel['panduan-wifi-kantor'];

  return (
    <div className="w-full min-h-screen pt-32 pb-20 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* TOMBOL KEMBALI */}
        <Link 
          href="/artikel" 
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-100 transition-all mb-8 group"
        >
          ← Kembali ke Artikel
        </Link>

        {/* HERO BANNER COVER ARTIKEL */}
        <div className="relative w-full h-[250px] md:h-[400px] rounded-[32px] overflow-hidden shadow-lg mb-10">
          <img src={artikel.bgImage} alt={artikel.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
              {artikel.title}
            </h1>
            <div className="flex items-center gap-4 text-xs md:text-sm text-slate-200 mt-4 font-semibold">
              <span>{artikel.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span>Oleh: {artikel.author}</span>
            </div>
          </div>
        </div>

        {/* ISI KONTEN LENGKAP */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-slate-100">
          <article className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            {artikel.content.map((paragraf, index) => (
              <p key={index}>{paragraf}</p>
            ))}
          </article>
        </div>

      </div>
    </div>
  );
}