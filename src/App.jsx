import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { About, Services, Process, Testimonials } from './components/Sections';

function App() {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      {/* SEO meta + JSON-LD minimal via React Helmet-like pattern (inline) */}
      <HeadTags />

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function HeadTags() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Monochrome Gallery',
    url: typeof window !== 'undefined' ? window.location.href : 'https://example.com',
    sameAs: [
      'https://instagram.com/yourbrand',
      'https://www.youtube.com/@yourbrand'
    ],
    logo: 'https://placehold.co/200x200/111/FFF?text=Mono',
  };

  return (
    <>
      <title>Monochrome Gallery — Jasa Editing Foto & Video Minimalis Elegan</title>
      <meta name="description" content="Studio editing foto dan video berestetika monokrom dengan aksen emas. Konsisten, tajam, dan premium untuk brand & personal." />
      <meta name="keywords" content="editing foto, editing video, monokrom, grayscale, jasa retouching, color grading" />
      <meta property="og:title" content="Monochrome Gallery" />
      <meta property="og:description" content="Editing foto & video berkelas, minimalis, abadi." />
      <meta property="og:type" content="website" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Monochrome Gallery. Seluruh hak cipta.
        </p>
        <div className="flex items-center gap-4">
          <a href="#services" className="hover:text-amber-600">Layanan</a>
          <a href="#portfolio" className="hover:text-amber-600">Portfolio</a>
          <a href="#contact" className="hover:text-amber-600">Kontak</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
