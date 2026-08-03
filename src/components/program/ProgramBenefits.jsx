import { motion } from "framer-motion";
import {
  GraduationCap,
  Apple,
  HeartHandshake,
  Stethoscope,
} from "lucide-react";

import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";
import SpotlightCard from "../ui/SpotlightCard";

const benefits = [
  {
    icon: GraduationCap,
    title: "Educación Continua",
    description:
      "Brindamos talleres, capacitaciones y recursos educativos para que las personas comprendan mejor la diabetes y aprendan a manejarla adecuadamente.",
  },
  {
    icon: Apple,
    title: "Nutrición Saludable",
    description:
      "Promovemos hábitos alimenticios saludables mediante orientación nutricional personalizada y actividades prácticas.",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento Integral",
    description:
      "Ofrecemos apoyo constante a pacientes y familias, fortaleciendo el bienestar emocional y el autocuidado.",
  },
  {
    icon: Stethoscope,
    title: "Prevención y Atención",
    description:
      "Realizamos jornadas médicas, campañas preventivas y actividades comunitarias para detectar riesgos y mejorar la calidad de vida.",
  },
];

function ProgramBenefits() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Fondo */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">

              Beneficios

            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">

              ¿Por qué participar en nuestros programas?

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">

              Nuestros programas están diseñados para ofrecer una atención
              integral que fortalezca el conocimiento, promueva hábitos
              saludables y contribuya a una mejor calidad de vida para las
              personas con diabetes y sus familias.

            </p>

          </div>

        </Reveal>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Línea */}

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-300 via-sky-500 to-blue-700 lg:block"></div>

          {benefits.map((item, index) => {

            const Icon = item.icon;

            const left = index % 2 === 0;

            return (

              <Reveal
                key={index}
                animation={left ? "left" : "right"}
              >

                <div
                  className={`relative mb-20 flex ${
                    left ? "justify-start" : "justify-end"
                  }`}
                >

                  <div
                    className={`w-full lg:w-5/12 ${
                      left ? "lg:pr-16" : "lg:pl-16"
                    }`}
                  >

                    <SpotlightCard>

                      <GlassCard className="bg-white/80 p-10">

                        <motion.div
                          whileHover={{
                            rotate: 8,
                            scale: 1.1,
                          }}
                          className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-xl"
                        >

                          <Icon size={40} />

                        </motion.div>

                        <h3 className="mt-8 text-3xl font-black text-slate-800">

                          {item.title}

                        </h3>

                        <p className="mt-6 leading-8 text-gray-600">

                          {item.description}

                        </p>

                      </GlassCard>

                    </SpotlightCard>

                  </div>

                  {/* Punto */}

                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute left-1/2 top-16 hidden h-7 w-7 -translate-x-1/2 rounded-full border-4 border-white bg-sky-600 shadow-xl lg:block"
                  />

                </div>

              </Reveal>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default ProgramBenefits;