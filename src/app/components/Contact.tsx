'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For static site, we'll use mailto
    const mailtoLink = `mailto:info@darshansoni.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to start your jewelry journey? Get in touch with us for consultations, 
            custom designs, or to explore our collections.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gold mb-6">Get In Touch</h3>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                Visit our showroom to experience the beauty of our collections in person, 
                or reach out to us for any inquiries about our jewelry pieces.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xl">📍</span>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2">Visit Our Showroom</h4>
                  <p className="text-foreground/70">
                    SHOP NO-1, GARADE HEIGHTS<br />
                    Dange Chowk Rd, opp. KESHAV MANGAL KARAYALAY<br />
                    near Gram Panchayat Building, Hinjawadi<br />
                    Pune, Pimpri-Chinchwad, Maharashtra 411057<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xl">📞</span>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2">Call Us</h4>
                  <p className="text-foreground/70">
                    <a href="tel:+91-22-1234-5678" className="hover:text-gold transition-colors">
                      +91 22 1234 5678
                    </a><br />
                    <a href="tel:+91-98765-43210" className="hover:text-gold transition-colors">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2">Email Us</h4>
                  <p className="text-foreground/70">
                    <a href="mailto:info@darshansoni.com" className="hover:text-gold transition-colors">
                      info@darshansoni.com
                    </a><br />
                    <a href="mailto:sales@darshansoni.com" className="hover:text-gold transition-colors">
                      sales@darshansoni.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xl">🕒</span>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2">Business Hours</h4>
                  <p className="text-foreground/70">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: 11:00 AM - 6:00 PM<br />
                    Closed on National Holidays
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-card-bg to-section-bg rounded-2xl p-8 border border-border-color shadow-lg">
            <h3 className="text-2xl font-semibold text-gold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border-color rounded-lg text-foreground placeholder-text-muted focus:outline-none focus:border-gold transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border-color rounded-lg text-foreground placeholder-text-muted focus:outline-none focus:border-gold transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-foreground font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border-color rounded-lg text-foreground placeholder-text-muted focus:outline-none focus:border-gold transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border-color rounded-lg text-foreground placeholder-text-muted focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your jewelry needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 hover:shadow-lg hover:shadow-gold/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gold mb-6">Find Us</h3>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </div>

        <div className="bg-gradient-to-br from-card-bg to-section-bg rounded-2xl p-8 border border-border-color shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl border border-gold/30 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890123!2d73.71234567890123!3d18.59876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8b8b8b8b8b8%3A0xb8b8b8b8b8b8b8b8!2sHinjawadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gold mb-4">Our Location</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Located in the heart of Hinjawadi, Pune, our showroom is easily accessible 
                  and conveniently situated near major landmarks. Visit us to experience the 
                  finest collection of jewelry in a luxurious setting.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold text-sm">📍</span>
                  </div>
                  <div>
                    <h5 className="text-foreground font-medium mb-1">Landmark</h5>
                    <p className="text-foreground/70 text-sm">Opposite KESHAV MANGAL KARAYALAY, near Gram Panchayat Building</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold text-sm">🚗</span>
                  </div>
                  <div>
                    <h5 className="text-foreground font-medium mb-1">Parking</h5>
                    <p className="text-foreground/70 text-sm">Convenient parking available in front of the building</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold text-sm">🚌</span>
                  </div>
                  <div>
                    <h5 className="text-foreground font-medium mb-1">Public Transport</h5>
                    <p className="text-foreground/70 text-sm">Well connected by bus routes and auto-rickshaws</p>
                  </div>
                </div>
              </div>

              <button className="px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 