"use client";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Portafolio Web",
      description:
        "Mi sitio personal con React, TypeScript, Next.js y Tailwind.",
      image: "/portafolioweb.png", // Guarda en /public
      demo: "https://portafolio-web-gr.vercel.app/",
      github: "https://github.com/GerardoRamirez98/PortafolioWeb.git",
    },
    {
      title: "App de Tareas",
      description:
        "To-Do App en Next.js + TypeScript + TailwindCSS. Permite agregar, editar, eliminar y marcar tareas como completadas, con persistencia en el navegador. Diseño limpio, interactivo y responsivo.",
      image: "/todo-app.png",
      demo: "https://to-do-app-gr.vercel.app/",
      github: "https://github.com/GerardoRamirez98/ToDoApp.git",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Proyectos</h2>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative rounded-2xl shadow-lg overflow-hidden group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:opacity-80 transition"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center p-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  <Globe className="inline w-5 h-5 mr-1" /> Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                >
                  <Github className="inline w-5 h-5 mr-1" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
