import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

function ImageLightbox({
  images,
  current,
  open,
  onClose,
  onNext,
  onPrev,
}) {
  if (!images.length) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-slate-950/90
            backdrop-blur-xl
            p-6
          "
        >
          {/* Botón cerrar */}

          <button
            onClick={onClose}
            className="
              absolute
              top-8
              right-8
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/20
            "
          >
            <X />
          </button>

          {/* Botón anterior */}

          <button
            onClick={onPrev}
            className="
              absolute
              left-8
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/20
            "
          >
            <ChevronLeft />
          </button>

          {/* Botón siguiente */}

          <button
            onClick={onNext}
            className="
              absolute
              right-8
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/20
            "
          >
            <ChevronRight />
          </button>

          {/* Imagen */}

          <motion.img
            key={current}
            src={images[current].image}
            alt={images[current].title}
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              max-h-[85vh]
              max-w-[90vw]
              rounded-[30px]
              shadow-[0_40px_80px_rgba(0,0,0,.45)]
            "
          />

          {/* Información */}

          <motion.div
            initial={{
              y: 30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 30,
              opacity: 0,
            }}
            className="
              absolute
              bottom-10
              left-1/2
              -translate-x-1/2
              rounded-3xl
              border
              border-white/10
              bg-white/10
              px-8
              py-5
              text-center
              backdrop-blur-2xl
            "
          >
            <h3 className="text-2xl font-black text-white">
              {images[current].title}
            </h3>

            <p className="mt-2 text-white/80">
              {images[current].subtitle}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageLightbox;