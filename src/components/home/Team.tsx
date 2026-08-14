"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Globe, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Marcus Thorne",
    role: "Master Barber",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80",
    bio: "With over 15 years of experience, Marcus specializes in classic cuts and hot towel shaves.",
  },
  {
    name: "Elias Vance",
    role: "Senior Stylist",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80",
    bio: "Elias is our resident expert in modern fading techniques and beard sculpting.",
  },
  {
    name: "Julian Cross",
    role: "Barber",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80",
    bio: "Julian brings a fresh perspective with a keen eye for contemporary trends and precise detailing.",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[var(--card)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Master Craftsmen</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)]" style={{ fontFamily: "var(--font-heading)" }}>Meet The Barbers</h3>
          <div className="mt-6 w-16 h-1 bg-[var(--accent)] mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 border border-[var(--accent)]/10 group-hover:border-[var(--accent)]/40 transition-colors duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay with socials */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <a href="#" className="p-2 bg-[var(--background)]/80 backdrop-blur-sm rounded-full text-white hover:text-[var(--accent)] hover:bg-[var(--card)] transition-colors">
                      <Globe className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-[var(--background)]/80 backdrop-blur-sm rounded-full text-white hover:text-[var(--accent)] hover:bg-[var(--card)] transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold text-[var(--foreground)] mb-1" style={{ fontFamily: "var(--font-heading)" }}>{member.name}</h4>
                <p className="text-[var(--accent)] text-sm uppercase tracking-widest font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 font-light leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
