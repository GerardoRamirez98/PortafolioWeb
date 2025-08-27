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
    <section className="flex flex-col items-center text-center gap-8 animate-fadeIn">
      {/* 📷 Foto de presentación */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        {/* El componente Image de Next.js optimiza tu foto automáticamente */}
        <Image
          src="/me.jpg" // ⬅️ coloca tu foto en /public/me.jpg
          alt="Foto de Gerardo"
          fill
          className="object-cover"
        />
      </div>

      {/* 👋 Texto de introducción */}
      <div>
        <h1 className="text-4xl font-bold mb-2">
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
        <p className="text-lg text-gray-300 max-w-xl">
          Ingeniero Informático en formación, apasionado por el desarrollo web
          moderno. Estoy construyendo mi camino con React, TypeScript y Next.js
          🚀
        </p>
      </div>

      {/* 🚀 Tecnologías principales */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Especializándome en:</h2>
        <Marquee speed={80} gradient={false} pauseOnHover={true}>
          <FaReact
            title="React"
            className="mx-6 text-5xl hover:scale-110 transition-transform text-blue-400"
          />
          <SiTypescript
            title="TypeScript"
            className="mx-6 text-5xl hover:scale-110 transition-transform text-blue-600"
          />
          <SiNextdotjs
            title="Next.js"
            className="mx-6 text-5xl hover:scale-110 transition-transform text-gray-200"
          />
          <SiTailwindcss
            title="TailwindCSS"
            className="mx-6 text-5xl hover:scale-110 transition-transform text-cyan-400"
          />
          <SiVite
            title="Vite"
            className="mx-6 text-5xl hover:scale-110 transition-transform text-purple-500"
          />
        </Marquee>
      </div>

      {/* 📚 Conocimientos adicionales */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Conocimientos en:</h2>
        <Marquee speed={150} gradient={false} pauseOnHover={true}>
          <FaDatabase
            title="SQL Server"
            className="mx-6 text-4xl hover:scale-110 transition-transform text-red-500"
          />
          <FaNodeJs
            title="Node.js"
            className="mx-6 text-4xl hover:scale-110 transition-transform text-green-500"
          />
          <FaGitAlt
            title="Git"
            className="mx-6 text-4xl hover:scale-110 transition-transform text-orange-500"
          />
          <FaHtml5
            title="HTML"
            className="mx-6 text-4xl hover:scale-110 transition-transform text-red-600"
          />
          <FaCss3Alt
            title="CSS"
            className="mx-6 text-4xl hover:scale-110 transition-transform text-blue-500"
          />
        </Marquee>
      </div>
    </section>
  );
}

import React from "react";
