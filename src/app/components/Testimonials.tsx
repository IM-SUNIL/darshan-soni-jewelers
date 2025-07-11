export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white rounded-xl shadow-card py-16 px-6 mb-12">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold text-center mb-10">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-blush rounded-xl shadow-card p-6 flex flex-col items-center">
          <div className="w-20 h-20 bg-gold rounded-full mb-4"></div>
          <p className="text-black/80 text-center mb-4">“The craftsmanship is simply outstanding. My wedding set was everything I dreamed of and more!”</p>
          <div className="font-bold text-gold">Priya S.</div>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-blush rounded-xl shadow-card p-6 flex flex-col items-center">
          <div className="w-20 h-20 bg-gold rounded-full mb-4"></div>
          <p className="text-black/80 text-center mb-4">“Exceptional service and truly unique designs. I always get compliments on my jewelry!”</p>
          <div className="font-bold text-gold">Amit K.</div>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-blush rounded-xl shadow-card p-6 flex flex-col items-center">
          <div className="w-20 h-20 bg-gold rounded-full mb-4"></div>
          <p className="text-black/80 text-center mb-4">“A family tradition for generations. Every piece tells a story and is made with love.”</p>
          <div className="font-bold text-gold">Neha R.</div>
        </div>
      </div>
    </section>
  );
} 