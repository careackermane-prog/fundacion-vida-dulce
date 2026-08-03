import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function GalleryLightbox({
  images,
  selectedImage,
  setSelectedImage,
}) {
  if (selectedImage === null) return null;

  const current = images[selectedImage];

  const previousImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <AnimatePresence>

      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        {/* Botón cerrar */}

        <button
          onClick={() => setSelectedImage(null)}
          className="absolute right-8 top-8 rounded-full bg-white p-3 text-slate-700 transition hover:scale-110"
        >
          <X size={28} />
        </button>

        {/* Flecha izquierda */}

        <button
          onClick={previousImage}
          className="absolute left-6 rounded-full bg-white p-3 transition hover:scale-110"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Imagen */}

        <motion.img
          key={current.id}
          src={current.image}
          alt={current.title}
          className="max-h-[85vh] max-w-[90vw] rounded-3xl shadow-2xl"
          initial={{ scale: .9 }}
          animate={{ scale: 1 }}
          exit={{ scale: .9 }}
        />

        {/* Flecha derecha */}

        <button
          onClick={nextImage}
          className="absolute right-6 rounded-full bg-white p-3 transition hover:scale-110"
        >
          <ChevronRight size={32} />
        </button>

        {/* Información */}

        <div className="absolute bottom-10 text-center text-white">

          <h3 className="text-2xl font-black">
            {current.title}
          </h3>

          <p className="mt-2 text-cyan-300">
            {current.category}
          </p>

        </div>

      </motion.div>

    </AnimatePresence>
  );
}

export default GalleryLightbox;