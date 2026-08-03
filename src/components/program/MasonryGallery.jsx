import { useState } from "react";
import { motion } from "framer-motion";
import ImageLightbox from "../ui/ImageLightbox";

function MasonryGallery({ images }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openImage = (index) => {
    setCurrent(index);
    setOpen(true);
  };

  const next = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div
        className="
          columns-1
          md:columns-2
          xl:columns-3
          gap-6
          space-y-6
        "
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .7,
              delay: index * .08,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              relative
              cursor-pointer
              overflow-hidden
              rounded-[28px]
              break-inside-avoid
            "
            onClick={() => openImage(index)}
          >
            <img
              src={image.image}
              alt={image.title}
              className="
                w-full
                rounded-[28px]
                transition-all
                duration-700
                group-hover:scale-110
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-7
                translate-y-8
                opacity-0
                group-hover:translate-y-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
            >
              <h3 className="text-2xl font-black text-white">
                {image.title}
              </h3>

              <p className="mt-2 text-white/80">
                {image.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <ImageLightbox
        images={images}
        current={current}
        open={open}
        onClose={() => setOpen(false)}
        onNext={next}
        onPrev={prev}
      />
    </>
  );
}

export default MasonryGallery;