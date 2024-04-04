'use client'

import { Input } from "@/components/ui/input";
import { Toolbar } from "./components/toolbar";
import { useRef, useState } from "react";

export default function Home() {

  const ref = useRef<HTMLDivElement>(null);
  const [name, setName] = useState<string>('');

  return (
    <>
      <div className="hidden md:flex flex-col gap-6 items-center justify-center h-screen">
        <div ref={ref} className="w-full aspect-video max-w-[900px] dark:bg-black bg-muted border dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="">
            <h1 className="font-poppins text-7xl font-black uppercase">{name}</h1>
          </div>
        </div>
        <div className="w-[500px] h-[70px] border rounded-xl flex items-center justify-center gap-10 dark:bg-black bg-muted">
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name..." className="w-[300px] h-[40px] dark:bg-black bg-muted font-inter" />
          <Toolbar target={ref} />
        </div>
      </div>
      <div className="flex md:hidden items-center justify-center h-screen">
        <h1>This app is not smartphone compatible</h1>
      </div>
    </>
  );
}
