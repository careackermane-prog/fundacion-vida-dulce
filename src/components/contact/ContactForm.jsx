import { motion } from "framer-motion";
import { Send } from "lucide-react";

import Reveal from "../ui/Reveal";

function ContactForm() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Formulario de contacto
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Envíanos un mensaje
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>

          </div>

        </Reveal>

        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[35px] bg-white p-10 shadow-2xl"
        >

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Nombre completo
              </label>

              <input
                type="text"
                placeholder="Ingresa tu nombre"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Correo electrónico
              </label>

              <input
                type="email"
                placeholder="correo@ejemplo.com"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Teléfono
              </label>

              <input
                type="tel"
                placeholder="+504 0000-0000"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Asunto
              </label>

              <input
                type="text"
                placeholder="Escribe el asunto"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

          </div>

          <div className="mt-8">

            <label className="mb-2 block font-semibold text-slate-700">
              Mensaje
            </label>

            <textarea
              rows="6"
              placeholder="Escribe tu mensaje..."
              className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500 resize-none"
            ></textarea>

          </div>

          <button
            type="submit"
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-sky-600
              to-cyan-500
              px-8
              py-4
              font-bold
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <Send size={20} />

            Enviar mensaje

          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default ContactForm;