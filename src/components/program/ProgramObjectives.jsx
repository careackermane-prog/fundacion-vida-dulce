import { motion } from "framer-motion";
import {
  Target,
  HeartHandshake,
  GraduationCap,
  Leaf,
  CheckCircle2,
} from "lucide-react";

import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";
import MouseParallax from "../ui/MouseParallax";

import ObjectiveImage from "../../assets/images/programs/program-objectives.jpg";

const objectives = [
  "Promover la educación sobre la diabetes y su prevención.",

  "Fomentar hábitos de vida saludables mediante orientación nutricional y actividad física.",

  "Brindar acompañamiento integral a pacientes y sus familias.",

  "Realizar jornadas médicas y campañas de prevención en la comunidad.",

  "Fortalecer el autocuidado para mejorar la calidad de vida.",

  "Crear espacios de apoyo, solidaridad y aprendizaje continuo.",
];

function ProgramObjectives() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">

      {/* Fondo */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-sky-200/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Imagen */}

          <Reveal animation="left">

            <MouseParallax>

              <img
                src={ObjectiveImage}
                alt="Objetivos de los programas"
                className="w-full rounded-[40px] shadow-[0_30px_70px_rgba(0,0,0,.18)]"
              />

            </MouseParallax>

          </Reveal>

          {/* Texto */}

          <Reveal animation="right">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">

              Nuestro Compromiso

            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-800">

              Objetivos que generan un impacto positivo

            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-600">

              Trabajamos para fortalecer el conocimiento, promover la prevención
              y brindar acompañamiento continuo a las personas con diabetes,
              impulsando una mejor calidad de vida para ellas y sus familias.

            </p>

            <div className="mt-10 space-y-5">

              {objectives.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    x: 8,
                  }}
                >

                  <GlassCard className="bg-white/90 p-5">

                    <div className="flex items-start gap-4">

                      <div className="mt-1 rounded-xl bg-sky-100 p-2">

                        <CheckCircle2
                          size={22}
                          className="text-sky-700"
                        />

                      </div>

                      <p className="leading-7 text-gray-700">

                        {item}

                      </p>

                    </div>

                  </GlassCard>

                </motion.div>

              ))}

            </div>

          </Reveal>

        </div>

        {/* Tarjetas inferiores */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <Reveal animation="up" delay={0.1}>

            <GlassCard className="bg-white p-8 text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-xl">

                <Target size={40} />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">

                Prevención

              </h3>

              <p className="mt-4 leading-7 text-gray-600">

                Impulsamos acciones preventivas que ayudan a reducir los riesgos
                asociados con la diabetes.

              </p>

            </GlassCard>

          </Reveal>

          <Reveal animation="up" delay={0.2}>

            <GlassCard className="bg-white p-8 text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-xl">

                <GraduationCap size={40} />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">

                Educación

              </h3>

              <p className="mt-4 leading-7 text-gray-600">

                Compartimos información confiable para fortalecer el autocuidado
                y la toma de decisiones saludables.

              </p>

            </GlassCard>

          </Reveal>

          <Reveal animation="up" delay={0.3}>

            <GlassCard className="bg-white p-8 text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-xl">

                <HeartHandshake size={40} />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">

                Acompañamiento

              </h3>

              <p className="mt-4 leading-7 text-gray-600">

                Caminamos junto a cada paciente y su familia durante todo su
                proceso de aprendizaje y cuidado.

              </p>

            </GlassCard>

          </Reveal>

        </div>

      </div>

    </section>
  );
}

export default ProgramObjectives;