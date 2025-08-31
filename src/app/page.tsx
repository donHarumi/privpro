'use client';
import { use, useState } from "react";
import Image from "next/image";
import TypingText from "@/app/component/TypingText"; // pastikan path-nya sesuai struktur proyekmu

export default function Home() {
    const [isDark, setIsDark] = useState(false);

  const toggleBackground = () => {
    setIsDark(!isDark);
  };
  return (
    <main>
      <section className="h-full mx-auto mt-40 min-w-[400px] max-w-[1200px]">
        <div className="flex justify-center mb-6">
          
        </div>
        <div className={`grid grid-rows-3 grid-cols-3 gap-0 h-100 ${
            isDark ? "bg-gray-800" : "bg-red-500"
          } justify-center items-center text-stone-100 transition-colors duration-500`}>
          <div className="font-bold row-span-2 col-span-3 text-7xl text-center max-w-[1200px]">
            <h1 className="text-stone-200">
              A place where various ideas, works, and valuable notes are neatly stored.
            </h1>
          </div>
          <div className="text-end px-4 py-auto"><a href="" className="p-2 rounded-md bg-red-500 hover:scale-105 ">Join Us</a></div>
          <div className="border-b"><span>for</span></div>
          <div><span><TypingText /></span></div>
        </div>
        <button
            onClick={toggleBackground}
            className={`w-10 h-5 mt-1 rounded-md ${isDark ? "bg-red-500 border-black" : "bg-gray-800 border"
          } transition-colors duration-500`}>
          
          </button>
      </section>
    </main>
  );
}
