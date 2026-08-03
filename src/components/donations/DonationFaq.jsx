import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Reveal from "../ui/Reveal";

const questions = [
  {
    question: "¿Cómo puedo realizar una donación?",
    answer:
      "Puedes apoyar a Fundación Vida Dulce mediante donaciones económicas, medicamentos, alimentos saludables, insumos médicos o participando como voluntario.",
  },
  {
    question: "¿Mi donación es segura?",
    answer:
      "Sí. Todas las donaciones son administradas con transparencia y destinadas a fortalecer nuestros programas y actividades en beneficio de la comunidad.",
  },
  {
    question: "¿Puedo donar medicamentos?",
    answer:
      "Sí, siempre que estén en buen estado, sin abrir y con fecha de vencimiento vigente.",
  },
  {
    question: "¿Cómo sé en qué se utiliza mi donación?",
    answer:
      "Las donaciones se utilizan para jornadas médicas, programas educativos, apoyo alimentario y actividades de prevención y acompañamiento para personas con diabetes.",
  },
  {
    question: "¿Puedo ser voluntario además de donar?",
    answer:
      "Sí. Siempre estamos abiertos a recibir voluntarios que deseen aportar su tiempo y conocimientos en nuestras actividades.",
  },
];

function DonationFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Preguntas frecuentes
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Resolvemos tus dudas
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Conoce las respuestas a las consultas más comunes sobre las
              donaciones y cómo puedes colaborar con Fundación Vida Dulce.
            </p>

          </div>

        </Reveal>

        <div className="mt-16 space-y-6">

          {questions.map((item, index) => (

            <motion.div
              key={index}
              layout
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
            >

              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <h3 className="text-xl font-bold text-slate-800">
                  {item.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {open === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >

                    <p className="px-6 pb-6 leading-8 text-slate-600">
                      {item.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default DonationFaq;