"use client"
import Image from 'next/image';
import Link from "next/link";
import { motion } from "motion/react";
import { Typewriter } from 'react-simple-typewriter';


function Profil() {
    return(
  <main className="text-green-300 text-[#00ffcc] text-sm p-5 font-mono ">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* RIGHT PANEL becomes first on mobile, stays left on desktop */}
        <div className=" p-2 order-first md:order-none lg:w-2/5">
          <div className="text-xs flex justify-between items-center border-b border-green-500 pb-1 mb-2">
        <span>
          <span className="text-gray-400">警察</span> PORTFOLIO 2025
        </span>
        <span className="text-right">EN COURS ▓▓░░</span>
      </div>
          <p className="text-xs text-green-500 mb-2">DEVELOPPER INFO:</p>

  <div className="text-sm mb-2">
        <strong>NOM: ILO</strong>
        <span className="ml-2 text-sm">RANDRIAMAHENINTSOA</span>
      </div>

      <div className="flex gap-2">
        <div className="w-1/2">
          <Image
            src="/cvpixel.png"
            alt="ilo pixel photo"
            width={300}
            height={300}
            className="w-full border border-green-500"
          />
        </div>
        <div className="w-1/2 text-xs">
          <p className="mb-1 border-b border-green-500">RECHERCHE : ALTERNANCE</p>
          <p className="mb-1 border-b border-green-500">AGE : 20</p>
          <p className="mb-1 border-b border-green-500"> LOCALISATION : BORDEAUX 33130 <br/> non véhiculée</p>
          <p className="mb-1 border-b border-green-500">Future étudiante à<br /><strong>CESI</strong> école d'ingénieurs</p>
          <strong className="mb-2 text-green-500"> DEVELOPPEUSE D'APPLICATIONS ████</strong>
          <div className=" flex gap-4 justify-start border-b border-green-500 mb-8"> 
              <Link href="https://github.com/ilotresor" target="_blank"><i className="nes-icon github"></i></Link>
              <Link href="https://www.linkedin.com/in/ilo-randriamahenintsoa-b0424a332/" target="_blank"><i className="nes-icon linkedin "></i></Link>
              <i className="nes-icon gmail"></i>
              </div>
        </div>
        
        
      </div>


          {/* PROFILE DESCRIPTION */}
          <div className="bg-black text-ss mt-2 p-2 h-40 overflow-auto">
            <p>
              <Typewriter
              words={['Hello !', 'Bonjour !', 'Hola !', '你好!']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            /></p>
            <p> étudiante en réorientation 💻✨<br/> 
            BUT: devenir une développeuse complète, curieuse et redoutablement efficace...</p>
          </div>

        </div>

        {/* LEFT PANEL (chat) */}
        <div className="md:col-span-2 border-2 border-[#00ffcc] shadow-[0_0_8px_#00ffcc] p-2 lg:w-3/5">
          <div className="flex flex-wrap gap-1 mb-2 text-sm">
            {['REACT', 'NEXTJS', 'SVELTEKIT', 'JAVA', 'PYTHON', 'OFFICE360', 'FIGMA'].map(tab => (
              <span
                key={tab}
                className={`tab px-2 py-1 border border-[#00ffcc] text-white ${
                  tab === 'CHAT' ? '' : ''
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* CHAT BOX */}
          <div className="bg-black text-xs p-3 h-64 overflow-auto space-y-1">
            <p>
IL EST ÉVIDENT QUE JE NE MAÎTRISE PAS ENCORE L'ENSEMBLE DES TECHNOLOGIES MENTIONNÉES CI-DESSUS. J'AI ÉTÉ INITIÉ AU MONDE DU DÉVELOPPEMENT PAR LE BIAIS DU WEB, 
TOUT EN SACHANT QUE JE NE SOUHAITAIS PAS M'Y LIMITER. MON ASPIRATION EST DE CRÉER DES APPLICATIONS ET DE ME 
SPÉCIALISER DANS LE DOMAINE DE L'INTELLIGENCE ARTIFICIELLE.


</p>
            <p><span className="text-[#00ffcc]">YOU:</span> A LIFE, JIMMY, YOU KNOW WHAT THAT IS?...</p>
          </div>

          {/* INPUT */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center mt-2 gap-2">
            <input
              className="nes-input is-dark w-full"
              placeholder="CECI EST EN COURS DE CONSTRUCTION"
            />
            <button className="nes-btn is-primary w-full sm:w-auto">SEND</button>
          </div>
        </div>
      </div>

      <footer className="text-center text-xs mt-4 text-[#00ffcc]">
        &copy; TOUT DROIT RESERVES
      </footer>
    </main>


    );

}

export default Profil;