"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import TextType from "./TextType"; // Ajusta la ruta según tu estructura

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-950 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo o texto animado */}
        <h1 className="h-8 overflow-hidden text-2xl font-bold">
          <TextType texts={["Developer Web", "Frontend", "React Vite TS"]} />
        </h1>

        {/* Botón hamburguesa (solo en móvil) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Menú de escritorio */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/projects">Proyectos</Link></li>
          <li><Link href="/about">Sobre mí</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>

      {/* Menú desplegable móvil */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4 text-center">
          <Link href="/" onClick={() => setOpen(false)} className="block">Inicio</Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="block">Proyectos</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">Sobre mí</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">Contacto</Link>
        </div>
      )}
    </header>
  );
}

