export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-4 sm:mb-6">About Our Legacy</h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Three Generations of Excellence
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-white/90 leading-relaxed">
              Founded in 1985 by the visionary Darshan Soni, our jewelry house has been crafting 
              exceptional pieces that blend traditional Indian artistry with contemporary elegance. 
              What began as a small family workshop has grown into one of India's most trusted 
              names in premium jewelry.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-white/90 leading-relaxed">
              Our master craftsmen, trained in age-old techniques passed down through generations, 
              bring each design to life with meticulous attention to detail. Every piece tells a 
              story of heritage, love, and the timeless beauty of fine jewelry.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-white/90 leading-relaxed">
              Today, under the leadership of the third generation, we continue to honor our 
              founding principles while embracing modern design sensibilities, ensuring that 
              every creation is a masterpiece of both tradition and innovation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">38+</div>
                <div className="text-gray-600 dark:text-white/70 text-xs sm:text-sm md:text-base">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">10K+</div>
                <div className="text-gray-600 dark:text-white/70 text-xs sm:text-sm md:text-base">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">100%</div>
                <div className="text-gray-600 dark:text-white/70 text-xs sm:text-sm md:text-base">Pure Gold</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl p-4 sm:p-6 md:p-8 border border-gold/30">
              <div className="h-full w-full bg-gradient-to-br from-gold/10 to-transparent rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">✨</div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gold mb-1 sm:mb-2">Craftsmanship</h4>
                  <p className="text-gray-600 dark:text-white/70 text-xs sm:text-sm md:text-base">Where tradition meets innovation</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 border border-gold/40 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border border-gold/30 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 