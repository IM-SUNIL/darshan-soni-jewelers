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
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-4 sm:mb-6">Contact Us</h2>
          <div className="w-16 sm:w-24 h-1 bg-gold mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-white/70 max-w-2xl md:max-w-3xl mx-auto">
            Ready to start your jewelry journey? Get in touch with us for consultations, custom designs, or to explore our collections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gold mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-gray-700 dark:text-white/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Visit our showroom to experience the beauty of our collections in person, or reach out to us for any inquiries about our jewelry pieces.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-lg sm:text-xl">📍</span>
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-1 sm:mb-2 text-base sm:text-lg">Visit Our Showroom</h4>
                  <p className="text-gray-600 dark:text-white/70 text-sm sm:text-base">
                    SHOP NO-1, GARADE HEIGHTS<br />
                    Dange Chowk Rd, opp. KESHAV MANGAL KARAYALAY<br />
                    near Gram Panchayat Building, Hinjawadi<br />
                    Pune, Pimpri-Chinchwad, Maharashtra 411057<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-lg sm:text-xl">📞</span>
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-1 sm:mb-2 text-base sm:text-lg">Call Us</h4>
                  <p className="text-gray-600 dark:text-white/70 text-sm sm:text-base">
                    <a href="tel:+91-22-1234-5678" className="hover:text-gold transition-colors">+91 22 1234 5678</a><br />
                    <a href="tel:+91-98765-43210" className="hover:text-gold transition-colors">+91 98765 43210</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-lg sm:text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-1 sm:mb-2 text-base sm:text-lg">Email Us</h4>
                  <p className="text-gray-600 dark:text-white/70 text-sm sm:text-base">
                    <a href="mailto:info@darshansoni.com" className="hover:text-gold transition-colors">info@darshansoni.com</a><br />
                    <a href="mailto:sales@darshansoni.com" className="hover:text-gold transition-colors">sales@darshansoni.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-lg sm:text-xl">🕒</span>
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-1 sm:mb-2 text-base sm:text-lg">Business Hours</h4>
                  <p className="text-gray-600 dark:text-white/70 text-sm sm:text-base">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: 11:00 AM - 6:00 PM<br />
                    Closed on National Holidays
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-gold mb-4 sm:mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 dark:text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 dark:text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-900 dark:text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 dark:text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gold transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about your jewelry needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 hover:shadow-lg hover:shadow-gold/25 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-gold mb-4 sm:mb-6">Find Us</h3>
          <div className="w-16 sm:w-24 h-1 bg-gold mx-auto mb-4 sm:mb-8"></div>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Map */}
            <div className="relative w-full">
              <div className="aspect-video bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl border border-gold/30 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Darshan+Soni+Jewelers,+Hinjawadi,+Pune,+Maharashtra&output=embed"
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
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gold mb-2 sm:mb-4">Our Location</h4>
                <p className="text-gray-700 dark:text-white/80 leading-relaxed text-sm sm:text-base">
                  Located in the heart of Hinjawadi, Pune, our showroom is easily accessible and conveniently situated near major landmarks. Visit us to experience the finest collection of jewelry in a luxurious setting.
                </p>
              </div>

              <div className="space-y-2 sm:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold text-xs sm:text-sm">📍</span>
                  </div>
                  <div>
                    <h5 className="text-gray-900 dark:text-white font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">Landmark</h5>
                    <p className="text-gray-600 dark:text-white/70 text-xs sm:text-sm">Opposite KESHAV MANGAL KARAYALAY, near Gram Panchayat Building</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold text-xs sm:text-sm">🚗</span>
                  </div>
                  <div>
                    <h5 className="text-gray-900 dark:text-white font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">Parking</h5>
                    <p className="text-gray-600 dark:text-white/70 text-xs sm:text-sm">Convenient parking available in front of the building</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold text-xs sm:text-sm">🚌</span>
                  </div>
                  <div>
                    <h5 className="text-gray-900 dark:text-white font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">Public Transport</h5>
                    <p className="text-gray-600 dark:text-white/70 text-xs sm:text-sm">Well connected by bus routes and auto-rickshaws</p>
                  </div>
                </div>
              </div>

              <button className="px-4 py-2 sm:px-6 sm:py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-sm sm:text-base">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 