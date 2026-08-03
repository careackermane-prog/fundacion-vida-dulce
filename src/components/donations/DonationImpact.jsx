import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  Stethoscope,
  BadgeDollarSign,
} from "lucide-react";

import Reveal from "../ui/Reveal";

const stats = [
  {
    icon: Users,
    value: "3,500+",
    title: "Personas beneficiadas",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: HeartHandshake,
    value: "250+",
    title: "Donantes solidarios",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Stethoscope,
    value: "120",
    title: "Jornadas médicas",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: BadgeDollarSign,
    value: "100%",
    title: "Transparencia",
    color: "from-indigo-500 to-violet-600",
  },
];

function DonationImpact() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Nuestro impacto
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Cada donación deja huella
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Gracias al apoyo de nuestros donantes y voluntarios,
              seguimos transformando vidas mediante programas de salud,
              educación y prevención de la diabetes.
            </p>

          </div>

        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="rounded-[30px] bg-white p-10 text-center shadow-xl"
              >

                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white shadow-lg`}
                >
                  <Icon size={36} />
                </div>

                <h3 className="mt-8 text-5xl font-black text-slate-800">
                  {item.value}
                </h3>

                <p className="mt-4 text-lg font-semibold text-slate-600">
                  {item.title}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default DonationImpact;