import { motion } from "framer-motion";
import { Heart, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import AuroraBackground from "../ui/AuroraBackground";
import FloatingParticles from "../ui/FloatingParticles";
import MagneticButton from "../ui/MagneticButton";

import ctaImage from "../../assets/images/programs/program-cta.jpg";

function ProgramCTA() {
  return (
    <AuroraBackground>
      <section className="relative overflow-hidden py-32">

        <FloatingParticles />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* Imagen */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <img
                src={ctaImage}
                alt="Únete a Fundación Vida Dulce"
                className="w-full rounded-[40px] border border-white/20 shadow-[0_35px_90px_rgba(0,0,0,.35)]"
              />

              {/* Tarjeta flotante */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -bottom-8
                  left-8
                  rounded-3xl
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-xl
                  p-6
                  shadow-2xl
                "
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white">

                    <Heart size={30} />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      Transformamos vidas
                    </h3>

                    <p className="text-slate-200">
                      Gracias al apoyo de nuestra comunidad.
                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>

            {/* Texto */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <span className="inline-block rounded-full border border-cyan-300/30 bg-white/10 px-6 py-2 font-semibold text-cyan-200 backdrop-blur-md">
                Súmate al cambio
              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

                Tu apoyo puede cambiar
                <br />

                una vida para siempre.

              </h2>

              <p className="mt-8 max-w-xl text-xl leading-9 text-slate-200">

                Cada voluntario, cada donación y cada persona que comparte
                nuestra misión nos ayuda a llegar a más familias y construir
                una comunidad con mejor calidad de vida.

              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <MagneticButton>

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
                      transition
                      hover:scale-105
                    "
                  >

                    Contáctanos

                    <ArrowRight size={20} />

                  </Link>

                </MagneticButton>

                <MagneticButton>

                  <Link
                    to="/donaciones"
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
                      backdrop-blur-md
                      transition
                      hover:bg-white/20
                    "
                  >

                    <Phone size={20} />

                    Donar Ahora

                  </Link>

                </MagneticButton>

              </div>

            </motion.div>

          </div>

        </div>

      </section>
    </AuroraBackground>
  );
}

export default ProgramCTA;