import { motion } from "framer-motion";
import { Search } from "lucide-react";

function ImageHover({
  image,
  title,
  subtitle,
  onClick,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group relative overflow-hidden rounded-[32px] cursor-pointer"
      onClick={onClick}
    >
      {/* Imagen */}

      <img
        src={image}
        alt={title}
        className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
          group-hover:rotate-[1deg]
        "
      />

      {/* Oscurecer */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-slate-950/90
          via-slate-900/20
          to-transparent
        "
      />

      {/* Shine */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-full
          w-32
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/70
          to-transparent
          opacity-0
          group-hover:left-[150%]
          group-hover:opacity-100
          transition-all
          duration-1000
        "
      />

      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-cyan-500/10
        "
      />

      {/* Icono */}

      <motion.div
        initial={{
          opacity: 0,
          scale: .5,
        }}
        whileHover={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: .25,
        }}
        className="
          absolute
          top-6
          right-6
          w-14
          h-14
          rounded-full
          bg-white/20
          backdrop-blur-xl
          flex
          items-center
          justify-center
          text-white
        "
      >
        <Search size={22} />
      </motion.div>

      {/* Texto */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-8
          translate-y-6
          group-hover:translate-y-0
          transition-all
          duration-500
        "
      >
        <h3
          className="
            text-3xl
            font-black
            text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-white/80
            leading-7
          "
        >
          {subtitle}
        </p>
      </div>

      {/* Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[32px]
          border-2
          border-transparent
          group-hover:border-cyan-300
          transition
          duration-500
        "
      />
    </motion.div>
  );
}

export default ImageHover;