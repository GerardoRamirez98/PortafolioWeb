import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * 📌 RootLayout envuelve TODA la aplicación.
 * - Aquí entra Next.js con el App Router.
 * - Se define el HTML base, idioma, y componentes fijos (header/footer).
 * - Tailwind se aplica en las clases de body y main.
 */
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Portafolio",
  description: "Desarrollado con Next.js + TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-900 text-white flex flex-col min-h-screen`}>
        {/* ✅ Header fijo en todas las páginas */}
        <Header />

        {/* ✅ Contenido dinámico (cada página que visites) */}
        <main className="flex-1 container mx-auto px-6 py-10 animate-fadeIn">
          {children}
        </main>

        {/* ✅ Footer fijo en todas las páginas */}
        <Footer />
      </body>
    </html>
  );
}

