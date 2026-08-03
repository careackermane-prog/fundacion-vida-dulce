import { ArrowRight, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-white">

      {/* Fondo decorativo */}

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl"></div>

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 py-16 md:gap-16 md:py-24 lg:grid-cols-2 lg:gap-24 lg:py-32">

          {/* Texto */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >

            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-lg">

              <HeartPulse
                className="text-sky-600"
                size={22}
              />

              <span className="font-semibold text-sky-700">
                Fundación sin fines de lucro
              </span>

            </div>

            <h1
              className="
                mt-8
                text-4xl
                font-black
                leading-tight
                text-slate-800
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >

              Transformando vidas de personas con diabetes.

            </h1>

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-gray-600
                sm:text-lg
                lg:mx-0
                lg:text-xl
              "
            >

              En Fundación Vida Dulce trabajamos para brindar educación,
              acompañamiento y esperanza a niños, jóvenes y adultos que viven
              con diabetes, promoviendo hábitos saludables y acceso a programas
              de apoyo comunitario.

            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

              <Link
                to="/programas"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-sky-700
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-sky-800
                  hover:shadow-xl
                "
              >

                Conocer Programas

                <ArrowRight size={20} />

              </Link>

              <Link
                to="/donaciones"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  border-2
                  border-sky-700
                  px-6
                  py-4
                  font-semibold
                  text-sky-700
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-sky-700
                  hover:text-white
                  hover:shadow-xl
                "
              >

                Donar Ahora

              </Link>

            </div>

          </motion.div>

          {/* Imagen */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="order-1 lg:order-2"
          >

            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
              alt="Médica brindando atención a una paciente con diabetes"
              className="
                mx-auto
                w-full
                max-w-md
                rounded-[32px]
                shadow-[0_30px_80px_rgba(0,0,0,.20)]
                transition-all
                duration-500
                hover:scale-[1.02]
                lg:max-w-xl
                xl:max-w-2xl
              "
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;