import React from "react";

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  { title: "Proyecto 1", description: "Descripción breve del proyecto 1." },
  { title: "Proyecto 2", description: "Descripción breve del proyecto 2." },
  { title: "Proyecto 3", description: "Descripción breve del proyecto 3." },
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 animate-fadeIn">
        Mis Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 animate-scaleUp"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
