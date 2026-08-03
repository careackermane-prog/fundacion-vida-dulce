import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  ArrowRight,
  HandHeart,
  Users,
  BadgeDollarSign,
} from "lucide-react";

import AuroraBackground from "../ui/AuroraBackground";
import FloatingParticles from "../ui/FloatingParticles";
import MouseParallax from "../ui/MouseParallax";
import GradientText from "../ui/GradientText";

import HeroImage from "../../assets/images/donations/donation-hero.jpg";

function DonationHero() {
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

                <HeartHandshake size={18} />

                Donaciones Fundación Vida Dulce

              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl xl:text-7xl">

                Tu apoyo

                <br />

                <GradientText>
                  cambia vidas
                </GradientText>

              </h1>

              <p className="mt-8 max-w-xl text-xl leading-9 text-slate-200">

                Con tu donación ayudas a que más personas con diabetes
                reciban educación, atención médica, acompañamiento y
                recursos para mejorar su calidad de vida.

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
                    hover:shadow-2xl
                  "
                >

                  Donar ahora

                  <ArrowRight size={20} />

                </Link>

                <Link
                  to="/nosotros"
                  className="
                    inline-flex
                    items-center
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

                  Conocer la fundación

                </Link>

              </div>

              {/* Estadísticas */}

              <div className="mt-16 grid grid-cols-3 gap-8">

                <div>

                  <div className="flex items-center gap-2 text-cyan-300">

                    <Users size={24} />

                    <span className="text-3xl font-black">
                      3,500+
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-300">

                    Personas beneficiadas

                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-2 text-cyan-300">

                    <HandHeart size={24} />

                    <span className="text-3xl font-black">
                      250+
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-300">

                    Donantes solidarios

                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-2 text-cyan-300">

                    <BadgeDollarSign size={24} />

                    <span className="text-3xl font-black">
                      100%
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-300">

                    Transparencia

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
                  src={HeroImage}
                  alt="Donaciones Fundación Vida Dulce"
                  className="
                    h-[500px]
                    w-full
                    max-w-[650px]
                    rounded-[40px]
                    border
                    border-white/20
                    object-cover
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

export default DonationHero;