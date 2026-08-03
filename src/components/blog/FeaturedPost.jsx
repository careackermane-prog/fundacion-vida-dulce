import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock3,
  UserRound,
  ArrowRight,
  BookOpen,
} from "lucide-react";

import Reveal from "../ui/Reveal";

import FeaturedImage from "../../assets/images/blog/featured-post.jpg";

function FeaturedPost() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-100/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">

              <BookOpen size={18} />

              Artículo Destacado

            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">

              Lo más leído de esta semana

            </h2>

          </div>

        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="
            mt-16
            overflow-hidden
            rounded-[40px]
            bg-white
            shadow-[0_30px_70px_rgba(0,0,0,.12)]
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* Imagen */}

            <div className="overflow-hidden">

              <img
                src={FeaturedImage}
                alt="Metabolismo"
                className="
                  h-full
                  min-h-[500px]
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  hover:scale-105
                "
              />

            </div>

            {/* Contenido */}

            <div className="flex flex-col justify-center p-10 lg:p-14">

              <span className="w-fit rounded-full bg-cyan-100 px-5 py-2 font-semibold text-cyan-700">

                Metabolismo

              </span>

              <h3 className="mt-6 text-4xl font-black leading-tight text-slate-800">

                ¿Qué es el metabolismo y cómo influye en tu salud?

              </h3>

              <p className="mt-8 text-lg leading-9 text-slate-600">

                El metabolismo es el conjunto de procesos mediante los cuales
                el cuerpo convierte los alimentos en energía. Comprender cómo
                funciona puede ayudarte a desarrollar hábitos saludables,
                mejorar tu bienestar y tomar decisiones informadas sobre tu
                alimentación y estilo de vida.

              </p>

              {/* Información */}

              <div className="mt-10 flex flex-wrap gap-6 text-slate-500">

                <div className="flex items-center gap-2">

                  <Calendar size={18} />

                  18 Noviembre 2026

                </div>

                <div className="flex items-center gap-2">

                  <Clock3 size={18} />

                  5 min de lectura

                </div>

                <div className="flex items-center gap-2">

                  <UserRound size={18} />

                  Fundación Vida Dulce

                </div>

              </div>

              <Link
                to="/blog/metabolismo"
                className="
                  mt-12
                  inline-flex
                  w-fit
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
                  hover:gap-5
                "
              >

                Leer artículo

                <ArrowRight size={20} />

              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default FeaturedPost;