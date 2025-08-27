export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-5xl font-extrabold mb-4">
        Hola, soy <span className="text-blue-400">Gerardo</span> 👋
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mb-6">
        Ingeniero Informático | Apasionado por el desarrollo web, la tecnología y las soluciones innovadoras.
      </p>
      <a
        href="/projects"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition"
      >
        Ver mis proyectos
      </a>
      <div className="flex gap-4 mt-6">
        <a href="https://github.com/tuUsuario" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/tuUsuario" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
        <a href="mailto:tuemail@gmail.com" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
      </div>
    </section>
  );
}
