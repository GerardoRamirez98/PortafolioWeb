import { Github, Linkedin, Mail, Phone, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-6 mt-10">
      <div className="container mx-auto text-center mb-4">
        © {new Date().getFullYear()} Gerardo. Todos los derechos reservados.
      </div>

      <div className="container mx-auto text-center flex justify-center gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/GerardoRamirez98"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="hover:text-white transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/juan-gerardo-tovar-ramirez-b74537265/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="hover:text-white transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>

        {/* CV */}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          title="Curriculum Vitae"
          className="hover:text-white transition-colors"
        >
          <Briefcase className="w-6 h-6" />
        </a>

        {/* Correo */}
        <a
          href="mailto:gerardo19980719@gmail.com"
          title="Correo"
          className="hover:text-white transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/524741005821"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="hover:text-white transition-colors"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}
