import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/logo/logo.png";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import HamburgerButton from "./HamburgerButton";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Cerrar con ESC */

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* Bloquear scroll cuando el menú está abierto */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: .6 }}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-white/90 backdrop-blur-2xl shadow-xl border-b border-slate-200"
              : "bg-white/70 backdrop-blur-xl"
          }
        `}
      >
        <div className="mx-auto flex h-[72px] max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <motion.img
              whileHover={{
                scale: 1.08,
                rotate: -4,
              }}
              transition={{
                duration: .25,
              }}
              src={logo}
              alt="Fundación Vida Dulce"
              className="h-12 w-12 object-contain md:h-14 md:w-14"
            />

            <div className="hidden sm:block">

              <h2 className="text-xl font-black text-sky-700">

                Fundación Vida Dulce

              </h2>

              <p className="text-xs text-slate-500">

                Unidos por una vida saludable

              </p>

            </div>

          </Link>

          {/* Menú escritorio */}

          <DesktopMenu />

          {/* Botón Donar */}

          <div className="hidden lg:block">

            <Link
              to="/ayudar"
              className="
                rounded-xl
                bg-gradient-to-r
                from-sky-600
                to-cyan-600
                px-6
                py-3
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Donar ❤️
            </Link>

          </div>

          {/* Botón móvil */}

          <HamburgerButton
            open={open}
            onClick={() => setOpen(!open)}
          />

        </div>
      </motion.header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />

      {/* Espaciador */}

      <div className="h-[72px]"></div>
    </>
  );
}

export default Navbar;