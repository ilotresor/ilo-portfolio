"use client";
import Image from "next/image";
import { Press_Start_2P } from 'next/font/google';
import Profil from "../components/Profil";
import Projects from "@/components/Projets";
import "nes.css/css/nes.min.css";
import Incoming from "@/components/Projets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect } from "react";
import Projets from "@/components/Projets";

gsap.registerPlugin(ScrollTrigger);

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}


export default function Home() {
  
  return (
    <div className="bg-base-300 text-sm ">
      
      <div role="tablist" className="tabs tabs-lift tabs-medium bg-base-100 m-1 ">
      <a role="tab" className="tab tab-active border-2 border-[#00ffcc] shadow-[0_0_8px_#00ffcc] p-2"><span className="nes-text is-success">Ilo</span></a>
      <div className="tab-content border-base-300 m-1 p-2 border-2 border-green-500 shadow-[0_0_8px_#00ffcc] p-2">

    {/* name of each tab group should be unique */}
    <div className="tabs tabs-lift text-green-500 ">
      <label className="tab p-2">
        <input type="radio" name="my_tabs_4" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>
        Profil
      </label>
      <div className="tab-content bg-base-100 border-base-300 border-2 border-[#00ffcc] shadow-[0_0_8px_#00ffcc] p-2"><Profil/></div>

      <label className="tab">
        <input type="radio" name="my_tabs_4" defaultChecked />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" /></svg>
        Projets
      </label>
      <div className="tab-content bg-base-100 border-base-300 "><Projets/></div>

      <label className="tab">
        <input type="radio" name="my_tabs_4" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        Contact
      </label>
      <div className="tab-content bg-base-100 border-base-300 p-6"></div>
    </div>









      </div>
    </div>

    </div>
  );
}


