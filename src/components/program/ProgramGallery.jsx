import { motion } from "framer-motion";

import MasonryGallery from "./MasonryGallery";

import gallery1 from "../../assets/images/programs/gallery1.jpg";
import gallery2 from "../../assets/images/programs/gallery2.jpg";
import gallery3 from "../../assets/images/programs/gallery3.jpg";
import gallery4 from "../../assets/images/programs/gallery4.jpg";
import gallery5 from "../../assets/images/programs/gallery5.jpg";

const images = [
  {
    image: gallery1,
    title: "Jornadas Médicas",
    subtitle: "Atención preventiva y controles de salud en la comunidad.",
  },
  {
    image: gallery2,
    title: "Educación en Diabetes",
    subtitle: "Capacitaciones para pacientes y sus familias.",
  },
  {
    image: gallery3,
    title: "Nutrición Saludable",
    subtitle: "Orientación alimentaria para mejorar la calidad de vida.",
  },
  {
    image: gallery4,
    title: "Apoyo Comunitario",
    subtitle: "Voluntarios acompañando a las familias beneficiadas.",
  },
  {
    image: gallery5,
    title: "Actividades de Bienestar",
    subtitle: "Promoviendo hábitos saludables en cada comunidad.",
  },
];

function ProgramGallery() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Fondo decorativo */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-sky-200/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-200/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Encabezado */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
            Nuestra Galería
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-800 lg:text-6xl">
            Cada imagen cuenta una historia
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-600">
            Conoce algunas de las actividades, jornadas y programas que
            desarrollamos para mejorar la calidad de vida de las personas con
            diabetes y sus familias.
          </p>
        </motion.div>

        {/* Galería */}

        <div className="mt-20">
          <MasonryGallery images={images} />
        </div>

      </div>
    </section>
  );
}

export default ProgramGallery;