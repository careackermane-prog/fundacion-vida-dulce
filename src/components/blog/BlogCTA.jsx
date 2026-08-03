import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  ArrowRight,
  BookOpen,
} from "lucide-react";

import Reveal from "../ui/Reveal";

import CTAImage from "../../assets/images/blog/blog-cta.jpg";

function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-100/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-sky-700 via-cyan-600 to-sky-800 shadow-[0_35px_90px_rgba(0,0,0,.20)]">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Texto */}

            <Reveal animation="left">

              <div className="p-10 lg:p-16">

                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 font-semibold text-white backdrop-blur-xl">

                  <HeartHandshake size={18} />

                  Fundación Vida Dulce

                </div>

                <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl">

                  La educación también salva vidas

                </h2>

                <p className="mt-8 max-w-xl text-lg leading-9 text-sky-100">

                  Cada artículo que compartimos busca informar, prevenir y acompañar
                  a las personas con diabetes y a sus familias. Descubre nuestros
                  programas y conoce cómo trabajamos para construir una comunidad
                  más saludable.

                </p>

                <div className="mt-10 flex flex-wrap gap-5">

                  <Link
                    to="/programas"
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-2xl
                      bg-white
                      px-8
                      py-4
                      font-bold
                      text-sky-700
                      shadow-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-2xl
                    "
                  >

                    Conocer Programas

                    <ArrowRight size={20} />

                  </Link>

                  <Link
                    to="/ayudar"
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/30
                      bg-white/10
                      px-8
                      py-4
                      font-bold
                      text-white
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:bg-white/20
                    "
                  >

                    <BookOpen size={20} />

                    Cómo Ayudar

                  </Link>

                </div>

              </div>

            </Reveal>

            {/* Imagen */}

            <Reveal animation="right">

              <div className="p-8">

                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  src={CTAImage}
                  alt="Fundación Vida Dulce"
                  className="
                    h-[420px]
                    w-full
                    rounded-[30px]
                    object-cover
                    shadow-2xl
                  "
                />

              </div>

            </Reveal>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BlogCTA;