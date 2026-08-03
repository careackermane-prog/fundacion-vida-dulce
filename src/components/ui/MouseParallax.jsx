import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

function MouseParallax({
  children,
  strength = 20,
  className = "",
}) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
  });

  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 18,
  });

  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 18,
  });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (px - centerX) / strength;
    const moveY = (py - centerY) / strength;

    mouseX.set(moveX);
    mouseY.set(moveY);

    rotateY.set(moveX * 0.8);
    rotateX.set(-moveY * 0.8);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

export default MouseParallax;