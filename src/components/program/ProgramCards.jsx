import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import SpotlightCard from "../ui/SpotlightCard";
import programs from "../../data/programs";

function ProgramCards() {
  return (
    <section
      id="programas"
      className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white py-28"
    >
      {/* Fondo */}

      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-sky-200/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Encabezado */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
            Nuestros Programas
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-800">
            Cada programa cambia vidas
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">
            Desarrollamos iniciativas enfocadas en la educación,
            prevención, acompañamiento y bienestar integral de las
            personas con diabetes y sus familias.
          </p>
        </motion.div>

        {/* Tarjetas */}

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {programs.map((program, index) => {

            const Icon = program.icon;

            return (

              <Tilt
                key={program.id}
                glareEnable
                glareMaxOpacity={0.18}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.03}
                transitionSpeed={2500}
              >

                <SpotlightCard className="rounded-[35px]">

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: .8,
                      delay: index * .15,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="group relative overflow-hidden rounded-[35px] bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                  >

                    {/* Shine */}

                    <div
                      className="
                      pointer-events-none
                      absolute
                      -left-40
                      top-0
                      h-full
                      w-32
                      rotate-12
                      bg-gradient-to-r
                      from-transparent
                      via-white/70
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      group-hover:left-[140%]
                      transition-all
                      duration-1000
                    "
                    />

                    {/* Imagen */}

                    <div className="overflow-hidden h-72">

                      <img
                        src={program.image}
                        alt={program.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-all
                          duration-700
                          group-hover:scale-110
                          group-hover:rotate-1
                        "
                      />

                    </div>

                    {/* Contenido */}

                    <div className="p-10">

                      <div className="flex items-center justify-between">

                        <div
                          className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-sky-600
                          to-blue-700
                          text-white
                          shadow-lg
                          transition-all
                          duration-500
                          group-hover:rotate-12
                          group-hover:scale-110
                        "
                        >

                          <Icon size={32} />

                        </div>

                        <span className="font-semibold text-sky-700">
                          Programa
                        </span>

                      </div>

                      <h3 className="mt-8 text-3xl font-black text-slate-800">
                        {program.title}
                      </h3>

                      <p className="mt-6 leading-8 text-gray-600">
                        {program.shortDescription}
                      </p>

                      {/* Características */}

                      <div className="mt-8 flex flex-wrap gap-3">

                        {program.features.slice(0, 3).map((item, i) => (

                          <span
                            key={i}
                            className="
                            rounded-full
                            bg-sky-100
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-sky-700
                            transition-all
                            duration-300
                            hover:bg-sky-700
                            hover:text-white
                            hover:scale-110
                          "
                          >
                            {item.title}
                          </span>

                        ))}

                      </div>

                      {/* Botón */}

                      <Link
                        to={program.link}
                        className="
                        group/link
                        mt-10
                        inline-flex
                        items-center
                        gap-3
                        font-bold
                        text-sky-700
                        transition-all
                        duration-300
                        hover:gap-5
                      "
                      >

                        Conocer Programa

                        <ArrowRight
                          size={20}
                          className="transition group-hover/link:translate-x-2"
                        />

                      </Link>

                    </div>

                    {/* Borde */}

                    <div
                      className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[35px]
                      border-2
                      border-transparent
                      transition-all
                      duration-500
                      group-hover:border-cyan-300
                    "
                    />

                  </motion.div>

                </SpotlightCard>

              </Tilt>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default ProgramCards;