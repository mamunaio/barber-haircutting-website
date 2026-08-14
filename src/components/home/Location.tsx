"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-[var(--card)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3"
          >
            <h2 className="text-sm font-semibold text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Visit Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Location & Hours</h3>
            <div className="w-16 h-1 bg-[var(--accent)] rounded-full mb-10 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--background)] rounded-full border border-[var(--border)]">
                  <MapPin className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-wider">Address</h4>
                  <p className="text-gray-400 font-light">123 Vintage Avenue, Suite 100<br/>New York, NY 10012</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--background)] rounded-full border border-[var(--border)]">
                  <Clock className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-wider">Hours</h4>
                  <ul className="text-gray-400 font-light space-y-1">
                    <li className="flex justify-between w-48"><span>Mon - Fri:</span> <span>9:00 AM - 8:00 PM</span></li>
                    <li className="flex justify-between w-48"><span>Saturday:</span> <span>9:00 AM - 6:00 PM</span></li>
                    <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--background)] rounded-full border border-[var(--border)]">
                  <Phone className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-wider">Contact</h4>
                  <p className="text-gray-400 font-light">(555) 123-4567<br/>hello@theclassicbarber.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-[var(--accent)]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
              {/* Simulated Map image since we don't have an API key */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 to-transparent" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.8)] mb-2 animate-bounce">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div className="px-4 py-2 bg-[var(--card)] border border-[var(--accent)]/50 rounded-lg shadow-xl backdrop-blur-md">
                  <p className="text-white font-bold tracking-widest uppercase text-sm">Premium Barbershop</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
