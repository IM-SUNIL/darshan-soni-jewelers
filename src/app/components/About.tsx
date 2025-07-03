export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-section-bg to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-6">About Our Legacy</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-foreground mb-6">
              Three Generations of Excellence
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Founded in 1985 by the visionary Darshan Soni, our jewelry house has been crafting 
              exceptional pieces that blend traditional Indian artistry with contemporary elegance. 
              What began as a small family workshop has grown into one of India's most trusted 
              names in premium jewelry.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our master craftsmen, trained in age-old techniques passed down through generations, 
              bring each design to life with meticulous attention to detail. Every piece tells a 
              story of heritage, love, and the timeless beauty of fine jewelry.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Today, under the leadership of the third generation, we continue to honor our 
              founding principles while embracing modern design sensibilities, ensuring that 
              every creation is a masterpiece of both tradition and innovation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">38+</div>
                <div className="text-foreground/70">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">10K+</div>
                <div className="text-foreground/70">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">100%</div>
                <div className="text-foreground/70">Pure Gold</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl p-8 border border-gold/30">
              <div className="h-full w-full bg-gradient-to-br from-gold/10 to-transparent rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <h4 className="text-xl font-semibold text-gold mb-2">Craftsmanship</h4>
                  <p className="text-foreground/70">Where tradition meets innovation</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border border-gold/40 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border border-gold/30 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 