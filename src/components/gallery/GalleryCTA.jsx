import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartHandshake, ArrowRight } from "lucide-react";

import Reveal from "../ui/Reveal";

function GalleryCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-sky-700 via-cyan-600 to-sky-800 py-24">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        <Reveal animation="up">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl">

              <HeartHandshake
                size={42}
                className="text-white"
              />

            </div>

            <h2 className="mt-8 text-5xl font-black text-white">

              Tú también puedes ser parte del cambio

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-sky-100">

              Cada fotografía representa una historia de esperanza,
              solidaridad y compromiso con las personas que viven con
              diabetes. Súmate como voluntario, participa en nuestras
              campañas o realiza una donación para seguir transformando vidas.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">

              <Link
                to="/ayudar"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-8
                  py-4
                  font-bold
                  text-sky-700
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >

                Quiero ayudar

                <ArrowRight size={20} />

              </Link>

              <Link
                to="/contacto"
                className="
                  inline-flex
                  items-center
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/10
                  px-8
                  py-4
                  font-bold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white/20
                "
              >

                Contáctanos

              </Link>

            </div>

          </motion.div>

        </Reveal>

      </div>

    </section>
  );
}

export default GalleryCTA;