import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

import Reveal from "../ui/Reveal";

function Newsletter() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Fondo */}

      <div className="absolute inset-0 bg-gradient-to-br from-sky-700 via-cyan-600 to-sky-900"></div>

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center text-white">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl">

              <Mail size={38} />

            </div>

            <h2 className="mt-8 text-5xl font-black">

              Mantente Informado

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-sky-100">

              Recibe artículos, consejos de alimentación, prevención,
              noticias y recomendaciones para cuidar tu salud y la de tu familia.

            </p>

          </div>

        </Reveal>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl"
        >

          <div className="flex flex-col gap-5 md:flex-row">

            <input
              type="email"
              placeholder="Escribe tu correo electrónico"
              className="
                flex-1
                rounded-2xl
                border
                border-white/20
                bg-white/15
                px-6
                py-5
                text-white
                placeholder:text-sky-100
                backdrop-blur-xl
                outline-none
                focus:border-white
              "
            />

            <button
              type="submit"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-white
                px-8
                py-5
                font-bold
                text-sky-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >

              Suscribirme

              <Send size={20} />

            </button>

          </div>

        </motion.form>

      </div>

    </section>
  );
}

export default Newsletter;