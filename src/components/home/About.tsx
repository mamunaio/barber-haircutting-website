"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--accent)]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80"
                alt="Barber Shop History"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[var(--accent)]/10 rounded-full blur-[40px] -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[var(--accent)]/10 rounded-full blur-[40px] -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-semibold text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              A Legacy of <br/><span className="text-[var(--accent)]">Excellence</span>
            </h3>
            <div className="w-16 h-1 bg-[var(--accent)] rounded-full mb-8 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
            
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
              Founded on the principles of classic barbering and modern style, our shop has been the cornerstone of men's grooming in the community. We believe that a haircut is more than just a service—it's an experience.
            </p>
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-10">
              Our master barbers combine traditional techniques with contemporary trends to deliver precision cuts, hot towel shaves, and a welcoming atmosphere that makes every client feel at home.
            </p>

            <a
              href="#team"
              className="inline-block px-8 py-4 bg-transparent border border-[var(--accent)] text-[var(--accent)] font-semibold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-all duration-300 ease-in-out rounded-sm"
            >
              Meet The Team
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
