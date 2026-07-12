'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollAnimation({ children }: { children: React.ReactNode }) {
  // Konfigurasi animasi untuk setiap seksi/konten di dalamnya
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="space-y-0">
      {React.Children.map(children, (child) => {
        if (!child) return null;
        
        return (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={sectionVariants}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}