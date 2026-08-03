import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

import FeaturedImage from "../../assets/images/events/featured-event.jpg";

function FeaturedEvents() {
  return (
    <section className="bg-white py-20 lg:py-24">

      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Texto */}

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex w-fit rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">

              Evento Destacado

            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-800 md:text-5xl">

              Feria Integral de Diabetes

            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">

              Una jornada gratuita donde las personas con diabetes y sus
              familias podrán acceder a consultas médicas, educación,
              nutrición, toma de glucosa, actividades recreativas y mucho más.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="flex items-center gap-2 rounded-full bg-cyan-100 px-5 py-3 font-semibold text-cyan-700">

                <CalendarDays size={18} />

                14 Noviembre 2026

              </div>

              <div className="flex items-center gap-2 rounded-full bg-sky-100 px-5 py-3 font-semibold text-sky-700">

                <MapPin size={18} />

                Tegucigalpa

              </div>

            </div>

          </motion.div>

          {/* Imagen */}

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <img
              src={FeaturedImage}
              alt="Evento destacado"
              className="
                h-[460px]
                w-full
                max-w-[650px]
                object-cover
                rounded-[40px]
                border
                border-slate-200
                shadow-[0_25px_70px_rgba(0,0,0,.18)]
              "
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedEvents;