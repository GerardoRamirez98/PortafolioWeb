/**
 * 📌 Página de proyectos.
 * - Ruta: "/projects"
 * - Aquí aplicas Tailwind para maquetar tarjetas con grid/flex.
 */
export default function ProjectsPage() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-8 animate-fadeIn">Mis Proyectos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg animate-scaleUp">
          <h3 className="text-xl font-semibold">Proyecto 1</h3>
          <p className="text-gray-400">Descripción breve del proyecto.</p>
        </div>
        {/* 🔁 Puedes mapear un array de proyectos */}
      </div>
    </section>
  );
}
import React from "react";