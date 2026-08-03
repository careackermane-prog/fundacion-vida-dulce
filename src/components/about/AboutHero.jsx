import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import heroImg from "../../assets/images/about/about-hero.png";

function AboutHero() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-sky-700 via-blue-800 to-blue-900 py-16 text-white lg:py-24">
      <div className="mx-auto grid max-w-screen-2xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Texto */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              bg-white/20
              px-5
              py-2
              text-sm
              font-semibold
              backdrop-blur-xl
              sm:text-base
            "
          >
            Fundación Vida Dulce
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Comprometidos con mejorar la calidad de vida
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-sky-100
              sm:text-lg
              lg:text-xl
              lg:leading-9
            "
          >
            Trabajamos para brindar educación, prevención y acompañamiento a
            personas con diabetes y sus familias, promoviendo una vida más
            saludable, digna y llena de esperanza.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/programas"
              className="
                rounded-xl
                bg-white
                px-8
                py-4
                text-center
                font-semibold
                text-sky-700
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-slate-100
              "
            >
              Nuestros Programas
            </Link>

            <Link
              to="/contacto"
              className="
                rounded-xl
                border
                border-white
                px-8
                py-4
                text-center
                font-semibold
                transition-all
                duration-300
                hover:bg-white
                hover:text-sky-700
              "
            >
              Contáctanos
            </Link>

          </div>
        </motion.div>

        {/* Imagen */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <img
            src={heroImg}
            alt="Fundación Vida Dulce"
            className="
              w-full
              max-w-md
              rounded-[30px]
              shadow-[0_30px_70px_rgba(0,0,0,.35)]
              lg:max-w-xl
            "
          />
        </motion.div>

      </div>
    </section>
  );
}

export default AboutHero;