import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

import Reveal from "../ui/Reveal";

function GalleryVideo() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-6xl px-6">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Video Institucional
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Conoce nuestra labor
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Descubre el impacto que Fundación Vida Dulce genera en la
              comunidad a través de sus programas, campañas y jornadas de
              prevención de la diabetes.
            </p>

          </div>

        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[35px] shadow-2xl"
        >

          <div className="aspect-video">

            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Fundación Vida Dulce"
              allowFullScreen
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default GalleryVideo;