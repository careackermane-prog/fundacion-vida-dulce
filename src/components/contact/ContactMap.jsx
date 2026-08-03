import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";

import Reveal from "../ui/Reveal";

function ContactMap() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">

              Nuestra ubicación

            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">

              Visítanos

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

              Estamos comprometidos con brindar atención cercana y orientación a
              todas las personas que lo necesiten.

            </p>

          </div>

        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[35px] shadow-2xl"
        >

          <iframe
            title="Ubicación Fundación Vida Dulce"
            src="https://www.google.com/maps?q=Danlí,+El+Paraíso,+Honduras&output=embed"
            className="h-[550px] w-full border-0"
            loading="lazy"
            allowFullScreen
          />

        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-3 text-slate-600">

          <MapPinned className="text-sky-600" size={24} />

          <span className="text-lg font-medium">

            Danlí, El Paraíso, Honduras

          </span>

        </div>

      </div>

    </section>
  );
}

export default ContactMap;