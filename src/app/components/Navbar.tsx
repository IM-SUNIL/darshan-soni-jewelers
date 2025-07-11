'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md transition-colors duration-500 animate-gradient bg-gradient-to-r from-pink-100 via-yellow-50 to-gold/20 dark:from-black dark:via-gold/10 dark:to-yellow-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              className="text-lg sm:text-xl md:text-2xl font-bold text-gold cursor-pointer transition-all duration-300 hover:scale-105" 
              onClick={() => scrollToSection('home')}
            >
              Darshan Soni Jewelers
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-900 dark:text-white hover:text-gold transition-colors duration-300 font-medium text-sm lg:text-base px-2 py-1 rounded-md hover:bg-gold/10"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-900 dark:text-white hover:text-gold transition-colors duration-300 font-medium text-sm lg:text-base px-2 py-1 rounded-md hover:bg-gold/10"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('collections')}
              className="text-gray-900 dark:text-white hover:text-gold transition-colors duration-300 font-medium text-sm lg:text-base px-2 py-1 rounded-md hover:bg-gold/10"
            >
              Collections
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-900 dark:text-white hover:text-gold transition-colors duration-300 font-medium text-sm lg:text-base px-2 py-1 rounded-md hover:bg-gold/10"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-900 dark:text-white hover:text-gold transition-colors duration-300 font-medium text-sm lg:text-base px-2 py-1 rounded-md hover:bg-gold/10"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 dark:text-white hover:text-gold transition-colors duration-300 p-2 rounded-md hover:bg-gold/10"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-900 dark:text-white hover:text-gold hover:bg-gold/10 transition-colors duration-300 font-medium text-sm rounded-md"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-900 dark:text-white hover:text-gold hover:bg-gold/10 transition-colors duration-300 font-medium text-sm rounded-md"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('collections')}
                className="block w-full text-left px-3 py-2 text-gray-900 dark:text-white hover:text-gold hover:bg-gold/10 transition-colors duration-300 font-medium text-sm rounded-md"
              >
                Collections
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-gray-900 dark:text-white hover:text-gold hover:bg-gold/10 transition-colors duration-300 font-medium text-sm rounded-md"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-900 dark:text-white hover:text-gold hover:bg-gold/10 transition-colors duration-300 font-medium text-sm rounded-md"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 