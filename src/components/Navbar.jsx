import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-zinc-200 text-zinc-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-3">
          {/* Ganti dengan logo brand Anda */}
          <div className="w-8 h-8 rounded-full bg-zinc-900" aria-hidden="true" />
          <span className="font-semibold tracking-widest uppercase text-zinc-900">Monochrome <span className="text-amber-500">Gallery</span></span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-amber-600 transition">About</a>
          <a href="#services" className="hover:text-amber-600 transition">Services</a>
          <a href="#portfolio" className="hover:text-amber-600 transition">Portfolio</a>
          <a href="#process" className="hover:text-amber-600 transition">Process</a>
          <a href="#testimonials" className="hover:text-amber-600 transition">Testimonials</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-amber-500 text-white hover:bg-amber-600 transition">Contact</a>
        </div>
      </nav>
    </header>
  );
}
