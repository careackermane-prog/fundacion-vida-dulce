import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
      }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-[9999]
        h-[4px]
        origin-left
        bg-gradient-to-r
        from-cyan-400
        via-sky-500
        to-blue-700
        shadow-[0_0_20px_rgba(14,165,233,.8)]
      "
    />
  );
}

export default ScrollProgress;