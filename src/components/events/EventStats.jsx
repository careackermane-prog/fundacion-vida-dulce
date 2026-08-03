import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  HeartHandshake,
  Activity,
} from "lucide-react";

import Reveal from "../ui/Reveal";

const stats = [
  {
    icon: CalendarDays,
    value: "45+",
    label: "Eventos realizados",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: Users,
    value: "3,500+",
    label: "Participantes",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: HeartHandshake,
    value: "1,200+",
    label: "Personas beneficiadas",
    color: "from-cyan-500 to-sky-600",
  },
  {
    icon: Activity,
    value: "80+",
    label: "Voluntarios activos",
    color: "from-indigo-600 to-sky-700",
  },
];

function EventStats() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                    rounded-[32px]
                    border
                    border-slate-100
                    bg-white
                    p-8
                    shadow-xl
                  "
                >

                  <div
                    className={`
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      ${item.color}
                      text-white
                      shadow-lg
                    `}
                  >

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-6 text-5xl font-black text-slate-800">

                    {item.value}

                  </h3>

                  <p className="mt-3 text-lg text-slate-600">

                    {item.label}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </Reveal>

      </div>

    </section>
  );
}

export default EventStats;