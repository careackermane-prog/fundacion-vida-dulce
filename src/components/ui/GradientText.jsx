import { motion } from "framer-motion";

function GradientText({
  children,
  className = "",
}) {
  return (
    <motion.span
      animate={{
        backgroundPosition: [
          "0% 50%",
          "100% 50%",
          "0% 50%",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`
        inline-block
        bg-gradient-to-r
        from-cyan-300
        via-white
        via-sky-300
        to-cyan-300
        bg-[length:300%_300%]
        bg-clip-text
        text-transparent
        ${className}
      `}
    >
      {children}
    </motion.span>
  );
}

export default GradientText;