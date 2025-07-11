export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-[70vh] bg-white rounded-xl shadow-card mb-12 pt-16 pb-20 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-serif font-bold text-gold mb-6 leading-tight drop-shadow-lg">
        Timeless Luxury, <span className="text-black">Crafted for You</span>
      </h1>
      <p className="text-lg md:text-2xl text-black/80 mb-8 max-w-2xl mx-auto font-medium">
        Discover the art of fine jewelry at Darshan Soni Jewelers. Our master artisans blend tradition and innovation to create pieces that celebrate your unique story.
      </p>
      <a href="#collections" className="btn bg-gold text-black text-lg font-semibold shadow-card hover:scale-105 transition">
        Explore Our Collections
      </a>
    </section>
  );
} 