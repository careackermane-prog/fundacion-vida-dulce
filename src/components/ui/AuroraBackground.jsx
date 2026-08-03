import { motion } from "framer-motion";

function AuroraBackground({ children }) {
  return (
    <div className="relative overflow-hidden">

      {/* Fondo principal */}

      <div className="absolute inset-0 bg-gradient-to-br from-sky-700 via-blue-900 to-indigo-950" />

      {/* Aurora 1 */}

      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
          rotate: [0, 20, -15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-cyan-400/20 blur-[140px]"
      />

      {/* Aurora 2 */}

      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.2, 1],
          rotate: [0, -20, 20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px]"
      />

      {/* Aurora 3 */}

      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -70, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-200px] left-1/3 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[170px]"
      />

      {/* Aurora 4 */}

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, 50, -60, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full bg-purple-500/20 blur-[150px]"
      />

      {/* Luz */}

      <motion.div
        animate={{
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"
      />

      {/* Contenido */}

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}

export default AuroraBackground;