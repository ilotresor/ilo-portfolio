import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from "react";
    const projects = [
  {
    title: "Blade Runner",
    iframeSrc:
      "https://www.licence-design.eu/culture_digitale_2024/mercredi_17h30/randriamahenintsoa_ilo/Blade%20runner/synopsis.html",
    image: "/ilo.png",
    date: "2024",
    type: "acamdémique",
    desc: "Projet inspiré de Blade Runner. Réalisé en HTML/CSS pur pour . Ce projet explore les esthétiques rétro-futuristes à travers une interface immersive.",
  },
  {
    title: "People Counter",
    iframeSrc: "/projects/people-counter/index.html",
    image: "/ilo.png",
    date: "2024",
    type: "personnel",
    desc: "Application de comptage de personnes: imaginez vous êtes enquêteurs et vous devez compter le nombre de personnes qui utilise une ligne de transport",
  },
  {
    title: "Blackjack",
    iframeSrc: "/projects/blackjack/index.html",
    image: "/ilo.png",
    date: "2024",
    type: "personnel",
    desc: "Un jeu de Blackjack codé en JavaScript Vanilla. UI minimale, logique très basique mais complète côté front.",
  },
];

export default function Projets() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  return (
    <div className="min-h-screen bg-base-300 p-2 text-white grid grid-cols-1 lg:grid-cols-3 gap-2">
      {/* LEFT - Live Preview */}
      <div className="lg:col-span-2 bg-base-100 border border-base-content border-green-500 p-2">
        <iframe
          src={project.iframeSrc}
          title={project.title}
          className="w-full h-[70vh] border border-base-content border-green-500"
        />
      </div>

      {/* RIGHT - Info Panel */}
      <div className="bg-base-100 border border-base-content border-green-500 p-4 flex flex-col items-center text-center space-y-4">
        <Image
          src={project.image}
          alt={project.title}
          width={180}
          height={180}
          className=" border border-base-content"
        />
        <div>
          <h2 className="text-lg font-bold is-success">{project.title}</h2>
          <p className="text-sm">Année : {project.date}</p>
          <p className="text-sm">Projet : {project.type}</p>
        </div>
        <div className="tabs tabs-boxed">
          {projects.map((p, i) => (
            <button
              key={i}
              className={`tab ${i === selected ? "tab-active nes-btn" : ""}`}
              onClick={() => setSelected(i)}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>

      {/* BOTTOM - Description */}

      <div className="lg:col-span-3 bg-base-300 ">
         <div className="nes-container is-dark with-title">
        <p className="title">A PROPOS</p>
        <p className="text-sm leading-relaxed">{project.desc}</p>
      </div>
      </div>
    </div>
  );
}

