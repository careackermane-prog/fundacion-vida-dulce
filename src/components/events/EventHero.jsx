import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Users,
  ArrowRight,
  Clock3,
} from "lucide-react";

import AuroraBackground from "../ui/AuroraBackground";
import FloatingParticles from "../ui/FloatingParticles";
import MouseParallax from "../ui/MouseParallax";
import GradientText from "../ui/GradientText";

import HeroImage from "../../assets/images/events/events-hero.jpg";

function EventHero() {
  return (
    <AuroraBackground>
      <section className="relative overflow-hidden py-24 lg:py-32">

        <FloatingParticles />

        <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Texto */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-6 py-2 font-semibold text-cyan-200 backdrop-blur-xl">

                <CalendarDays size={18} />

                Fundación Vida Dulce

              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl xl:text-7xl">

                Eventos y

                <br />

                <GradientText>

                  Jornadas

                </GradientText>

              </h1>

              <p className="mt-8 max-w-xl text-xl leading-9 text-slate-200">

                Participa en nuestras jornadas médicas, campañas de prevención,
                conferencias y actividades educativas para mejorar la calidad
                de vida de las personas con diabetes.

              </p>

              {/* Botones */}

              <div className="mt-12 flex flex-wrap gap-5">

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

                  Participar

                  <ArrowRight size={20} />

                </Link>

                <Link
                  to="/galeria"
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

                  Ver Galería

                </Link>

              </div>

              {/* Estadísticas */}

              <div className="mt-16 grid grid-cols-3 gap-8">

                <div>

                  <div className="flex items-center gap-2 text-cyan-300">

                    <CalendarDays size={22} />

                    <span className="text-3xl font-black">

                      25+

                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-300">

                    Eventos realizados

                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-2 text-cyan-300">

                    <Users size={22} />

                    <span className="text-3xl font-black">

                      1800+

                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-300">

                    Participantes

                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-2 text-cyan-300">

                    <MapPin size={22} />

                    <span className="text-3xl font-black">

                      15

                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-300">

                    Municipios

                  </p>

                </div>

              </div>

            </motion.div>

            {/* Imagen */}

            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >

              <MouseParallax>

                <div className="relative">

                  <img
                    src={HeroImage}
                    alt="Eventos Fundación Vida Dulce"
                    className="
                      mx-auto
                      h-[460px]
                      w-full
                      max-w-[650px]
                      object-cover
                      rounded-[40px]
                      border
                      border-white/20
                      shadow-[0_35px_90px_rgba(0,0,0,.35)]
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-6
                      left-6
                      rounded-2xl
                      border
                      border-white/20
                      bg-white/15
                      px-6
                      py-4
                      backdrop-blur-xl
                    "
                  >

                    <div className="flex items-center gap-3 text-white">

                      <Clock3 size={22} />

                      <div>

                        <p className="font-bold">

                          Próximo Evento

                        </p>

                        <p className="text-sm text-slate-200">

                          Jornada Médica Gratuita

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </MouseParallax>

            </motion.div>

          </div>

        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white to-transparent"></div>

      </section>
    </AuroraBackground>
  );
}

export default EventHero;