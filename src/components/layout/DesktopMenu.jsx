import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Programas", path: "/programas" },
  { name: "Ayudar", path: "/ayudar" },
  { name: "Eventos", path: "/eventos" },
  { name: "/blog", path: "/blog", label: "Blog" },
  { name: "Galería", path: "/galeria" },
  { name: "Contacto", path: "/contacto" },
];

function DesktopMenu() {
  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {links.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `
              relative
              rounded-xl
              px-4
              py-2
              font-semibold
              transition-all
              duration-300
              ${
                isActive
                  ? "text-sky-700"
                  : "text-slate-700 hover:text-sky-700"
              }
            `
          }
        >
          {({ isActive }) => (
            <>
              {item.label ?? item.name}

              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="
                    absolute
                    bottom-0
                    left-2
                    right-2
                    h-[3px]
                    rounded-full
                    bg-sky-600
                  "
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default DesktopMenu;