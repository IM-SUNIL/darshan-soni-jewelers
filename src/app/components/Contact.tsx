'use client';

import { useState } from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white rounded-xl shadow-card py-16 px-6 mb-12 max-w-2xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold text-center mb-8">Contact Us</h2>
      <p className="text-lg md:text-xl text-black/80 text-center mb-8 font-medium">
        Have a question or want to book a consultation? Fill out the form below and our team will get back to you soon.
      </p>
      <form className="flex flex-col gap-6">
        <input type="text" placeholder="Your Name" className="rounded-xl border border-gold/40 px-5 py-3 text-lg focus:outline-none focus:border-gold" required />
        <input type="email" placeholder="Your Email" className="rounded-xl border border-gold/40 px-5 py-3 text-lg focus:outline-none focus:border-gold" required />
        <textarea placeholder="Your Message" className="rounded-xl border border-gold/40 px-5 py-3 text-lg focus:outline-none focus:border-gold min-h-[120px]" required />
        <button type="submit" className="btn bg-gold text-black text-lg font-semibold shadow-card hover:scale-105 transition mt-2">Send Message</button>
      </form>
      <div className="mt-10 text-center text-black/60">
        <div>Or visit us at: <span className="text-black font-semibold">123 Gold Street, Mumbai</span></div>
        <div className="mt-2">Phone: <a href="tel:+911234567890" className="text-gold font-semibold">+91 12345 67890</a></div>
      </div>
    </section>
  );
} 