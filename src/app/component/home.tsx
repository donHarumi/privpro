import type { Metadata } from "next";
import { Content, Geist, Geist_Mono } from "next/font/google";

export default function Home() {
  return (
    <main className="mt-20">
      <section>
        <div className="flex flex-col my-10 mx-20 border-red-500 border h-auto items-center text-center mt-20">
          <div className="grid grid-cols-2 w-full bg-stone-800 border-b border-stone-700 p-3">
            <div className="flex items-center">
              <h1>Main Content</h1>
            </div>
            <div className="flex justify-end items-center gap-3">
              <button>Setting</button>
              <button className="bg-red-500 p-3 pr-20 rounded-br-2xl">Sign in</button>
            </div>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 p-3 border w-full h-80">
            <div className="col-span-2 row-span-2 border border-stone-700 m-2">
              <h1>Tittle 1</h1>
            </div>
            <div className=" border border-stone-700 m-2">
              <h1>Tittle 2</h1>
            </div>
            <div className=" border border-stone-700 m-2">
              <h1>Tittle 3</h1>
            </div>
            <div className="col-span-2 border border-stone-700 m-2">
              <h1>Tittle 4</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
