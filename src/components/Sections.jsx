import React from 'react';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Tentang Monochrome Gallery</h2>
          <p className="mt-4 text-zinc-600">
            Kami adalah studio editing foto dan video yang mengedepankan estetika monokrom modern dengan aksen emas. Fokus kami pada detail, konsistensi tone, dan storytelling visual membuat setiap karya terlihat premium dan timeless.
          </p>
          <p className="mt-3 text-zinc-600">
            Dari konten brand, kampanye sosial media, hingga dokumentasi pernikahan—kami memberikan sentuhan akhir yang presisi sehingga pesan Anda tersampaikan kuat.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-lg border border-zinc-200">
            <p className="text-3xl font-semibold text-amber-600">+500</p>
            <p className="text-sm text-zinc-500">Proyek selesai</p>
          </div>
          <div className="p-6 rounded-lg border border-zinc-200">
            <p className="text-3xl font-semibold text-amber-600">4.9/5</p>
            <p className="text-sm text-zinc-500">Rata-rata ulasan</p>
          </div>
          <div className="p-6 rounded-lg border border-zinc-200">
            <p className="text-3xl font-semibold text-amber-600">24-72h</p>
            <p className="text-sm text-zinc-500">Turnaround cepat</p>
          </div>
          <div className="p-6 rounded-lg border border-zinc-200">
            <p className="text-3xl font-semibold text-amber-600">100%</p>
            <p className="text-sm text-zinc-500">Kepuasan klien</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const cards = [
    {
      title: 'Photo Retouching Pro',
      desc: 'Skin retouching halus, color grading monokrom + aksen gold, komposisi presisi untuk hasil editorial. Cocok untuk kampanye brand dan fashion.',
    },
    {
      title: 'Cinematic Video Edit',
      desc: 'Cutting ritmis, koreksi warna konsisten, sound design subtle, dan overlay tipografi elegan. Cocok untuk ads dan reels premium.',
    },
    {
      title: 'Brand Visual Suite',
      desc: 'Paket end-to-end: preset warna, LUTs, style guide visual, thumbnail, sampai export multi-platform yang seragam.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-zinc-50 text-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Layanan Kami</h2>
        <p className="mt-3 text-center text-zinc-600 max-w-2xl mx-auto">Paket kurasi untuk kebutuhan komersial dan personal — selalu minimalis dan elegan.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="p-6 rounded-lg border border-zinc-200 bg-white hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-zinc-900">{c.title}</h3>
              <p className="mt-2 text-zinc-600">{c.desc}</p>
              <div className="mt-4">
                <a href="#contact" className="text-amber-600 hover:text-amber-700 font-medium">Minta Penawaran →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { n: '01', t: 'Discovery', d: 'Pahami tujuan, referensi, dan materi dari Anda.' },
    { n: '02', t: 'Direction', d: 'Definisikan style monokrom + gold yang relevan.' },
    { n: '03', t: 'Production', d: 'Editing presisi, iterasi cepat, komunikasi transparan.' },
    { n: '04', t: 'Delivery', d: 'Export multi-platform, arsip rapi, siap di-publish.' },
  ];
  return (
    <section id="process" className="py-16 md:py-24 bg-white text-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Proses Kerja</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="p-6 rounded-lg border border-zinc-200">
              <div className="text-amber-600 font-semibold">{s.n}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-zinc-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    {
      q: 'Tone yang konsisten bikin katalog kami terasa premium. Tim responsif dan detail.',
      a: '— Adinda, Brand Manager',
    },
    {
      q: 'Video reels kami jadi rapi, ritme enak, dan konversi iklan naik signifikan.',
      a: '— Bagas, Performance Marketer',
    },
    {
      q: 'Dokumentasi pernikahan kami timeless. Hitam-putihnya elegan, bukan pucat.',
      a: '— Nadya & Rendy',
    },
  ];
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-zinc-50 text-zinc-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Apa Kata Klien</h2>
        <div className="mt-8 overflow-hidden relative">
          <div className="flex animate-[slide_18s_linear_infinite]" style={{ gap: '3rem' }}>
            {items.concat(items).map((t, i) => (
              <blockquote key={i} className="min-w-full">
                <p className="text-xl md:text-2xl text-zinc-800">“{t.q}”</p>
                <footer className="mt-3 text-zinc-500">{t.a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
