import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Heart,
  X,
} from "lucide-react";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Nosotros",
    path: "/nosotros",
  },
  {
    name: "Programas",
    path: "/programas",
  },
  {
    name: "Ayudar",
    path: "/ayudar",
  },
  {
    name: "Eventos",
    path: "/eventos",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Galería",
    path: "/galeria",
  },
  {
    name: "Contacto",
    path: "/contacto",
  },
];

function MobileMenu({
  open,
  onClose,
}) {
  return (
    <AnimatePresence>

      {open && (

        <>

          {/* Fondo */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
          />

          {/* Drawer */}

          <motion.aside
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: .35,
            }}
            className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-screen
              w-[320px]
              max-w-full
              flex-col
              overflow-hidden
              bg-gradient-to-br
              from-slate-950
              via-sky-950
              to-slate-900
              shadow-2xl
            "
          >

            {/* Aurora */}

            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

            {/* Header */}

            <div className="relative flex items-center justify-between border-b border-white/10 p-6">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-700 shadow-xl">

                  <Heart size={22} />

                </div>

                <div>

                  <h2 className="font-black text-white">

                    Vida Dulce

                  </h2>

                  <p className="text-xs text-cyan-300">

                    Fundación

                  </p>

                </div>

              </div>

              <button
                onClick={onClose}
                className="
                  rounded-xl
                  p-2
                  text-white
                  transition
                  hover:bg-white/10
                "
              >

                <X />

              </button>

            </div>

            {/* Menú */}

            <nav className="relative flex flex-1 flex-col p-6">

              {links.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) => `
                    mb-2
                    rounded-2xl
                    px-5
                    py-4
                    text-lg
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-cyan-500 text-white shadow-lg"
                        : "text-slate-200 hover:bg-white/10 hover:translate-x-2"
                    }
                  `}
                >

                  {item.name}

                </NavLink>

              ))}

            </nav>

            {/* Botón */}

            <div className="relative border-t border-white/10 p-6">

              <NavLink
                to="/ayudar"
                onClick={onClose}
                className="
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-sky-700
                  px-6
                  py-4
                  font-bold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >

                ❤️ Donar Ahora

              </NavLink>

            </div>

          </motion.aside>

        </>

      )}

    </AnimatePresence>
  );
}

export default MobileMenu;