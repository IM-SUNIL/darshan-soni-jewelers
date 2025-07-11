export default function Footer() {
  return (
    <footer className="w-full py-10 px-4 text-center text-gray-700 dark:text-gray-200 bg-gradient-to-r from-gold/10 via-yellow-50 to-pink-100 dark:from-black dark:via-gold/10 dark:to-yellow-900 animate-gradient transition-colors duration-500 shadow-inner border-t-2 border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-3 sm:mb-4">Darshan Soni Jewelers</h3>
            <p className="text-gray-700 dark:text-white/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Crafting elegance since 1985. We are committed to providing the finest quality 
              jewelry with exceptional craftsmanship and timeless designs.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gold hover:text-gold-light transition-colors p-1">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors p-1">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#home" className="text-gray-600 dark:text-white/70 hover:text-gold transition-colors text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-white/70 hover:text-gold transition-colors text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#collections" className="text-gray-600 dark:text-white/70 hover:text-gold transition-colors text-sm sm:text-base">
                  Collections
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 dark:text-white/70 hover:text-gold transition-colors text-sm sm:text-base">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-white/70 hover:text-gold transition-colors text-sm sm:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Contact Info</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-600 dark:text-white/70 text-xs sm:text-sm">
              <li>SHOP NO-1, GARADE HEIGHTS</li>
              <li>Hinjawadi, Pune</li>
              <li>Maharashtra 411057, India</li>
              <li className="pt-1 sm:pt-2">
                <a href="tel:+91-22-1234-5678" className="hover:text-gold transition-colors">
                  +91 22 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:info@darshansoni.com" className="hover:text-gold transition-colors">
                  info@darshansoni.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2024 Darshan Soni Jewelers. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gold text-xs sm:text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gold text-xs sm:text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gold text-xs sm:text-sm transition-colors">
              Return Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 