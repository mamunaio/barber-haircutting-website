"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80"
          alt="Luxury Barbershop Interior"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--background)]" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-block"
        >
          <span className="text-[var(--accent)] font-semibold tracking-[0.3em] uppercase text-sm glass px-4 py-2 rounded-full">
            Premium Grooming Experience
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 uppercase leading-none" 
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Master the <br className="md:hidden" /><span className="text-[var(--accent)]">Classic</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed"
        >
          Experience the pinnacle of grooming in a luxurious, modern setting. Precision cuts, expert styling, and an atmosphere designed for the modern gentleman.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#booking"
            className="px-10 py-4 bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold uppercase tracking-widest hover:bg-white transition-all duration-300 ease-in-out transform hover:scale-105 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-10 py-4 glass text-white font-semibold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 ease-in-out rounded-sm"
          >
            Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
