"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Modal from "react-modal";

Modal.setAppElement("body"); // Necesario para accesibilidad en Next.js

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);

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
      description: "To-Do App en Next.js + TypeScript + TailwindCSS.",
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
            className="relative rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            onClick={() => setSelectedProject(index)}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:opacity-80 transition"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex justify-center items-center text-white font-bold text-xl">
              Ver más
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject !== null && (
        <Modal
          isOpen={selectedProject !== null}
          onRequestClose={() => setSelectedProject(null)}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-lg mx-auto mt-40 outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50"
        >
          <h3 className="text-2xl font-bold mb-4">
            {projects[selectedProject].title}
          </h3>
          <Image
            src={projects[selectedProject].image}
            alt={projects[selectedProject].title}
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {projects[selectedProject].description}
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href={projects[selectedProject].demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <Globe className="inline w-5 h-5 mr-1" /> Demo
            </a>
            <a
              href={projects[selectedProject].github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
            >
              <Github className="inline w-5 h-5 mr-1" /> GitHub
            </a>
          </div>
          <button
            onClick={() => setSelectedProject(null)}
            className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition w-full"
          >
            Cerrar
          </button>
        </Modal>
      )}
    </section>
  );
}
