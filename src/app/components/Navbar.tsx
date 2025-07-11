import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-6 flex justify-between items-center bg-white/90 shadow-card rounded-xl mt-6 mb-10">
      <div className="flex-1 flex justify-start">
        <Link href="/">
          <span className="text-2xl font-serif font-bold text-gold tracking-tight">Darshan Soni Jewelers</span>
        </Link>
      </div>
      <div className="flex-1 flex justify-end space-x-8">
        <a href="#about" className="text-base font-medium text-black hover:text-gold transition">About</a>
        <a href="#collections" className="text-base font-medium text-black hover:text-gold transition">Collections</a>
        <a href="#testimonials" className="text-base font-medium text-black hover:text-gold transition">Testimonials</a>
        <a href="#contact" className="text-base font-medium text-black hover:text-gold transition">Contact</a>
      </div>
    </nav>
  );
} 