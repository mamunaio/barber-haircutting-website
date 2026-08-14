import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import Booking from "@/components/home/Booking";
import Location from "@/components/home/Location";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Team />
      <Gallery />
      <Testimonials />
      <Booking />
      <Location />
    </main>
  );
}
