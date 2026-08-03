import { motion } from "framer-motion";
import {
  HandCoins,
  Pill,
  Apple,
  HeartHandshake,
  Shirt,
  Package,
} from "lucide-react";

import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";

const methods = [
  {
    title: "Donación económica",
    description:
      "Realiza un aporte monetario para apoyar nuestros programas y actividades.",
    icon: HandCoins,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Medicamentos",
    description:
      "Aceptamos medicamentos para diabetes en buen estado y con fecha vigente.",
    icon: Pill,
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "Alimentos saludables",
    description:
      "Puedes donar alimentos nutritivos para beneficiar a familias vulnerables.",
    icon: Apple,
    color: "from-lime-500 to-green-500",
  },
  {
    title: "Voluntariado",
    description:
      "Comparte tu tiempo y conocimientos participando en nuestras actividades.",
    icon: HeartHandshake,
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Ropa e insumos",
    description:
      "Recibimos ropa, calzado e insumos que apoyen nuestras jornadas sociales.",
    icon: Shirt,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Kits de apoyo",
    description:
      "Puedes donar glucómetros, tiras reactivas y otros materiales médicos.",
    icon: Package,
    color: "from-fuchsia-500 to-pink-600",
  },
];

function DonationMethods() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Formas de ayudar
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Tú eliges cómo colaborar
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Existen diferentes maneras de apoyar nuestra misión. Cada
              aporte contribuye a mejorar la calidad de vida de las personas
              con diabetes.
            </p>

          </div>

        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {methods.map((item, index) => {

            const Icon = item.icon;

            return (

              <Reveal
                key={index}
                animation="up"
                delay={index * 0.08}
              >

                <SpotlightCard>

                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
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

export default DonationMethods;