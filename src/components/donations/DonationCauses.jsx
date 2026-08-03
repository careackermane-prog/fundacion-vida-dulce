import { motion } from "framer-motion";
import {
  HeartPulse,
  GraduationCap,
  Apple,
  HandHeart,
} from "lucide-react";

import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";

const causes = [
  {
    title: "Atención médica",
    description:
      "Apoyamos jornadas médicas, controles de glucosa y atención especializada para personas con diabetes.",
    icon: HeartPulse,
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Educación",
    description:
      "Desarrollamos talleres, charlas y programas educativos para promover el autocuidado y la prevención.",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Alimentación saludable",
    description:
      "Promovemos hábitos saludables mediante orientación nutricional y entrega de alimentos cuando es necesario.",
    icon: Apple,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Apoyo social",
    description:
      "Brindamos acompañamiento a pacientes y familias para mejorar su bienestar y calidad de vida.",
    icon: HandHeart,
    color: "from-orange-500 to-amber-500",
  },
];

function DonationCauses() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              ¿En qué ayudamos?
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Tu donación genera impacto
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Cada aporte fortalece nuestros programas y permite que más
              personas reciban apoyo integral para vivir mejor con diabetes.
            </p>

          </div>

        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {causes.map((item, index) => {

            const Icon = item.icon;

            return (

              <Reveal
                key={index}
                animation="up"
                delay={index * 0.1}
              >

                <SpotlightCard>

                  <motion.div
                    whileHover={{ y: -8 }}
                    className="rounded-[30px] bg-white p-8 shadow-xl"
                  >

                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                    >
                      <Icon size={36} />
                    </div>

                    <h3 className="mt-6 text-2xl font-black text-slate-800">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>

                  </motion.div>

                </SpotlightCard>

              </Reveal>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default DonationCauses;