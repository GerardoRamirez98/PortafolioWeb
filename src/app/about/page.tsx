"use client";

import React, { useEffect, useState } from "react";

// Definimos el tipo para la experiencia laboral
type Experience = {
  title: string;
  start: string; // formato "YYYY-MM"
  end: string | null; // null si sigue en curso
  location: string;
  responsibilities: string[];
};

// Datos de experiencia laboral
const experiences: Experience[] = [
  {
    title: "Desarrollador Cobol – STEFANINI MÉXICO",
    start: "2023-08",
    end: "2025-03",
    location: "Home Office",
    responsibilities: [
      "Análisis y desarrollo de soluciones en COBOL para sistemas bancarios.",
      "Pruebas unitarias e integración con equipos de calidad.",
      "Despliegues en entornos de prueba y producción sin interrupciones.",
    ],
  },
  {
    title: "Desarrollador C# MVC – TECNIPRINT",
    start: "2023-04",
    end: "2023-06",
    location: "San Francisco del Rincón, Gto.",
    responsibilities: [
      "Desarrollo de un sistema de punto de venta en C# con SQL Server.",
      "Arquitectura escalable preparada para futuras actualizaciones.",
    ],
  },
  {
    title: "Desarrollador Web PHP – Health & Wellness Coaching",
    start: "2022-08",
    end: "2022-12",
    location: "León, Gto.",
    responsibilities: [
      "Diseño e implementación de un sistema de expedientes clínicos en PHP.",
      "Automatización de procesos críticos en la gestión de datos clínicos.",
    ],
  },
  {
    title: "Desarrollador Frontend – Proyecto Actual",
    start: "2025-07",
    end: null, // experiencia en curso
    location: "Home Office",
    responsibilities: [
      "Desarrollo de interfaces modernas con React, Next.js y Tailwind CSS.",
      "Optimización de rendimiento y responsividad en aplicaciones web.",
    ],
  },
];

// Función para calcular experiencia total en meses
const calculateTotalMonths = (experiences: Experience[]) => {
  let totalMonths = 0;
  const today = new Date();

  experiences.forEach((exp) => {
    const start = new Date(exp.start + "-01");
    const end = exp.end ? new Date(exp.end + "-01") : today;
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    totalMonths += months;
  });

  return totalMonths;
};

export default function AboutPage() {
  const totalMonths = calculateTotalMonths(experiences);
  const [displayMonths, setDisplayMonths] = useState(0);

  // Animación del contador
  useEffect(() => {
    let current = 0;
    const stepTime = 80; // ms entre incrementos
    const increment = 1; // incrementar 1 mes cada paso
    const interval = setInterval(() => {
      current += increment;
      if (current >= totalMonths) {
        current = totalMonths;
        clearInterval(interval);
      }
      setDisplayMonths(current);
    }, stepTime);

    return () => clearInterval(interval);
  }, [totalMonths]);

  const years = Math.floor(displayMonths / 12);
  const months = displayMonths % 12;

  return (
    <section className="space-y-12">
      {/* Introducción */}
      <div className="text-center animate-fadeInUp">
        <h1 className="text-4xl font-bold mb-4">Sobre mí</h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          Soy{" "}
          <span className="font-semibold text-blue-400">
            Ingeniero Informático
          </span>{" "}
          enfocado en desarrollo web moderno. Actualmente me especializo en{" "}
          <span className="font-semibold text-blue-400">
            React, Next.js, TypeScript, Tailwind CSS, Vite, HTML y CSS
          </span>
          . Cuento con{" "}
          <span className="font-semibold text-blue-400">
            {years} año{years !== 1 ? "s" : ""} y {months} mes
            {months !== 1 ? "es" : ""}
          </span>{" "}
          de experiencia laboral acumulada.
        </p>
      </div>

      {/* Formación Académica */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Formación Académica
        </h2>
        <div className="flex flex-col items-center gap-8">
          <div className="bg-gray-800 px-6 py-4 rounded-lg w-full max-w-2xl animate-fadeInUp">
            <h3 className="font-semibold">Ingeniería Informática – Titulado</h3>
            <p className="text-sm text-gray-400">
              Instituto Tecnológico de Purísima del Rincón (2017 - 2022)
            </p>
          </div>
          <div className="bg-gray-800 px-6 py-4 rounded-lg w-full max-w-2xl animate-fadeInUp">
            <h3 className="font-semibold">
              Profesional Técnico Bachiller en Informática
            </h3>
            <p className="text-sm text-gray-400">CONALEP (2014 - 2017)</p>
          </div>
        </div>
      </div>

      {/* Trayectoria Profesional */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Trayectoria Profesional
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-lg shadow-md ${
                index % 2 === 0 ? "animate-fadeInLeft" : "animate-fadeInRight"
              }`}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-400">
                {exp.start.replace("-", "/")} –{" "}
                {exp.end ? exp.end.replace("-", "/") : "Actual"} |{" "}
                {exp.location}
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Resumen de Experiencia */}
      <div className="text-center animate-fadeInUp">
        <h2 className="text-3xl font-bold mb-4">Resumen de Experiencia</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          He acumulado un total de{" "}
          <span className="font-semibold text-blue-400">
            {years} año{years !== 1 ? "s" : ""} y {months} mes
            {months !== 1 ? "es" : ""}
          </span>{" "}
          de experiencia laboral en diversas tecnologías y proyectos.
        </p>
      </div>
    </section>
  );
}
