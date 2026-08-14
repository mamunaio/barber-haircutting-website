"use client";

import { motion, Variants } from "framer-motion";
import { Scissors, Sparkles, Wind, Droplet } from "lucide-react";

const services = [
  {
    title: "Signature Haircut",
    description: "Precision cut tailored to your face shape and personal style.",
    price: "$45",
    icon: Scissors,
  },
  {
    title: "Classic Beard Trim",
    description: "Expert sculpting, hot towel, and straight razor line-up.",
    price: "$30",
    icon: Sparkles,
  },
  {
    title: "The Royal Shave",
    description: "Traditional hot lather straight razor shave for ultimate smoothness.",
    price: "$40",
    icon: Droplet,
  },
  {
    title: "Hair & Beard Combo",
    description: "The complete package. Look your best from top to bottom.",
    price: "$65",
    icon: Wind,
  }
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[var(--accent)] opacity-[0.03] blur-[100px]" />
        <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[var(--accent)] opacity-[0.02] blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Our Offerings</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)]" style={{ fontFamily: "var(--font-heading)" }}>Grooming Services</h3>
          <div className="mt-6 w-16 h-1 bg-[var(--accent)] mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group relative p-8 rounded-2xl glass transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[var(--accent)]/30 overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] group-hover:border-[var(--accent)]/50 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[var(--accent)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="text-2xl font-semibold text-[var(--foreground)] tracking-wide">{service.title}</h4>
                      <span className="text-2xl font-bold text-[var(--accent)]">{service.price}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed font-light">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
