import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

import Reveal from "../ui/Reveal";

const faqs = [
  {
    question: "¿Cómo puedo realizar una donación?",
    answer:
      "Puedes apoyar a la Fundación mediante donaciones económicas, aportes mensuales, medicamentos o participando en nuestras campañas solidarias.",
  },
  {
    question: "¿Las donaciones son seguras?",
    answer:
      "Sí. Todos los aportes son administrados con transparencia y destinados al desarrollo de nuestros programas de educación, prevención y apoyo comunitario.",
  },
  {
    question: "¿Puedo donar medicamentos?",
    answer:
      "Sí. Recibimos insulina, glucómetros, tiras reactivas y otros insumos médicos en buen estado y dentro de su fecha de vencimiento.",
  },
  {
    question: "¿Cómo puedo ser voluntario?",
    answer:
      "Solo debes completar nuestro formulario de contacto. Nuestro equipo se comunicará contigo para integrarte a las actividades disponibles.",
  },
  {
    question: "¿Las empresas pueden colaborar?",
    answer:
      "Sí. Trabajamos junto a empresas e instituciones que desean desarrollar programas de responsabilidad social y apoyar nuestras iniciativas.",
  },
];

function HelpFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-32">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-sky-100/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-cyan-100 px-6 py-2 font-semibold text-cyan-700">

              Preguntas frecuentes

            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-800 md:text-5xl">

              Resolvemos tus dudas

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

              Queremos que colaborar con Fundación Vida Dulce sea una experiencia sencilla, transparente y segura.

            </p>

          </div>

        </Reveal>

        <div className="mt-16 space-y-6">

          {faqs.map((faq, index) => {

            const active = open === index;

            return (

              <motion.div
                key={index}
                layout
                className="
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  shadow-lg
                "
              >

                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    p-8
                    text-left
                  "
                >

                  <div className="flex items-center gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">

                      <HelpCircle
                        className="text-cyan-600"
                        size={28}
                      />

                    </div>

                    <h3 className="text-xl font-bold text-slate-800">

                      {faq.question}

                    </h3>

                  </div>

                  <motion.div
                    animate={{
                      rotate: active ? 180 : 0,
                    }}
                  >

                    <ChevronDown
                      className="text-cyan-600"
                      size={28}
                    />

                  </motion.div>

                </button>

                <AnimatePresence>

                  {active && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                    >

                      <div className="px-8 pb-8 pl-28 text-lg leading-8 text-slate-600">

                        {faq.answer}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default HelpFaq;