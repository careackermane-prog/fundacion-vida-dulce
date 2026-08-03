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
    description:
      "Selecciona la forma en la que deseas apoyar a Fundación Vida Dulce: donación, voluntariado, insumos médicos o alianza empresarial.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Completa el formulario",
    description:
      "Déjanos tus datos para conocer cómo deseas colaborar y poder brindarte la mejor orientación.",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Nos comunicamos contigo",
    description:
      "Nuestro equipo se pondrá en contacto para coordinar los siguientes pasos de tu colaboración.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Juntos transformamos vidas",
    description:
      "Cada aporte fortalece nuestros programas de educación, prevención y acompañamiento para personas con diabetes.",
  },
];

function HelpProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Fondo */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-40"></div>

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sky-100 blur-3xl opacity-40"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Encabezado */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <span className="inline-block rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">

            ¿Cómo colaborar?

          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-800 md:text-5xl">

            Cuatro pasos para ayudar

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

            Queremos que colaborar con Fundación Vida Dulce sea un proceso
            sencillo, transparente y accesible para todas las personas.

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
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className={`
                    flex
                    flex-col
                    items-center
                    gap-10
                    lg:flex-row
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

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-700 text-white shadow-lg">

                          <Icon size={30} />

                        </div>

                        <div>

                          <span className="text-sm font-bold tracking-widest text-sky-600">

                            PASO {step.number}

                          </span>

                          <h3 className="mt-1 text-2xl font-black text-slate-800">

                            {step.title}

                          </h3>

                        </div>

                      </div>

                      <p className="mt-6 leading-8 text-gray-600">

                        {step.description}

                      </p>

                    </div>

                  </div>

                  {/* Punto central */}

                  <div className="hidden lg:flex w-2/12 justify-center">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 text-2xl font-black text-white shadow-2xl">

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

export default HelpProcess;