import { motion } from "framer-motion";
import {
  ClipboardCheck,
  BookOpen,
  HeartHandshake,
  Activity,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Evaluación",
    description:
      "Identificamos las necesidades de cada persona para brindar una atención personalizada y oportuna.",
  },
  {
    icon: BookOpen,
    title: "Educación",
    description:
      "Capacitamos a pacientes y familias mediante talleres, charlas y material educativo de calidad.",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento",
    description:
      "Brindamos seguimiento continuo con apoyo emocional, nutricional y comunitario.",
  },
  {
    icon: Activity,
    title: "Seguimiento",
    description:
      "Evaluamos resultados y promovemos hábitos saludables para mejorar la calidad de vida.",
  },
];

function ProgramProcess() {
  return (
    <section className="relative py-28 bg-slate-900 overflow-hidden">

      {/* Fondo */}

      <div className="absolute inset-0">

        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>

      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Encabezado */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="bg-cyan-500/20 text-cyan-300 px-6 py-2 rounded-full font-semibold">

            Nuestro Proceso

          </span>

          <h2 className="mt-6 text-5xl font-black text-white">

            Así transformamos vidas

          </h2>

          <p className="mt-6 text-blue-100 text-xl max-w-3xl mx-auto leading-9">

            Nuestro trabajo se desarrolla mediante un proceso integral
            que garantiza atención, educación y seguimiento continuo.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Línea */}

          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-700 rounded-full"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            const left = index % 2 === 0;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: left ? -120 : 120,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: .8,
                  delay: index * .2,
                }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-20 ${
                  left ? "justify-start" : "justify-end"
                }`}
              >

                <div
                  className={`w-full lg:w-5/12 ${
                    left ? "text-right pr-16" : "pl-16"
                  }`}
                >

                  <motion.div
                    whileHover={{
                      scale: 1.04,
                    }}
                    className="bg-white rounded-3xl p-8 shadow-2xl"
                  >

                    <div
                      className={`flex ${
                        left ? "justify-end" : "justify-start"
                      }`}
                    >

                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center text-white shadow-lg">

                        <Icon size={30} />

                      </div>

                    </div>

                    <h3 className="mt-6 text-3xl font-black text-slate-800">

                      {step.title}

                    </h3>

                    <p className="mt-5 text-gray-600 leading-8">

                      {step.description}

                    </p>

                  </motion.div>

                </div>

                {/* Punto */}

                <motion.div
                  animate={{
                    scale: [1, 1.25, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-400 border-4 border-white shadow-2xl"
                />

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
}

export default ProgramProcess;