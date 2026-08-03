import { motion } from "framer-motion";

function FloatingParticles() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 12 + 4,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 12 + 12,
    opacity: Math.random() * 0.4 + 0.15,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((particle) => (

        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            opacity: particle.opacity,
            filter: "blur(1px)",
          }}
          initial={{
            y: "110%",
            scale: 0,
          }}
          animate={{
            y: "-120%",
            scale: [0, 1, 1, 0],
            x: [0, 20, -15, 15, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />

      ))}

    </div>
  );
}

export default FloatingParticles;