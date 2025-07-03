import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Collections />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
