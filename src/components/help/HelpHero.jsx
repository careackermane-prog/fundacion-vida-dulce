import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  ArrowRight,
  Users,
  Heart,
  HandCoins,
} from "lucide-react";

import AuroraBackground from "../ui/AuroraBackground";
import FloatingParticles from "../ui/FloatingParticles";
import MouseParallax from "../ui/MouseParallax";
import GradientText from "../ui/GradientText";

import HeroImage from "../../assets/images/help/help-hero.jpg";

function HelpHero() {
  return (
    <AuroraBackground>
      <section className="relative overflow-hidden py-24 lg:py-36">

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

                Fundación Vida Dulce

              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl xl:text-7xl">

                Tu ayuda puede

                <br />

                <GradientText>

                  cambiar una vida

                </GradientText>

              </h1>

              <p className="mt-8 max-w-xl text-xl leading-9 text-slate-200">

                Cada donación, cada voluntario y cada gesto solidario permite
                que más personas con diabetes reciban educación, atención,
                acompañamiento y esperanza para vivir mejor.

              </p>

              {/* BOTONES */}

              <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">

                <Link
                  to="/donaciones"
                  className="
                    inline-flex
                    h-16
                    w-56
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-white
                    font-bold
                    text-sky-700
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >
                  Donar Ahora

                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/contacto"
                  className="
                    inline-flex
                    h-16
                    w-56
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/30
                    bg-white/10
                    font-bold
                    text-white
                    backdrop-blur-xl
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/20
                    hover:shadow-xl
                  "
                >
                  Ser Voluntario
                </Link>

              </div>

              {/* Estadísticas */}

              <div className="mt-14 grid grid-cols-3 gap-8">

                <div>

                  <div className="flex items-center gap-2 text-cyan-300">

                    <Heart size={22} />

                    <span className="text-3xl font-black">
                      1500+
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-300">
                    Personas beneficiadas
                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-2 text-cyan-300">

                    <Users size={22} />

                    <span className="text-3xl font-black">
                      350+
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-300">
                    Familias apoyadas
                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-2 text-cyan-300">

                    <HandCoins size={22} />

                    <span className="text-3xl font-black">
                      120+
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-300">
                    Donaciones recibidas
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Imagen */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >

              <MouseParallax>

                <img
                  src={HeroImage}
                  alt="Ayuda Fundación Vida Dulce"
                  className="
                    w-full
                    rounded-[40px]
                    border
                    border-white/20
                    shadow-[0_35px_90px_rgba(0,0,0,.35)]
                  "
                />

              </MouseParallax>

            </motion.div>

          </div>

        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white to-transparent" />

      </section>
    </AuroraBackground>
  );
}

export default HelpHero;