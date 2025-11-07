import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-50 text-zinc-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Hubungi Kami</h2>
          <p className="mt-3 text-zinc-600">Siap berdiskusi soal kebutuhan editing Anda. Balasan cepat dalam 24 jam kerja.</p>
          <div className="mt-6 space-y-2 text-sm text-zinc-600">
            {/* Ganti nomor WhatsApp dan email di bawah ini */}
            <p>WhatsApp: <a className="text-amber-600 hover:text-amber-700" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">+62 812-3456-7890</a></p>
            <p>Email: <a className="text-amber-600 hover:text-amber-700" href="mailto:hello@monochromegallery.com">hello@monochromegallery.com</a></p>
          </div>
          <div className="mt-6 p-4 border border-amber-200 bg-amber-50 rounded-md text-amber-900">
            Untuk deploy ke GitHub Pages: buat repository, push proyek ini, lalu aktifkan Pages dari pengaturan dengan source branch main. Atau gunakan GitHub Actions untuk build Vite dan publish ke gh-pages.
          </div>
        </div>
        <div>
          {/* Gunakan Formspree: ganti action dengan endpoint Formspree Anda */}
          <form action="https://formspree.io/f/mayvlxyz" method="POST" className="grid grid-cols-1 gap-4 bg-white p-6 rounded-lg border border-zinc-200">
            <label className="text-sm">Nama
              <input required name="name" className="mt-1 w-full border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-amber-500" placeholder="Nama lengkap" />
            </label>
            <label className="text-sm">Email
              <input required type="email" name="email" className="mt-1 w-full border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-amber-500" placeholder="email@domain.com" />
            </label>
            <label className="text-sm">Pesan
              <textarea required name="message" rows="5" className="mt-1 w-full border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-amber-500" placeholder="Ceritakan kebutuhan Anda" />
            </label>
            <button className="mt-2 px-6 py-3 rounded-md bg-amber-500 text-white hover:bg-amber-600 transition" type="submit">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  );
}
