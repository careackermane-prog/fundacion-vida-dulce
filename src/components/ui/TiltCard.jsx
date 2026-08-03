import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

function TiltCard({
  children,
  className = "",
  maxTilt = 12,
}) {
  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 180,
    damping: 20,
  });

  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 20,
  });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateCardY =
      ((x - centerX) / centerX) * maxTilt;

    const rotateCardX =
      -((y - centerY) / centerY) * maxTilt;

    rotateX.set(rotateCardX);
    rotateY.set(rotateCardY);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        relative
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default TiltCard;