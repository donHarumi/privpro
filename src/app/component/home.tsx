import type { Metadata } from "next";
import { Content, Geist, Geist_Mono } from "next/font/google";

export default function Home() {
  return (
    <main className="mx-auto mt-40 min-w-[400px] max-w-[1550px]">
      <section className="w-full">
        <div className="mx-20 my-10 mt-20 flex flex-col items-center text-center">
          {/* Title + buttons */}
          <div className="mb-6 grid w-full grid-cols-2 p-3">
            <h1 className="flex items-center text-4xl font-black">UYE Played</h1>
            <div className="flex items-center justify-end gap-3">
              <button className="p-3 pr-20 duration-300 hover:bg-red-500">Server</button>
              <button className="rounded-br-2xl border-2 border-black bg-red-500 p-3 pr-20 duration-300 hover:scale-105">Join</button>
            </div>
          </div>

          {/* Game cards */}
          <div className="grid h-80 w-full grid-cols-4 grid-rows-2 p-3 text-justify">
            {/* reusable classes */}
            {[
              { title: "Risk of Rain 2", img: "/bg0.jpg", span: "col-span-2 row-span-2", size: "text-lg" },
              { title: "The Forest", img: "/bg1.jpg", size: "text-md" },
              { title: "Misuh", img: "/bg2.jpg", size: "text-md" },
              { title: "Calculus 4", img: "/bg3.jpg", span: "col-span-2", size: "text-lg" },
            ].map(({ title, img, span = "", size }, i) => (
              <div key={i} className={`m-2 border border-stone-700 bg-cover duration-300 hover:scale-102 ${span}`} style={{ backgroundImage: `url(${img})` }}>
                <h1 className={`flex p-3 bg-stone-900/50 ${size}`}>{title}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
