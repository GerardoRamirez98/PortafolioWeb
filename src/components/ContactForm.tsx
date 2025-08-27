"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Mensaje enviado ✅ (aquí iría la integración real con backend o email)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
    >
      <div>
        <label className="block text-left mb-2 font-semibold">Nombre</label>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
          required
        />
      </div>

      <div>
        <label className="block text-left mb-2 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          placeholder="tucorreo@ejemplo.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
          required
        />
      </div>

      <div>
        <label className="block text-left mb-2 font-semibold">Mensaje</label>
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-400 h-32"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold transition"
      >
        Enviar
      </button>
    </form>
  );
}
