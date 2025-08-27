/**
 * 📌 Página de Contacto.
 * - Ruta: "/contact"
 * - Aquí podrías usar un formulario con Tailwind.
 */
"use client";

import { Github, Linkedin, Mail, Phone, Briefcase } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh] space-y-10">
      {/* Título */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Contacto</h1>
        <p className="text-gray-300 max-w-xl">
          Si quieres ponerte en contacto conmigo, aquí tienes mis redes y formas de
          comunicación. No dudes en escribirme para oportunidades, colaboraciones
          o preguntas.
        </p>
      </div>

      {/* Lista de enlaces */}
      <div className="flex flex-wrap justify-center gap-8 text-gray-400">
        {/* GitHub */}
        <a
          href="https://github.com/GerardoRamirez98"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:text-white transition"
        >
          <Github className="w-10 h-10" />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/juan-gerardo-tovar-ramirez-b74537265/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:text-white transition"
        >
          <Linkedin className="w-10 h-10" />
          <span>LinkedIn</span>
        </a>

        {/* CV */}
        <a
          href="https://www.occ.com.mx/curriculo/22209332"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:text-white transition"
        >
          <Briefcase className="w-10 h-10" />
          <span>Mi CV</span>
        </a>

        {/* Correo */}
        <a
          href="mailto:gerardo19980719@gmail.com"
          className="flex flex-col items-center gap-2 hover:text-white transition"
        >
          <Mail className="w-10 h-10" />
          <span>Email</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/524741005821"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:text-white transition"
        >
          <Phone className="w-10 h-10" />
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
