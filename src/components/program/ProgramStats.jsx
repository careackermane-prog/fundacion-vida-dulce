import { motion } from "framer-motion";
import {
  HeartHandshake,
  Users,
  Stethoscope,
  CalendarDays,
} from "lucide-react";

const stats = [
  {
    icon: HeartHandshake,
    number: "+1,500",
    title: "Personas Beneficiadas",
  },
  {
    icon: Stethoscope,
    number: "+120",
    title: "Jornadas Médicas",
  },
  {
    icon: Users,
    number: "+20",
    title: "Voluntarios",
  },
  {
    icon: CalendarDays,
    number: "+8",
    title: "Años de Servicio",
  },
];

function ProgramStats() {
  return (
    <section className="relative -mt-20 z-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl border border-white/40 bg-white/90 backdrop-blur-xl p-8 shadow-2xl transition-all duration-300"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-lg">

                  <Icon size={30} />

                </div>

                <h3 className="mt-6 text-4xl font-black text-slate-800">
                  {item.number}
                </h3>

                <p className="mt-3 text-gray-600 font-medium leading-7">
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

export default ProgramStats;