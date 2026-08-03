import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import Reveal from "../ui/Reveal";
import GalleryLightbox from "./GalleryLightbox";
import galleryData from "../../data/galleryData";

const filters = [
  "Todas",
  "Educación",
  "Campañas",
  "Jornadas Médicas",
  "Alimentación",
  "Ejercicio",
  "Voluntariado",
  "Donaciones",
];

function GalleryGrid() {
  const [category, setCategory] = useState("Todas");
  const [selectedImage, setSelectedImage] = useState(null);

  const images =
    category === "Todas"
      ? galleryData
      : galleryData.filter((item) => item.category === category);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">
          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Nuestra colección
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Galería de fotografías
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Explora nuestras actividades, campañas, jornadas médicas y el
              impacto que juntos hemos logrado en la comunidad.
            </p>

          </div>
        </Reveal>

        {/* Botones de filtros */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => {
                setCategory(filter);
                setSelectedImage(null);
              }}
              className={`
                rounded-full
                px-6
                py-3
                font-semibold
                transition-all
                duration-300

                ${
                  category === filter
                    ? "bg-sky-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-sky-100"
                }
              `}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Galería */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {images.map((item, index) => (

            <Reveal
              key={item.id}
              animation="up"
              delay={index * 0.05}
            >

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => setSelectedImage(index)}
                className="group cursor-pointer overflow-hidden rounded-[28px] bg-white shadow-xl"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-72
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      transition-all
                      duration-500
                      group-hover:bg-black/40
                    "
                  >

                    <Search
                      size={46}
                      className="
                        scale-0
                        text-white
                        transition-all
                        duration-300
                        group-hover:scale-100
                      "
                    />

                  </div>

                </div>

                <div className="p-6">

                  <span className="rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700">
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-xl font-black leading-tight text-slate-800">
                    {item.title}
                  </h3>

                </div>

              </motion.div>

            </Reveal>

          ))}

        </div>

      </div>

      <GalleryLightbox
        images={images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

    </section>
  );
}

export default GalleryGrid;