import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CalendarPlus,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import Reveal from "../ui/Reveal";

function EventCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-cyan-700 to-blue-900 py-28">

      {/* Fondo decorativo */}

      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="zoom">

          <div className="rounded-[40px] border border-white/20 bg-white/10 p-12 text-center backdrop-blur-xl shadow-2xl">

            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 font-semibold text-cyan-100">

              <HeartHandshake size={18} />

              Fundación Vida Dulce

            </span>

            <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">

              ¡Participa en nuestros próximos eventos!

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-sky-100">

              Cada actividad representa una oportunidad para educar,
              prevenir y transformar vidas. Tu participación puede hacer
              la diferencia en nuestra comunidad.

            </p>

            {/* Botones */}

            <div className="mt-12 flex flex-wrap justify-center gap-6">

              <Link
                to="/contacto"
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
                  hover:shadow-2xl
                "
              >

                <CalendarPlus size={22} />

                Inscribirme

              </Link>

              <Link
                to="/ayudar"
                className="
                  inline-flex
                  items-center
                  gap-3
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
                  hover:-translate-y-1
                "
              >

                Ser Voluntario

                <ArrowRight size={20} />

              </Link>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}

export default EventCTA;