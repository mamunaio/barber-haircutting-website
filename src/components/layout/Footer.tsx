import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <h4 className="text-2xl font-bold uppercase tracking-widest text-white mb-6">The Classic</h4>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              Elevating the standard of men's grooming. Where traditional barbering meets modern luxury.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-[var(--muted-foreground)] hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#services" className="text-[var(--muted-foreground)] hover:text-white transition-colors">Services</a></li>
              <li><a href="#team" className="text-[var(--muted-foreground)] hover:text-white transition-colors">Meet the Team</a></li>
              <li><a href="#gallery" className="text-[var(--muted-foreground)] hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-[var(--muted-foreground)] hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#booking" className="text-[var(--muted-foreground)] hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[var(--muted-foreground)]">
                <MapPin className="w-5 h-5 text-[var(--accent)] flex-shrink-0" />
                <span>123 Vintage Avenue, Suite 100<br />New York, NY 10012</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--muted-foreground)]">
                <Phone className="w-5 h-5 text-[var(--accent)] flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--muted-foreground)]">
                <Mail className="w-5 h-5 text-[var(--accent)] flex-shrink-0" />
                <span>mamunahmed24.ma#@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">Working Hours</h4>
            <ul className="space-y-3 text-[var(--muted-foreground)]">
              <li className="flex justify-between border-b border-[var(--border)] pb-2">
                <span>Monday - Friday</span>
                <span className="text-white">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-[var(--border)] pb-2">
                <span>Saturday</span>
                <span className="text-white">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-[var(--border)] pb-2">
                <span>Sunday</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--muted-foreground)] text-sm">
            &copy; {new Date().getFullYear()} The Classic Barber. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[var(--muted-foreground)] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[var(--muted-foreground)] hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
