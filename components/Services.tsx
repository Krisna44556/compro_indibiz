'use client';

import { useEffect, useState, useRef } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Menggunakan Intersection Observer bawaan browser (Sangat akurat dari arah scroll mana pun)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Muncul jika 10% dari grid sudah masuk layar
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const servicesData = [
    { id: 's1', number: '01', title: 'High-Speed Internet Business', description: 'Koneksi simetris dedicated khusus untuk operasional bisnis', tag: 'Core Network' },
    { id: 's2', number: '02', title: '24/7 Managed IT Support', description: 'Tim ahli yang siap memonitor infrastruktur digital Anda', tag: 'Security' },
    { id: 's3', number: '03', title: 'Professional Technician', description: 'Penanganan cepat oleh tenaga ahli', tag: 'Security' }
  ];


  return (
    <section ref={sectionRef} id="layanan" className="w-full mt-1 pb-44 bg-white px-6 md:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} max-w-2xl mb-20`}>
          <h2 className="text-3xl md:text-5xl font-extrabold [#1e3fae]-900 tracking-tight mt-3">
            Layanan Terintegrasi <br /> untuk Akselerasi Bisnis <br /> Anda
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="services-grid w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((services, index) => (
            <div 
              key={services.id}
              className={`expanding-border-card group bg-white border border-slate-100 p-8 rounded-[24px] shadow-sm transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } flex flex-col justify-between min-h-[320px]`}
              >
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-50 text-[#1e3fae] rounded-full border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {services.tag}
                  </span>
                  <span className="text-3xl font-light font-mono text-[#1e3fae] group-hover:text-white transition-colors">
                    {services.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold [#1e3fae]-900 mt-8 group-hover:text-white transition-colors">
                  {services.title}
                </h3>
                <p className="text-sm [#1e3fae]-400 mt-3 leading-relaxed">
                  {services.description}
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                {/* <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center [#1e3fae]-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <span className="text-xs">→</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}