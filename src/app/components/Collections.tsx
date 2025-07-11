export default function Collections() {
  const collections = [
    {
      id: 1,
      name: "Rings",
      description: "Exquisite rings crafted with precision and elegance",
      image: "💍",
      features: ["Diamond Rings", "Gold Rings", "Platinum Rings", "Custom Designs"]
    },
    {
      id: 2,
      name: "Necklaces",
      description: "Timeless necklaces that tell stories of heritage",
      image: "📿",
      features: ["Gold Chains", "Diamond Necklaces", "Pearl Sets", "Traditional Designs"]
    },
    {
      id: 3,
      name: "Bridal Sets",
      description: "Complete bridal jewelry for your special day",
      image: "👰",
      features: ["Necklace Sets", "Earrings", "Bangles", "Mangalsutra"]
    }
  ];

  return (
    <section id="collections" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-yellow-50 to-gold/10 dark:from-black dark:via-gold/10 dark:to-yellow-900 animate-gradient transition-colors duration-500 rounded-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-6">Our Collections</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto">
            Discover our carefully curated collections, each piece crafted with the finest materials 
            and traditional techniques passed down through generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gold/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {/* Collection Icon */}
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {collection.image}
              </div>

              {/* Collection Details */}
              <h3 className="text-2xl font-bold text-gold mb-4 text-center">
                {collection.name}
              </h3>
              <p className="text-gray-700 dark:text-white/80 text-center mb-6 leading-relaxed">
                {collection.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {collection.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-white/70">
                    <span className="text-gold mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full mt-8 py-3 px-6 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-gold/25">
                Explore {collection.name}
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Special Collection Banner */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 border border-gold/30 shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gold mb-4">Limited Edition Collection</h3>
            <p className="text-gray-700 dark:text-white/80 mb-6 max-w-2xl mx-auto">
              Experience our exclusive limited edition pieces, crafted with rare gemstones and 
              featuring unique designs that celebrate our heritage.
            </p>
            <button className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition-all duration-300">
              View Limited Editions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 