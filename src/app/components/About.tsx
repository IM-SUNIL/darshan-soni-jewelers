export default function About() {
  return (
    <section id="about" className="bg-white rounded-xl shadow-card py-16 px-6 mb-12 text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-6">Our Story</h2>
      <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto mb-8 font-medium">
        For over three decades, Darshan Soni Jewelers has been synonymous with exquisite craftsmanship and timeless design. Our legacy is built on a passion for creating jewelry that marks life’s most precious moments.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
        <div className="flex-1">
          <div className="text-3xl font-bold text-gold mb-2">38+</div>
          <div className="text-black/70">Years of Excellence</div>
        </div>
        <div className="flex-1">
          <div className="text-3xl font-bold text-gold mb-2">10,000+</div>
          <div className="text-black/70">Happy Clients</div>
        </div>
        <div className="flex-1">
          <div className="text-3xl font-bold text-gold mb-2">100%</div>
          <div className="text-black/70">Certified Gold</div>
        </div>
      </div>
    </section>
  );
} 