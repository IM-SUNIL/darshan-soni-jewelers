export default function Collections() {
  return (
    <section id="collections" className="bg-white rounded-xl shadow-card py-16 px-6 mb-12">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold text-center mb-10">Featured Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Collection 1 */}
        <div className="bg-blush rounded-xl shadow-card p-6 flex flex-col items-center">
          <div className="w-32 h-32 bg-gold rounded-full mb-6"></div>
          <h3 className="text-2xl font-serif font-bold text-gold mb-2">Heritage Gold</h3>
          <p className="text-black/80 text-center mb-4">Classic gold jewelry inspired by timeless Indian traditions, perfect for every celebration.</p>
          <a href="#" className="btn mt-auto">View Collection</a>
        </div>
        {/* Collection 2 */}
        <div className="bg-blush rounded-xl shadow-card p-6 flex flex-col items-center">
          <div className="w-32 h-32 bg-gold rounded-full mb-6"></div>
          <h3 className="text-2xl font-serif font-bold text-gold mb-2">Modern Elegance</h3>
          <p className="text-black/80 text-center mb-4">Contemporary designs for the modern woman—sleek, stylish, and sophisticated.</p>
          <a href="#" className="btn mt-auto">View Collection</a>
        </div>
        {/* Collection 3 */}
        <div className="bg-blush rounded-xl shadow-card p-6 flex flex-col items-center">
          <div className="w-32 h-32 bg-gold rounded-full mb-6"></div>
          <h3 className="text-2xl font-serif font-bold text-gold mb-2">Bridal Splendor</h3>
          <p className="text-black/80 text-center mb-4">Magnificent bridal sets to make your special day truly unforgettable.</p>
          <a href="#" className="btn mt-auto">View Collection</a>
        </div>
      </div>
    </section>
  );
} 