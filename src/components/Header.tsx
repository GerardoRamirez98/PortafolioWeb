"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import TextType from "./TextType"; // Ajusta la ruta si tu archivo está en otra carpeta

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/projects" },
    { name: "Sobre mí", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <header className="bg-gray-950 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo o texto animado */}
        <h1 className="h-10 overflow-hidden text-2xl font-bold">
          <TextType texts={["Web Developer", "Frontend", "React Vite TS"]} />
        </h1>

        {/* Botón hamburguesa (solo en móvil) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Menú de escritorio */}
        <ul className="hidden md:flex gap-6 text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-yellow-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menú desplegable móvil */}
      <div
        className={`md:hidden bg-gray-900 px-6 py-4 space-y-4 text-center transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className="block py-2 hover:text-yellow-400 transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
