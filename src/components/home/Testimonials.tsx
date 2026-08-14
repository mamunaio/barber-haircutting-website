"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Anderson",
    role: "Local Resident",
    content: "Hands down the best barbershop in the city. The attention to detail and the atmosphere are unmatched. I've been coming here for two years and have never been disappointed.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Executive",
    content: "Finding a barber who understands exactly what you want is rare. The team here listens, advises, and delivers a perfect cut every single time. Highly recommended for professionals.",
    rating: 5,
  },
  {
    name: "David Roberts",
    role: "First-time Customer",
    content: "The hot towel shave is an absolute game changer. It's not just a haircut, it's a full grooming experience. The complimentary beverage while waiting was a nice touch.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border)] to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Client Stories</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)]" style={{ fontFamily: "var(--font-heading)" }}>Word on the Street</h3>
          <div className="mt-6 w-16 h-1 bg-[var(--accent)] mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[var(--accent)]/10 group-hover:text-[var(--accent)]/20 transition-colors duration-300" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--accent)] text-[var(--accent)]" />
                ))}
              </div>
              
              <p className="text-gray-300 font-light leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto">
                <h4 className="text-lg font-bold text-white tracking-wide">{testimonial.name}</h4>
                <p className="text-sm text-[var(--muted-foreground)] uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
