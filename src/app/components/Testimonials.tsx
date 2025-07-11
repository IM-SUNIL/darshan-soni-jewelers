export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Bride",
      content: "Darshan Soni Jewelers created the most beautiful bridal set for my wedding. The craftsmanship is exceptional and the gold quality is unmatched. Every piece tells a story of tradition and elegance.",
      rating: 5
    },
    {
      id: 2,
      name: "Rajesh Patel",
      role: "Customer",
      content: "I&apos;ve been buying jewelry from Darshan Soni for over 15 years. Their attention to detail and commitment to quality is what keeps me coming back. The family&apos;s legacy truly shows in every piece.",
      rating: 5
    },
    {
      id: 3,
      name: "Anjali Desai",
      role: "Customer",
      content: "The custom ring they designed for my anniversary was absolutely perfect. The team understood exactly what I wanted and delivered beyond my expectations. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold/10 via-yellow-50 to-pink-50 dark:from-black dark:via-gold/10 dark:to-yellow-900 animate-gradient transition-colors duration-500 rounded-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-4 sm:mb-6">What Our Customers Say</h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gold mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-white/70 max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-0">
            Don&apos;t just take our word for it. Here&apos;s what our valued customers have to say about 
            their experience with Darshan Soni Jewelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:border-gold/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {/* Rating Stars */}
              <div className="flex mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <span key={index} className="text-gold text-lg sm:text-xl">⭐</span>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 dark:text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-gold font-semibold text-base sm:text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white font-semibold text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-gold/80 text-xs sm:text-sm">{testimonial.role}</div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gold/20 text-2xl sm:text-3xl md:text-4xl">&ldquo;</div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">15K+</div>
              <div className="text-gray-600 dark:text-white/70 text-xs sm:text-sm md:text-base">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">4.9</div>
              <div className="text-gray-600 dark:text-white/70 text-xs sm:text-sm md:text-base">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">38</div>
              <div className="text-gray-600 dark:text-white/70 text-xs sm:text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">100%</div>
              <div className="text-gray-600 dark:text-white/70 text-xs sm:text-sm md:text-base">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 