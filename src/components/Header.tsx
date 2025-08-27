import Link from "next/link";
import TextType from "./TextType"; // Ajusta la ruta si Header.tsx no está en la misma carpeta


/**
 * 📌 Header de navegación
 * - Next.js: <Link> para cambiar páginas sin recargar
 * - Tailwind: estilos responsivos y de layout
 */
export default function Header() {
  return (
    <header className="bg-gray-950 py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <h1>
          <TextType texts={["Developer Web", "Frontend", "React Vite TS"]} />
        </h1>
        <ul className="flex gap-6">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/projects">Proyectos</Link></li>
          <li><Link href="/about">Sobre mí</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
import React from "react";
