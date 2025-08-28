import type { Metadata } from "next";
import { Content, Geist, Geist_Mono } from "next/font/google";

export default function Card() {
  return (
    <main>
      <section className="flex flex-col bg-stone-800 my-10 mx-40 border items-center text-center mt-20">
        <div className="p-3">
          <h2>Card Title</h2>
          <p>This is a simple card component.</p>
          <div className="grid grid-cols-3 border-t border-stone-700 text-justify ">
            <div className=" p-3 m-2 border border-stone-700">
              <div className="mb-2">
                <h1 className="text-2xl">Freya Jayawardana</h1>
                <span className="text-sm mb-1.5">27 Agustus 2025</span>
              </div>
              <img src="/freya.jpg" className="items-center w-full h-50 rounded-2xl border-2 border-red-500 object-cover" alt="" />
              <div className="mt-2">
                <p>Raden Rara Freyanashifa Jayawardana adalah seorang penyanyi, penari, bintang iklan, dan pemeran Indonesia. Freya merupakan anggota grup idola JKT48 generasi ketujuh yang diperkenalkan pada bulan September tahun 2018.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
