import { motion } from "framer-motion";

function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -10,
              scale: 1.02,
            }
          : {}
      }
      transition={{
        duration: 0.35,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/20
        bg-white/10
        backdrop-blur-2xl
        shadow-[0_15px_40px_rgba(0,0,0,0.18)]
        ${className}
      `}
    >
      {/* Reflejo */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/15
          via-transparent
          to-transparent
        "
      />

      {/* Luz superior */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-white/60
          to-transparent
        "
      />

      {/* Luz izquierda */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-full
          w-px
          bg-gradient-to-b
          from-white/50
          via-transparent
          to-transparent
        "
      />

      {/* Contenido */}

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default GlassCard;