import { motion } from "framer-motion";
import { Images, Camera, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import AuroraBackground from "../ui/AuroraBackground";
import FloatingParticles from "../ui/FloatingParticles";
import MouseParallax from "../ui/MouseParallax";
import GradientText from "../ui/GradientText";

import { HeroImg } from "../../data/galleryData";

function GalleryHero() {
  return (
    <AuroraBackground>
      <section className="relative overflow-hidden py-24 lg:py-32">

        <FloatingParticles />

        <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Texto */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-6 py-2 font-semibold text-cyan-200 backdrop-blur-xl">

                <Images size={18} />

                Nuestra Galería

              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl xl:text-7xl">

                Revive cada

                <br />

                <GradientText>
                  momento especial
                </GradientText>

              </h1>

              <p className="mt-8 max-w-xl text-xl leading-9 text-slate-200">

                Descubre a través de imágenes nuestras jornadas médicas,
                campañas de prevención, actividades educativas, voluntariado
                y el compromiso de Fundación Vida Dulce con la comunidad.

              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  to="/contacto"
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
                  "
                >
                  Participa con nosotros

                  <ArrowRight size={20} />

                </Link>

              </div>

              <div className="mt-16 grid grid-cols-3 gap-8">

                <div>

                  <div className="flex items-center gap-2 text-cyan-300">

                    <Camera size={22} />

                    <span className="text-3xl font-black">
                      40+
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-300">
                    Fotografías
                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-2 text-cyan-300">

                    <Heart size={22} />

                    <span className="text-3xl font-black">
                      100+
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-300">
                    Beneficiarios
                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-2 text-cyan-300">

                    <Images size={22} />

                    <span className="text-3xl font-black">
                      8
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-300">
                    Categorías
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Imagen */}

            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >

              <MouseParallax>

                <img
                  src={HeroImg}
                  alt="Galería Fundación Vida Dulce"
                  className="
                    h-[500px]
                    w-full
                    max-w-[650px]
                    rounded-[40px]
                    object-cover
                    border
                    border-white/20
                    shadow-[0_35px_90px_rgba(0,0,0,.35)]
                  "
                />

              </MouseParallax>

            </motion.div>

          </div>

        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white to-transparent"></div>

      </section>
    </AuroraBackground>
  );
}

export default GalleryHero;