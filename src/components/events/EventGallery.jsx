import { motion } from "framer-motion";

import Reveal from "../ui/Reveal";

import Gallery1 from "../../assets/images/events/gallery-1.jpg";
import Gallery2 from "../../assets/images/events/gallery-2.jpg";
import Gallery3 from "../../assets/images/events/gallery-3.jpg";
import Gallery4 from "../../assets/images/events/gallery-4.jpg";
import Gallery5 from "../../assets/images/events/gallery-5.jpg";
import Gallery6 from "../../assets/images/events/gallery-6.jpg";

const images = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
];

function EventGallery() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-sky-200/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">

              Galería

            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">

              Revive nuestros mejores momentos

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

              Cada jornada representa una oportunidad para educar,
              prevenir y brindar esperanza a cientos de familias.

            </p>

          </div>

        </Reveal>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((image, index) => (

            <Reveal
              key={index}
              animation="zoom"
              delay={index * 0.08}
            >

              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group overflow-hidden rounded-[32px] shadow-2xl"
              >

                <img
                  src={image}
                  alt={`Evento ${index + 1}`}
                  className="
                    h-80
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

              </motion.div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}

export default EventGallery;