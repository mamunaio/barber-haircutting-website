"use client";

import { useState, useRef, useEffect } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { CalendarIcon, ChevronDown, Check } from "lucide-react";
import { motion } from "framer-motion";
import "react-day-picker/dist/style.css";

const servicesList = [
  "Signature Haircut",
  "Classic Beard Trim",
  "The Royal Shave",
  "Hair & Beard Combo"
];

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const [selectedService, setSelectedService] = useState(servicesList[0]);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
      if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    };

    const handleScroll = () => {
      if (isCalendarOpen) setIsCalendarOpen(false);
      if (isServiceOpen) setIsServiceOpen(false);
    };

    if (isCalendarOpen || isServiceOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isCalendarOpen, isServiceOpen]);

  return (
    <section id="booking" className="py-24 bg-[var(--background)] relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Reserve Your Seat</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)]" style={{ fontFamily: "var(--font-heading)" }}>Book Appointment</h3>
          <div className="mt-6 w-16 h-1 bg-[var(--accent)] mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-2xl border border-[var(--accent)]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
        >
          {/* subtle glow with its own overflow hidden so it doesn't leak out of the border radius, but allows dropdowns to escape the main container */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--accent)]/5 via-transparent to-transparent opacity-50" />
          </div>
          
          <form className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <label htmlFor="name" className="block text-xs font-bold text-[var(--accent)] mb-2 uppercase tracking-[0.1em]">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b-2 border-[var(--border)] py-3 text-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors rounded-none peer"
                  placeholder="John Doe"
                />
              </div>
              <div className="relative group">
                <label htmlFor="phone" className="block text-xs font-bold text-[var(--accent)] mb-2 uppercase tracking-[0.1em]">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-transparent border-b-2 border-[var(--border)] py-3 text-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors rounded-none peer"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group" ref={serviceRef}>
                <label className="block text-xs font-bold text-[var(--accent)] mb-2 uppercase tracking-[0.1em]">Service</label>
                <div 
                  className="w-full flex justify-between items-center bg-transparent border-b-2 border-[var(--border)] py-3 text-lg text-[var(--foreground)] cursor-pointer group-hover:border-[var(--accent)] transition-colors"
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                >
                  <span className="text-white">{selectedService}</span>
                  <ChevronDown className={`w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--accent)] transition-transform duration-300 ${isServiceOpen ? "rotate-180" : ""}`} />
                </div>

                {isServiceOpen && (
                  <div className="absolute z-50 top-full mt-2 left-0 w-full bg-[var(--card)] border border-[var(--accent)]/30 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden">
                    {servicesList.map((service) => (
                      <div
                        key={service}
                        className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
                        onClick={() => {
                          setSelectedService(service);
                          setIsServiceOpen(false);
                        }}
                      >
                        <span className={`text-base ${selectedService === service ? "text-[var(--accent)] font-semibold" : "text-white"}`}>
                          {service}
                        </span>
                        {selectedService === service && (
                          <Check className="w-4 h-4 text-[var(--accent)]" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <label className="block text-xs font-bold text-[var(--accent)] mb-2 uppercase tracking-[0.1em]">Preferred Date</label>
                <div 
                  className="w-full flex justify-between items-center bg-transparent border-b-2 border-[var(--border)] py-3 text-lg text-[var(--foreground)] cursor-pointer group-hover:border-[var(--accent)] transition-colors"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                >
                  <span className={selectedDate ? "text-white" : "text-[var(--muted-foreground)]"}>
                    {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                  </span>
                  <CalendarIcon className="w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--accent)] transition-colors" />
                </div>
                
                {isCalendarOpen && (
                  <div 
                    ref={calendarRef}
                    className="absolute z-50 bottom-full mb-4 right-0 md:left-0 bg-[var(--card)] border border-[var(--accent)]/30 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.8)] rounded-xl" style={{
                    '--rdp-accent-color': 'var(--accent)',
                    '--rdp-accent-background-color': 'var(--accent)',
                    '--rdp-day-height': '2.5rem',
                    '--rdp-day-width': '2.5rem',
                    '--rdp-background-color': 'var(--card)',
                  } as React.CSSProperties}>
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        setIsCalendarOpen(false);
                      }}
                      className="text-white bg-[var(--card)] m-0"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="pt-8">
              <button
                type="button"
                className="w-full py-5 bg-[var(--accent)] text-[var(--accent-foreground)] font-bold text-lg uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] rounded-sm"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
