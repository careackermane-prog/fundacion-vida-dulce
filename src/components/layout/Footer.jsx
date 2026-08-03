import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Heart,
  MapPin,
  Phone,
  Mail,
  ChevronUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white">

      {/* Fondo decorativo */}

      <div className="absolute -top-48 -left-48 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute -bottom-48 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Fundación */}

          <div>

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-700 shadow-xl">

                <Heart size={30} />

              </div>

              <div>

                <h2 className="text-2xl font-black">

                  Fundación

                </h2>

                <span className="text-cyan-300">

                  Vida Dulce

                </span>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-300">

              Trabajamos para mejorar la calidad de vida de las personas con
              diabetes mediante programas de educación, prevención,
              acompañamiento y apoyo comunitario.

            </p>

          </div>

          {/* Navegación */}

          <div>

            <h3 className="text-xl font-bold">

              Navegación

            </h3>

            <ul className="mt-6 space-y-3">

              <li>
                <Link to="/" className="hover:text-cyan-300 transition">
                  Inicio
                </Link>
              </li>

              <li>
                <Link to="/nosotros" className="hover:text-cyan-300 transition">
                  Nosotros
                </Link>
              </li>

              <li>
                <Link to="/programas" className="hover:text-cyan-300 transition">
                  Programas
                </Link>
              </li>

              <li>
                <Link to="/ayudar" className="hover:text-cyan-300 transition">
                  Ayudar
                </Link>
              </li>

              <li>
                <Link to="/eventos" className="hover:text-cyan-300 transition">
                  Eventos
                </Link>
              </li>

              <li>
                <Link to="/blog" className="hover:text-cyan-300 transition">
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/galeria" className="hover:text-cyan-300 transition">
                  Galería
                </Link>
              </li>

              <li>
                <Link to="/contacto" className="hover:text-cyan-300 transition">
                  Contacto
                </Link>
              </li>

            </ul>

          </div>

          {/* Contacto */}

          <div>

            <h3 className="text-xl font-bold">

              Contáctanos

            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">

                <MapPin className="mt-1 text-cyan-300" />

                <p className="text-slate-300">

                  Danlí, El Paraíso, Honduras

                </p>

              </div>

              <div className="flex items-center gap-3">

                <Phone className="text-cyan-300" />

                <a
                  href="tel:+50400000000"
                  className="text-slate-300 hover:text-cyan-300 transition"
                >
                  +504 0000-0000
                </a>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="text-cyan-300" />

                <a
                  href="mailto:contacto@fundacionvidadulce.org"
                  className="text-slate-300 hover:text-cyan-300 transition"
                >
                  contacto@fundacionvidadulce.org
                </a>

              </div>

            </div>

          </div>

          {/* Redes */}

          <div>

            <h3 className="text-xl font-bold">

              Síguenos

            </h3>

            <p className="mt-6 leading-8 text-slate-300">

              Comparte nuestra misión y acompáñanos en cada actividad.

            </p>

            <div className="mt-8 flex gap-4">

              <motion.a
                whileHover={{
                  y: -6,
                  scale: 1.12,
                }}
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg transition"
              >
                <FaFacebookF size={20} />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -6,
                  scale: 1.12,
                }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-lg"
              >
                <FaInstagram size={20} />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -6,
                  scale: 1.12,
                }}
                href="https://wa.me/50400000000"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 shadow-lg"
              >
                <FaWhatsapp size={20} />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -6,
                  scale: 1.12,
                }}
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 shadow-lg"
              >
                <FaYoutube size={20} />
              </motion.a>

            </div>

          </div>

        </div>

        {/* Línea */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Footer inferior */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-center text-sm text-slate-400 md:text-left">

            © 2026 Fundación Vida Dulce. Todos los derechos reservados.

          </p>

          <button
            onClick={goTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-700 shadow-xl transition hover:-translate-y-1 hover:scale-110"
          >

            <ChevronUp size={22} />

          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;