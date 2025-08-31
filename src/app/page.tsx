import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className=" flex flex-col mx-auto mt-40 min-w-[400px] max-w-[1200px] h-100 bg-red-500 justify-center items-center text-stone-100">
        <h1 className="absolute text-7xl font-bold text-center px-70">A place where various ideas, works, and valuable notes are neatly stored.</h1>
      </div>
    </main>
  );
}
