import { motion } from "framer-motion";
import { useRef, useState } from "react";

function SpotlightCard({ children, className = "" }) {
  const divRef = useRef(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    opacity: 0,
  });

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleLeave = () => {
    setPosition((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      whileHover={{ y: -10 }}
      transition={{ duration: .3 }}
      className={`relative overflow-hidden rounded-[35px] ${className}`}
    >
      <motion.div
        animate={{
          left: position.x - 150,
          top: position.y - 150,
          opacity: position.opacity,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: .15,
        }}
        className="pointer-events-none absolute w-[300px] h-[300px] rounded-full bg-cyan-300/25 blur-3xl"
      />

      {children}
    </motion.div>
  );
}

export default SpotlightCard;