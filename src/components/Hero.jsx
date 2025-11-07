import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] md:h-[88vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <span className="inline-block text-xs tracking-widest uppercase text-zinc-600">Monochrome Gallery</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight text-zinc-900">
            Editing Foto & Video Berkelas, Minimalis, Abadi
          </h1>
          <p className="mt-4 text-zinc-700 md:text-lg">
            Kami memoles karya Anda dalam palet monokrom dengan aksen emas yang elegan. Konsisten, tajam, dan siap tampil menonjol di setiap platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-6 py-3 rounded-md bg-amber-500 text-white hover:bg-amber-600 transition">Konsultasi Gratis</a>
            <a href="#portfolio" className="px-6 py-3 rounded-md border border-zinc-300 text-zinc-800 hover:border-amber-500 hover:text-amber-600 transition">Lihat Portfolio</a>
          </div>
        </div>
      </div>
    </section>
  );
}
