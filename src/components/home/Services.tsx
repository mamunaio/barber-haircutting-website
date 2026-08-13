const services = [
  {
    title: "Signature Haircut",
    description: "A precision tailored cut, including consultation, wash, styling, and hot towel finish.",
    price: "$45",
  },
  {
    title: "Classic Beard Trim",
    description: "Detailed beard shaping, straight razor line up, and conditioning oil treatment.",
    price: "$30",
  },
  {
    title: "The Royal Shave",
    description: "Traditional hot towel straight razor shave with premium lather and soothing aftershave.",
    price: "$40",
  },
  {
    title: "Hair & Beard Combo",
    description: "The ultimate grooming package combining our Signature Haircut and Classic Beard Trim.",
    price: "$70",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[var(--accent)] tracking-widest uppercase mb-2">Our Offerings</h2>
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)]">Grooming Services</h3>
          <div className="mt-4 w-24 h-1 bg-[var(--accent)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="flex justify-between items-baseline mb-4 border-b border-[var(--border)] pb-2 transition-colors duration-300 group-hover:border-[var(--accent)]">
                <h4 className="text-2xl font-semibold text-[var(--foreground)] tracking-wide">{service.title}</h4>
                <span className="text-2xl font-bold text-[var(--accent)]">{service.price}</span>
              </div>
              <p className="text-[var(--muted-foreground)] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
