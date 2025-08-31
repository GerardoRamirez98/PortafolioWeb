import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Portafolio",
  description: "Desarrollado con Next.js + TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-black flex flex-col min-h-screen`}>
        {/* ✅ Header fijo en todas las páginas */}
        <Header />

        {/* ✅ Contenido dinámico */}
        <main className="flex-1 container mx-auto px-6 py-10 animate-fadeIn">
          {children}
        </main>

        {/* ✅ Footer fijo en todas las páginas */}
        <Footer />
      </body>
    </html>
  );
}

