export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gold/10 dark:from-black dark:via-black/90 dark:to-gold/20">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Crafting</span>
            <span className="text-gold block sm:inline sm:ml-4">Elegance</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gold-dark dark:text-gold-light mb-8 font-light">
            Since 1985
          </p>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover the finest collection of premium Indian jewelry, where tradition meets contemporary design. 
            Each piece tells a story of heritage, craftsmanship, and timeless beauty.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gold text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/25">
              <span className="relative z-10">Explore Collections</span>
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition-all duration-300">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gold/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-gold/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 border border-gold/40 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-8 w-8 h-8 border border-gold/30 rounded-full animate-pulse delay-1500"></div>
    </section>
  );
} 