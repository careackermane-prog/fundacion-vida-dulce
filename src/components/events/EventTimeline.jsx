import { CalendarCheck, Megaphone, HeartHandshake, Smile } from "lucide-react";
import { motion } from "framer-motion";

import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";

const timeline = [
  {
    icon: CalendarCheck,
    title: "Planificación",
    description:
      "Organizamos cada evento junto a profesionales de la salud, voluntarios y aliados estratégicos.",
  },
  {
    icon: Megaphone,
    title: "Convocatoria",
    description:
      "Invitamos a la comunidad a participar mediante nuestras redes sociales y campañas informativas.",
  },
  {
    icon: HeartHandshake,
    title: "Desarrollo del evento",
    description:
      "Realizamos jornadas médicas, charlas educativas, entrega de insumos y actividades para toda la familia.",
  },
  {
    icon: Smile,
    title: "Impacto",
    description:
      "Cada actividad fortalece la prevención, la educación y mejora la calidad de vida de las personas con diabetes.",
  },
];

function EventTimeline() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-200/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Cómo se desarrolla un evento
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Cada evento sigue un proceso
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Desde la organización hasta el impacto final, cada actividad está
              diseñada para brindar educación, prevención y esperanza.
            </p>

          </div>

        </Reveal>

        <div className="relative mt-24">

          <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-cyan-500 to-sky-700 md:block"></div>

          <div className="space-y-12">

            {timeline.map((step, index) => {

              const Icon = step.icon;

              return (

                <Reveal
                  key={index}
                  animation="left"
                  delay={index * 0.15}
                >

                  <div className="flex items-start gap-8">

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="
                        hidden
                        md:flex
                        h-14
                        w-14
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-cyan-500
                        to-sky-700
                        text-white
                        font-bold
                        shadow-xl
                      "
                    >
                      {index + 1}
                    </motion.div>

                    <GlassCard className="flex-1 bg-white p-8">

                      <div className="flex flex-col gap-6 md:flex-row md:items-center">

                        <div className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-cyan-500
                          to-sky-700
                          text-white
                          shadow-lg
                        ">

                          <Icon size={30} />

                        </div>

                        <div>

                          <h3 className="text-2xl font-black text-slate-800">
                            {step.title}
                          </h3>

                          <p className="mt-3 leading-8 text-slate-600">
                            {step.description}
                          </p>

                        </div>

                      </div>

                    </GlassCard>

                  </div>

                </Reveal>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default EventTimeline;