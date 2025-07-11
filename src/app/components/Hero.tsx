export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-pink-200 via-yellow-100 to-gold/30 dark:from-black dark:via-gold/20 dark:to-yellow-900">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 tracking-tight leading-tight drop-shadow-lg">
            <span className="text-gray-900 dark:text-white">Crafting</span>
            <span className="text-gold block sm:inline sm:ml-3 lg:ml-5 font-serif italic">Elegance</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gold-dark dark:text-gold-light mb-8 sm:mb-10 font-light tracking-wide">
            Since 1985
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-white/90 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 font-medium">
            Discover the finest collection of premium Indian jewelry, where tradition meets contemporary design. 
            Each piece tells a story of heritage, craftsmanship, and timeless beauty.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
            <button className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-gold via-yellow-300 to-pink-200 text-black font-bold rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/25 text-base sm:text-lg tracking-wide">
              <span className="relative z-10">Explore Collections</span>
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-gold text-gold font-bold rounded-xl shadow-md hover:bg-gold hover:text-black transition-all duration-300 text-base sm:text-lg tracking-wide">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border border-gold/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 border border-gold/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-2 sm:left-5 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border border-gold/40 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-4 sm:right-8 w-6 sm:w-8 h-6 sm:h-8 border border-gold/30 rounded-full animate-pulse delay-1500"></div>
    </section>
  );
} 