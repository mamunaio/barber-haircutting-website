"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop", style: "Classic Fade", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop", style: "Beard Trim", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop", style: "Hot Towel Shave", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop", style: "Modern Pompadour", span: "md:col-span-1 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop", style: "Executive Contour", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop", style: "Skin Fade", span: "md:col-span-2 md:row-span-1" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[var(--card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)]" style={{ fontFamily: "var(--font-heading)" }}>Style Gallery</h3>
          <div className="mt-6 w-16 h-1 bg-[var(--accent)] mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]"
        >
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`relative overflow-hidden group cursor-pointer rounded-xl ${img.span}`}
            >
              <Image
                src={img.src}
                alt={`Barbershop work - ${img.style}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[var(--accent)] font-semibold tracking-widest text-sm uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Style</span>
                <h4 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150" style={{ fontFamily: "var(--font-heading)" }}>{img.style}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
