"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Luxury Barbershop Interior"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase" 
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Master the <span className="text-[var(--accent)]">Classic</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl font-light"
        >
          Experience the pinnacle of grooming in a luxurious, modern setting. Precision cuts, expert styling, and an atmosphere designed for the modern gentleman.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#booking"
            className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-semibold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-transparent border border-white text-white font-semibold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 ease-in-out"
          >
            Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
