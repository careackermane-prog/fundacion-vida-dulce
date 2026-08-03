import { motion } from "framer-motion";
import {
  HeartHandshake,
  ClipboardCheck,
  PhoneCall,
  Heart,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: HeartHandshake,
    title: "Elige cómo ayudar",
    text: "Selecciona la forma en que deseas apoyar a Fundación Vida Dulce.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Completa el formulario",
    text: "Llena tus datos para que podamos conocer cómo deseas colaborar.",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Nos comunicamos contigo",
    text: "Nuestro equipo se pondrá en contacto para coordinar tu ayuda.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Transformamos vidas",
    text: "Cada aporte genera oportunidades y esperanza para quienes viven con diabetes.",
  },
];

function TimelineSection() {
  return (
    <section className="bg-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="inline-block rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">

            ¿Cómo colaborar?

          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-800">

            Es muy fácil ayudar

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">

            Hemos diseñado un proceso simple, transparente y rápido para que
            cualquier persona pueda convertirse en parte de nuestra misión.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Línea */}

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500 via-sky-500 to-blue-700 lg:block"></div>

          <div className="space-y-16">

            {steps.map((step, index) => {

              const Icon = step.icon;

              const reverse = index % 2 === 1;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .6,
                    delay: index * .15,
                  }}
                  className={`
                    flex
                    flex-col
                    lg:flex-row
                    items-center
                    gap-10
                    ${reverse ? "lg:flex-row-reverse" : ""}
                  `}
                >

                  {/* Tarjeta */}

                  <div className="w-full lg:w-5/12">

                    <div
                      className="
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        p-8
                        shadow-xl
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-2xl
                      "
                    >

                      <div className="flex items-center gap-5">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-700 text-white">

                          <Icon size={30} />

                        </div>

                        <div>

                          <span className="text-sm font-bold text-sky-600">

                            PASO {step.number}

                          </span>

                          <h3 className="text-2xl font-black text-slate-800">

                            {step.title}

                          </h3>

                        </div>

                      </div>

                      <p className="mt-6 leading-8 text-gray-600">

                        {step.text}

                      </p>

                    </div>

                  </div>

                  {/* Punto central */}

                  <div className="hidden lg:flex w-2/12 justify-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 text-xl font-black text-white shadow-xl">

                      {step.number}

                    </div>

                  </div>

                  {/* Espacio */}

                  <div className="hidden lg:block lg:w-5/12"></div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default TimelineSection;