import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

function MagneticButton({ children, className = "", strength = 30 }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
  });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const newX =
      e.clientX - rect.left - rect.width / 2;

    const newY =
      e.clientY - rect.top - rect.height / 2;

    x.set(newX / strength);

    y.set(newY / strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default MagneticButton;