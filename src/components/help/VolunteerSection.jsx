import { motion } from "framer-motion";
import {
  HeartHandshake,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import Reveal from "../ui/Reveal";
import MouseParallax from "../ui/MouseParallax";

import VolunteerImage from "../../assets/images/help/volunteer.jpg";

const benefits = [
  "Participa en jornadas comunitarias.",
  "Apoya actividades educativas.",
  "Comparte tus conocimientos.",
  "Forma parte de una familia solidaria.",
];

function VolunteerSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-sky-50 py-32">

      {/* Fondo */}

      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Imagen */}

          <Reveal animation="left">

            <MouseParallax>

              <div className="relative">

                <img
                  src={VolunteerImage}
                  alt="Voluntarios Fundación Vida Dulce"
                  className="
                    w-full
                    rounded-[40px]
                    shadow-[0_35px_90px_rgba(0,0,0,.18)]
                  "
                />

                {/* Tarjeta flotante */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: .5,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    absolute
                    bottom-8
                    left-8
                    rounded-3xl
                    bg-white/90
                    backdrop-blur-xl
                    px-8
                    py-6
                    shadow-2xl
                  "
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-700 text-white">

                      <Users size={30} />

                    </div>

                    <div>

                      <h3 className="text-3xl font-black text-slate-800">

                        +250

                      </h3>

                      <p className="text-slate-600">

                        Voluntarios activos

                      </p>

                    </div>

                  </div>

                </motion.div>

              </div>

            </MouseParallax>

          </Reveal>

          {/* Texto */}

          <Reveal animation="right">

            <span className="rounded-full bg-cyan-100 px-6 py-2 font-semibold text-cyan-700">

              Haz la diferencia

            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-800">

              Sé parte de nuestro equipo de voluntarios

            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              Cada voluntario aporta tiempo, conocimiento y compromiso para
              mejorar la calidad de vida de personas con diabetes y sus
              familias. Tu participación puede marcar una diferencia real.

            </p>

            <div className="mt-10 space-y-5">

              {benefits.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    x: 6,
                  }}
                  className="flex items-center gap-4"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100">

                    <CheckCircle2
                      className="text-cyan-600"
                      size={26}
                    />

                  </div>

                  <p className="text-lg text-slate-700">

                    {item}

                  </p>

                </motion.div>

              ))}

            </div>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                to="/contacto"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-600
                  to-sky-700
                  px-8
                  py-4
                  font-bold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >

                Quiero ser voluntario

                <ArrowRight size={22} />

              </Link>

              <div className="flex items-center gap-3">

                <HeartHandshake
                  className="text-cyan-600"
                  size={28}
                />

                <span className="font-semibold text-slate-700">

                  Tu tiempo también cambia vidas.

                </span>

              </div>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}

export default VolunteerSection;