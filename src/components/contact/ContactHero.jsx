import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PhoneCall, ArrowRight, Mail } from "lucide-react";

import AuroraBackground from "../ui/AuroraBackground";
import FloatingParticles from "../ui/FloatingParticles";
import MouseParallax from "../ui/MouseParallax";
import GradientText from "../ui/GradientText";

import HeroImage from "../../assets/images/contact/contact-hero.jpg";

function ContactHero() {
  return (
    <AuroraBackground>

      <section className="relative overflow-hidden py-24 lg:py-32">

        <FloatingParticles />

        <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-6 py-2 font-semibold text-cyan-200 backdrop-blur-xl">

                <PhoneCall size={18} />

                Contáctanos

              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl xl:text-7xl">

                Estamos para

                <br />

                <GradientText>

                  ayudarte

                </GradientText>

              </h1>

              <p className="mt-8 max-w-xl text-xl leading-9 text-slate-200">

                Si tienes preguntas sobre nuestros programas, campañas,
                jornadas médicas o deseas apoyar a Fundación Vida Dulce,
                estaremos encantados de atenderte.

              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  to="/ayudar"
                  className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-sky-700 shadow-xl transition-all duration-300 hover:-translate-y-1"
                >

                  Quiero ayudar

                  <ArrowRight size={20} />

                </Link>

                <a
                  href="mailto:contacto@fundacionvidadulce.org"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
                >

                  <Mail size={20} />

                  Enviar correo

                </a>

              </div>

            </motion.div>

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
                  alt="Contacto Fundación Vida Dulce"
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

export default ContactHero;