// ✅ Este archivo es un "Server Component" de Next.js por defecto.
// Se encarga de renderizar la página de inicio.
// Aquí usamos JSX + Tailwind para dar estilos.
import TrueFocus from "../components/TrueFocus";
import Marquee from "react-fast-marquee";
import Image from "next/image"; // 📸 Componente optimizado de Next.js para imágenes
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

export default function HomePage() {
  return (
    // 📌 Tailwind se aplica en className
    // 📌 Next.js define la estructura de la página
    <section className="flex flex-col items-center text-center gap-8 animate-fadeIn overflow-x-hidden w-full px-4 sm:px-8">
      {/* Foto de presentación */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg flex-shrink-0">
        <Image
          src="/me.jpg"
          alt="Foto de Gerardo"
          fill
          className="object-cover"
        />
      </div>

      {/* Introducción */}
      <div className="max-w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          ¡Hola!
          <TrueFocus
            sentence="Soy Gerardo"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={1}
            pauseBetweenAnimations={1}
          />
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
          Ingeniero Informático en formación, apasionado por el desarrollo web
          moderno. Estoy construyendo mi camino con React, TypeScript y Next.js
          🚀
        </p>
      </div>

      {/* Tecnologías principales */}
      <div className="w-full overflow-hidden">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Especializándome en:
        </h2>
        <Marquee speed={80} gradient={false} pauseOnHover={true}>
          <FaReact className="mx-2 sm:mx-4 text-3xl sm:text-5xl hover:scale-110 transition-transform text-blue-400" />
          <SiTypescript className="mx-2 sm:mx-4 text-3xl sm:text-5xl hover:scale-110 transition-transform text-blue-600" />
          <SiNextdotjs className="mx-2 sm:mx-4 text-3xl sm:text-5xl hover:scale-110 transition-transform text-gray-200" />
          <SiTailwindcss className="mx-2 sm:mx-4 text-3xl sm:text-5xl hover:scale-110 transition-transform text-cyan-400" />
          <SiVite className="mx-2 sm:mx-4 text-3xl sm:text-5xl hover:scale-110 transition-transform text-purple-500" />
        </Marquee>
      </div>

      {/* Conocimientos adicionales */}
      <div className="w-full overflow-hidden">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Conocimientos en:
        </h2>
        <Marquee speed={150} gradient={false} pauseOnHover={true}>
          <FaDatabase className="mx-2 sm:mx-4 text-2xl sm:text-4xl hover:scale-110 transition-transform text-red-500" />
          <FaNodeJs className="mx-2 sm:mx-4 text-2xl sm:text-4xl hover:scale-110 transition-transform text-green-500" />
          <FaGitAlt className="mx-2 sm:mx-4 text-2xl sm:text-4xl hover:scale-110 transition-transform text-orange-500" />
          <FaHtml5 className="mx-2 sm:mx-4 text-2xl sm:text-4xl hover:scale-110 transition-transform text-red-600" />
          <FaCss3Alt className="mx-2 sm:mx-4 text-2xl sm:text-4xl hover:scale-110 transition-transform text-blue-500" />
        </Marquee>
      </div>
    </section>
  );
}

import React from "react";
