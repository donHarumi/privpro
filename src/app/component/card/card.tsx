"use client";
import { useState } from "react";

// Data Cards
const cards = [
  {
    id: 1,
    title: "Portofolio",
    date: "08 Jun",
    label: "donHarumi",
    bg: "/card-img/card0-bg.png",
    previews: ["/card-img/card0-p1.png", "/card-img/card0-p2.png", "/card-img/card0-p3.png", "/card-img/card0-p4.png"],
    desc: "Ini adalah project pertama yang berfokus pada UI/UX modern.",
  },
  {
    id: 2,
    title: "Project Beta",
    date: "30 AUG",
    label: "User Y",
    bg: "/images/bg2.jpg",
    previews: ["/images/preview2a.jpg", "/images/preview2b.jpg", "/images/preview2c.jpg"],
    desc: "Project kedua dengan animasi hover lebih interaktif.",
  },
  {
    id: 3,
    title: "Project C",
    date: "30 AUG",
    label: "User C",
    bg: "/images/bg2.jpg",
    previews: ["/images/preview2a.jpg", "/images/preview2b.jpg", "/images/preview2c.jpg"],
    desc: "Project kedua dengan animasi hover lebih interaktif.",
  },
];

// Komponen Slider untuk Preview
function PreviewSlider({ previews }: { previews: string[] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % previews.length);
  const prev = () => setIndex((index - 1 + previews.length) % previews.length);

  return (
    <div className="relative grid-rows-2 w-full h-48 rounded-lg overflow-hidden mt-5">
      {/* Gambar utama */}
      <div className=" mt-2 h-39">
        <img src={previews[index]} alt={`Preview ${index + 1}`} className="h-full rounded-xl object-cover transition-all duration-500" />
      </div>
      <div className="flex gap-5 justify-center items-center absolute left-0 right-0 mt-1">
        {/* Tombol navigasi */}
        <button onClick={prev} className=" px-2 py-1 rounded text-white">
          ◀
        </button>
        {/* Bulatan indikator */}
        {previews.map((_, i) => (
          <span key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full duration-500 cursor-pointer ${i === index ? "bg-white" : "bg-gray-500"}`} />
        ))}
        <button onClick={next} className="px-2 py-1 rounded text-white">
          ▶
        </button>
      </div>
    </div>
  );
}

// Komponen Card
export default function Card() {
  return (
    <main className="min-w-[400px] max-w-[1550px]">
      <section className="absolute flex w-full h-20xl justify-center items-center gap-10 p-10">
        {cards.map((card) => (
          <div key={card.id} className="group relative w-40 h-56 bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-500 hover:w-[550px] hover:h-[250px] cursor-pointer">
            {/* Background */}
            <img src={card.bg} alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-30" />

            {/* Label */}
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">{card.label}</span>

            {/* Tanggal */}
            <div className="absolute bottom-2 left-2 text-white text-lg font-bold group-hover:opacity-0 transition-opacity duration-500">{card.date}</div>

            {/* Konten hover */}
            <div className="absolute grid grid-cols-2 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 gap-4">
              {/* Deskripsi */}
              <div className="w-60 h-auto text-white flex flex-col justify-between delay-500 border-r pr-4 border-gray-700">
                <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 delay-500">
                  <h2 className="text-lg font-bold">{card.title}</h2>
                  <p className="text-sm text-gray-300">{card.date}</p>
                  <p className="mt-5 text-sm text-gray-300 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 delay-500">{card.desc}</p>
                </div>
                <button className="bg-stone-900 px-3 py-1 rounded text-white font-bold hover:bg-red-500">Check</button>
              </div>

              {/* Preview Slider */}
              <PreviewSlider previews={card.previews} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
