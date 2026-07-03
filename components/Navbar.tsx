'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface MenuItem {
  name: string;
  id: string;
  href: string;
}

export default function Navbar() {
  // State untuk menyimpan ID seksi yang sedang aktif dilihat user
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

 // 1. Efek untuk mengubah latar belakang Navbar saat di-scroll
  useEffect(() => {
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

  useEffect(() => {
    const sections = ['home', 'paket', 'produk-digital', 'area-layanan', 'testimoni'];
    
    const observerOptions = {
      root: null,
      // Memicu perpindahan tombol aktif ketika seksi mencapai area tengah layar
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Mulai mengamati setiap elemen HTML yang memiliki ID di atas
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

const menuItems = [
  { name: 'Home', id: 'home', href: '/#' },
  { name: 'Paket', id: 'paket', href: '#paket' },
  { name: 'Produk Digital', id: 'produk-digital', href: '#produk-digital' },
  { name: 'Area Layanan', id: 'area-layanan', href: '#area-layanan' },
  { name: 'Testimoni', id: 'testimoni', href: '#testimoni' },
];


const getNavLinkClass = (id: string) => {
    const baseClass = "text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ";
    
    if (activeSection === id) {
      // Jika seksi aktif, berikan gaya pil aktif (biru)
      return baseClass + "bg-blue-600/10 text-blue-500 shadow-sm border border-blue-500/20 backdrop-blur-sm";
    }
    
    // Jika tidak aktif, sesuaikan warna teks berdasarkan status scroll Navbar
    return isScrolled
      ? baseClass + "text-slate-600 hover:text-blue-600 border border-transparent" // Warna saat navbar solid putih
      : baseClass + "text-slate-200 hover:text-white border border-transparent";   // Warna saat navbar transparan di atas Hero
  };

  return (

  

  <header 
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100/80 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
    <nav className={`fixed top-0 left-0 right-0 h-20 z-50 px-6 md:px-24 flex justify-between items-center transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm" 
        : "bg-transparent border-b border-white/5"
      }`}>

      {/* 1. Logo Brand */}
      <div className="flex items-center gap-4">
        {/* Kamu tinggal ganti src di bawah ini dengan logo barumu nanti */}
        <img src="/poster/image1.png" alt="Partner 1" className="h-27 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
        <img src="/poster/images2.png" alt="Partner 2" className="h-27 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
      </div>

      {/* 2. Menu Navigasi dengan Deteksi Otomatis */}
      <div className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-500 ${
        isScrolled ? "bg-slate-50 border border-slate-100" : "bg-white/5 border border-white/10 backdrop-blur-sm"
      }`}>
        <Link href="/#home" className={getNavLinkClass('home')}>Home</Link>
        <Link href="/#paket" className={getNavLinkClass('paket')}>Paket</Link>
        <Link href="/#produk-digital" className={getNavLinkClass('produk-digital')}>Produk Digital</Link>
        <Link href="/#area-layanan" className={getNavLinkClass('area-layanan')}>Area Layanan</Link>
        <Link href="/#testimoni" className={getNavLinkClass('testimoni')}>Testimoni</Link>
      </div>

       <div className="flex items-center gap-1">
       <img 
          src="/poster/indibizlogo2-removebg-preview.png" 
          alt="LogoIndibiz" 
          className="h-9 w-auto object-contain " 
        />
        <span className="font-extrabold text-[#1e3fae] text-lg tracking-tight">Indibiz</span>
      </div>

      
      {/* 3. Tombol Aksi */}
      <Link 
        href="https://wa.me/xxxx" 
        className="bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-sm"
      >
        Chat WhatsApp
      </Link>

    </nav>
    </header>
  );
}