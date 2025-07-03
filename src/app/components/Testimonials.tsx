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
      content: "I've been buying jewelry from Darshan Soni for over 15 years. Their attention to detail and commitment to quality is what keeps me coming back. The family's legacy truly shows in every piece.",
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
    <section id="testimonials" className="py-20 bg-gradient-to-b from-section-bg to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-6">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about 
            their experience with Darshan Soni Jewelers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gradient-to-br from-card-bg to-section-bg rounded-2xl p-8 border border-border-color hover:border-gold/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <span key={index} className="text-gold text-xl">⭐</span>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-foreground/80 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gold font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-foreground font-semibold">{testimonial.name}</div>
                  <div className="text-gold/80 text-sm">{testimonial.role}</div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 text-gold/20 text-4xl">"</div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">15K+</div>
              <div className="text-foreground/70">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">4.9</div>
              <div className="text-foreground/70">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">38</div>
              <div className="text-foreground/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">100%</div>
              <div className="text-foreground/70">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 