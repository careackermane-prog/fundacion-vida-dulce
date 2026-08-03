import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import logo from "../../assets/logo/logo.png";

function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="
            fixed
            inset-0
            z-[99999]
            overflow-hidden
            bg-gradient-to-br
            from-slate-950
            via-sky-950
            to-slate-900
            flex
            items-center
            justify-center
          "
        >
          {/* Aurora */}

          <motion.div
            animate={{
              x: [0, 120, -80, 0],
              y: [0, -80, 60, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
            }}
            className="
              absolute
              -left-40
              -top-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-cyan-500/10
              blur-[140px]
            "
          />

          <motion.div
            animate={{
              x: [0, -120, 80, 0],
              y: [0, 80, -50, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-0
              right-0
              h-[500px]
              w-[500px]
              rounded-full
              bg-blue-600/10
              blur-[150px]
            "
          />

          {/* Contenido */}

          <div className="relative text-center">

            {/* Logo */}

            <motion.img
              src={logo}
              alt="Fundación Vida Dulce"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mx-auto h-32 w-32 object-contain"
            />

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-8 text-4xl font-black text-white"
            >
              Fundación Vida Dulce
            </motion.h2>

            <p className="mt-3 text-cyan-300">
              Transformando vidas
            </p>

            {/* Barra */}

            <div className="mx-auto mt-10 h-2 w-72 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  h-full
                  w-32
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-white
                  to-cyan-400
                "
              />

            </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageLoader;