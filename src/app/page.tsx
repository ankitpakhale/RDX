import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        <h1 className="text-7xl bg-gradient-to-r from-blue-500 to-amber-400 bg-clip-text text-transparent">
          RDX
        </h1>
        <p className="text-4xl text-center">
          <span className="text-red-500">R</span>
          eal-time <span className="text-red-500">D</span>ata e
          <span className="text-red-500">X</span>perience
        </p>
        <Link
          href="/dashboard"
          className="
          py-4 
          px-2 
          font-bold 
          flex 
          gap-2
          transition-all 
          duration-600 
          border-4 
          text-blue-400 
          hover:text-amber-400 
          border-amber-400 
          hover:border-blue-400 
          rounded-bl-2xl 
          hover:rounded-br-2xl 
          rounded-tr-2xl 
          hover:rounded-tl-2xl 
          "
        >
          <LinkIcon />
          Visit Dashboard
        </Link>
      </main>
    </div>
  );
}
