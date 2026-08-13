"use client";

import { useState, useRef, useEffect } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { CalendarIcon } from "lucide-react";
import "react-day-picker/dist/style.css";

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    };

    const handleScroll = () => {
      if (isCalendarOpen) {
        setIsCalendarOpen(false);
      }
    };

    if (isCalendarOpen) {
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
  }, [isCalendarOpen]);

  return (
    <section id="booking" className="py-24 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[var(--accent)] tracking-widest uppercase mb-2">Reserve Your Seat</h2>
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)]">Book Appointment</h3>
          <div className="mt-4 w-24 h-1 bg-[var(--accent)] mx-auto"></div>
        </div>

        <div className="bg-[var(--card)] p-8 md:p-12 border border-[var(--border)] shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--muted-foreground)] mb-2 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-[var(--border)] py-2 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors rounded-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--muted-foreground)] mb-2 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-transparent border-b border-[var(--border)] py-2 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors rounded-none"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[var(--muted-foreground)] mb-2 uppercase tracking-wider">Service</label>
                <select
                  id="service"
                  className="w-full bg-transparent border-b border-[var(--border)] py-2 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors rounded-none appearance-none cursor-pointer"
                >
                  <option className="bg-[var(--card)] text-white">Signature Haircut</option>
                  <option className="bg-[var(--card)] text-white">Classic Beard Trim</option>
                  <option className="bg-[var(--card)] text-white">The Royal Shave</option>
                  <option className="bg-[var(--card)] text-white">Hair & Beard Combo</option>
                </select>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-[var(--muted-foreground)] mb-2 uppercase tracking-wider">Preferred Date</label>
                <div 
                  className="w-full flex justify-between items-center bg-transparent border-b border-[var(--border)] py-2 text-[var(--foreground)] cursor-pointer hover:border-[var(--accent)] transition-colors"
                  onClick={() => setIsCalendarOpen(true)}
                >
                  <span className={selectedDate ? "text-white" : "text-[var(--muted-foreground)]"}>
                    {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                  </span>
                  <CalendarIcon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                
                {isCalendarOpen && (
                  <div 
                    ref={calendarRef}
                    className="absolute z-50 bottom-full mb-2 right-0 md:left-0 bg-[var(--card)] border border-[var(--border)] p-4 shadow-xl rounded-lg" style={{
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
                      className="text-white bg-[var(--card)]"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6">
              <button
                type="button"
                className="w-full py-4 bg-[var(--foreground)] text-[var(--background)] font-semibold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-all duration-300"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
