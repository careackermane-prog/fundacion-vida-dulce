import { motion } from "framer-motion";

function AnimatedBorder() {
  return (
    <>
      {/* Borde superior */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-400 via-white to-cyan-400"
        animate={{
          x: ["-30%", "450%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Borde derecho */}
      <motion.div
        className="absolute top-0 right-0 w-[3px] h-28 rounded-full bg-gradient-to-b from-cyan-400 via-white to-cyan-400"
        animate={{
          y: ["-30%", "450%"],
        }}
        transition={{
          duration: 3,
          delay: 0.75,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Borde inferior */}
      <motion.div
        className="absolute bottom-0 right-0 h-[3px] w-28 rounded-full bg-gradient-to-l from-cyan-400 via-white to-cyan-400"
        animate={{
          x: ["30%", "-450%"],
        }}
        transition={{
          duration: 3,
          delay: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Borde izquierdo */}
      <motion.div
        className="absolute bottom-0 left-0 w-[3px] h-28 rounded-full bg-gradient-to-t from-cyan-400 via-white to-cyan-400"
        animate={{
          y: ["30%", "-450%"],
        }}
        transition={{
          duration: 3,
          delay: 2.25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}

export default AnimatedBorder;