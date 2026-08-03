import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  ArrowRight,
  Heart,
} from "lucide-react";

import AuroraBackground from "../ui/AuroraBackground";
import FloatingParticles from "../ui/FloatingParticles";
import GradientText from "../ui/GradientText";
import MagneticButton from "../ui/MagneticButton";

function HelpCTA() {
  return (
    <AuroraBackground>

      <section className="relative overflow-hidden py-32">

        <FloatingParticles />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="
              rounded-[45px]
              border
              border-white/15
              bg-white/10
              backdrop-blur-2xl
              px-8
              py-16
              text-center
              shadow-[0_40px_100px_rgba(0,0,0,.35)]
              lg:px-20
            "
          >

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-700 shadow-2xl">

              <HeartHandshake
                size={46}
                className="text-white"
              />

            </div>

            <h2 className="mt-10 text-4xl font-black leading-tight text-white md:text-6xl">

              Tu apoyo puede

              <br />

              <GradientText>

                transformar una vida

              </GradientText>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-200">

              Cada donación representa esperanza para una persona con diabetes.
              Con tu ayuda podremos llegar a más familias, desarrollar nuevos
              programas y continuar promoviendo una vida saludable.

            </p>

            {/* Botones */}

            <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

              <MagneticButton>

                <Link
                  to="/donaciones"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-white
                    px-10
                    py-5
                    text-lg
                    font-bold
                    text-sky-700
                    shadow-xl
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >

                  Donar Ahora

                  <ArrowRight size={22} />

                </Link>

              </MagneticButton>

              <MagneticButton>

                <Link
                  to="/contacto"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/30
                    bg-white/10
                    px-10
                    py-5
                    text-lg
                    font-bold
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:bg-white/20
                  "
                >

                  Ser Voluntario

                </Link>

              </MagneticButton>

            </div>

            {/* Estadísticas */}

            <div className="mt-20 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">

              <div>

                <Heart className="mx-auto text-cyan-300" size={32} />

                <h3 className="mt-4 text-4xl font-black text-white">

                  1,500+

                </h3>

                <p className="mt-2 text-slate-300">

                  Personas beneficiadas

                </p>

              </div>

              <div>

                <Heart className="mx-auto text-cyan-300" size={32} />

                <h3 className="mt-4 text-4xl font-black text-white">

                  350+

                </h3>

                <p className="mt-2 text-slate-300">

                  Familias apoyadas

                </p>

              </div>

              <div>

                <Heart className="mx-auto text-cyan-300" size={32} />

                <h3 className="mt-4 text-4xl font-black text-white">

                  120+

                </h3>

                <p className="mt-2 text-slate-300">

                  Jornadas realizadas

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </AuroraBackground>
  );
}

export default HelpCTA;