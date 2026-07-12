'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  name: string;
  id: string;
  href: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // 1. STATE BARU UNTUK MENDETEKSI SCROLL
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Fungsi untuk ngecek posisi scroll
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) return null;

  const menuItems: MenuItem[] = [
    { name: 'Home', id: 'home', href: '/' },
    { name: 'Paket', id: 'pricing', href: '#pricing' },
    { name: 'Visi Misi', id: 'visimisi', href: '#visimisi' },
    { name: 'Area Layanan', id: 'arealayanan', href: '#arealayanan' },
    { name: 'Artikel', id: 'artikel', href: '#artikel' },
  ];

  return (
    // 2. KELAS NAVIGASI DINAMIS BERDASARKAN STATE `isScrolled`
    <nav className={`w-full fixed top-0 left-0 right-0 z-50 px-6 h-20 transition-all duration-300 flex items-center ${
    isScrolled 
      ? 'bg-white/50 backdrop-blur-md shadow-sm' 
      : 'bg-transparent'
  }`}>
    <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
      
      {/* ================= SISI KIRI: LOGO ================= */}
      {/* Gunakan h-10 atau h-12 sebagai batas maksimal area logo agar serasi */}
      <div className="flex items-center gap-4 h-12">
        <div className="flex items-center gap-3 h-full">
          
          {/* Logo Telkom: Paksa tinggi maksimal hanya 24px (h-6) */}
          <img 
            src="/poster/image1.png" 
            alt="Telkom Indonesia" 
            className="h-15 max-h-15 w-auto object-contain block" 
          />
          
          <div className={`h-4 w-[1px] transition-colors duration-300 ${isScrolled ? 'bg-slate-300' : 'bg-white/30'}`}></div>
          
          {/* Logo Danantara: Paksa tinggi maksimal hanya 20px (h-5) */}
          <img 
            src="/poster/images2.png" 
            alt="Danantara" 
            className="h-19 max-h-19 w-auto object-contain block" 
          />
          
          <div className={`h-4 w-[1px] transition-colors duration-300 ${isScrolled ? 'bg-slate-300' : 'bg-white/30'}`}></div>
          
          <span className={`font-black text-sm tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-slate-900' : 'text-white'
          }`}>
            indibiz
          </span>

        </div>
      </div>

        {/* ================= SISI KANAN: MENU NAVIGASI DAN BUTTON ================= */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-sm font-semibold">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`transition-all duration-200 py-1.5 px-3 rounded-full ${
                    isActive 
                      ? isScrolled 
                        ? 'bg-[#00a8ec]/10 text-[#00a8ec]' 
                        : 'bg-white/20 text-white shadow-sm'
                      : isScrolled 
                        ? 'text-slate-600 hover:text-[#00a8ec]' 
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Tombol Chat WhatsApp */}
          <a 
            href="https://wa.me/6282258122523?text=Halo%20Indibiz,%20saya%20mau%20berlangganan%20paket%20${paket.mbps} Mbps" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md transition-all transform hover:scale-[1.02]"
          >
            Chat WhatsApp
          </a>
        </div>

        {/* TOMBOL MOBILE MENU */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden p-2 focus:outline-none transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}
        >
          {isOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 space-y-3 flex flex-col">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-600 font-medium text-sm hover:text-[#00a8ec] px-2 py-1 block"
            >
              {item.name}
            </Link>
          ))}
          <a href="https://wa.me/628xxxxxxxx" className="bg-[#00a8ec] text-white text-center text-sm font-bold py-2.5 rounded-xl block">
            Chat WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}