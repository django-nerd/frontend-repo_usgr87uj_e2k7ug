import React, { useMemo, useState } from 'react';

const itemsData = [
  { id: 1, type: 'photo', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop', alt: 'Foto monokrom kreatif - ganti dengan karya Anda', tag: 'Brand' },
  { id: 2, type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Video teaser - ganti dengan karya Anda', tag: 'Ads' },
  { id: 3, type: 'photo', src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop', alt: 'Still life hitam putih - ganti', tag: 'Editorial' },
  { id: 4, type: 'photo', src: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1600&auto=format&fit=crop', alt: 'Portrait monokrom - ganti', tag: 'Wedding' },
  { id: 5, type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Cinematic social video - ganti', tag: 'Reels' },
  { id: 6, type: 'photo', src: 'https://images.unsplash.com/photo-1524135329990-07660cd5bf10?q=80&w=1600&auto=format&fit=crop', alt: 'Arsitektur minimal - ganti', tag: 'Architecture' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const tags = useMemo(() => ['All', ...Array.from(new Set(itemsData.map(i => i.tag)))], []);
  const items = useMemo(() => {
    if (filter === 'All') return itemsData;
    return itemsData.filter(i => i.tag === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white text-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Portfolio</h2>
            <p className="mt-2 text-zinc-600">Koleksi proyek pilihan dalam foto & video.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-md border transition ${filter === t ? 'bg-amber-500 text-white border-amber-500' : 'border-zinc-300 hover:border-amber-500 hover:text-amber-600'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map(item => (
            <button key={item.id} onClick={() => setActive(item)} className="group relative overflow-hidden rounded-lg focus:outline-none">
              {item.type === 'photo' ? (
                <img src={item.src} alt={item.alt} className="w-full h-64 object-cover group-hover:scale-105 transition" />
              ) : (
                <video src={item.src} className="w-full h-64 object-cover" muted playsInline></video>
              )}
              <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute bottom-3 left-3 text-white text-sm">{item.tag}</span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <button aria-label="Close" onClick={() => setActive(null)} className="absolute top-4 right-4 text-white text-2xl">×</button>
          <div className="max-w-5xl w-full">
            {active.type === 'photo' ? (
              <img src={active.src} alt={active.alt} className="w-full h-auto rounded-lg" />
            ) : (
              <video src={active.src} className="w-full h-auto rounded-lg" controls autoPlay />
            )}
            <p className="mt-3 text-center text-zinc-300 text-sm">{active.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
