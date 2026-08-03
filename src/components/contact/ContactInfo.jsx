import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";

const info = [
  {
    icon: MapPin,
    title: "Dirección",
    value: "Danlí, El Paraíso, Honduras",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "+504 0000-0000",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Mail,
    title: "Correo electrónico",
    value: "contacto@fundacionvidadulce.org",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: Clock3,
    title: "Horario",
    value: "Lunes a Viernes • 8:00 AM - 5:00 PM",
    color: "from-orange-500 to-red-500",
  },
];

function ContactInfo() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">
          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Información de contacto
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Estamos para ayudarte
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Ponte en contacto con Fundación Vida Dulce por cualquiera de nuestros canales.
            </p>

          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {info.map((item, index) => {

            const Icon = item.icon;

            return (

              <Reveal
                key={index}
                animation="up"
                delay={index * 0.1}
              >

                <SpotlightCard>

                  <motion.div
                    whileHover={{ y: -8 }}
                    className="rounded-[30px] bg-white p-8 text-center shadow-xl"
                  >

                    <div
                      className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                    >
                      <Icon size={34} />
                    </div>

                    <h3 className="mt-6 text-2xl font-black text-slate-800">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.value}
                    </p>

                  </motion.div>

                </SpotlightCard>

              </Reveal>

            );

          })}

        </div>

        {/* Redes Sociales */}

        <div className="mt-20">

          <h3 className="text-center text-2xl font-black text-slate-800">
            Síguenos en nuestras redes sociales
          </h3>

          <div className="mt-8 flex justify-center gap-6">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:text-white"
            >
              <FaFacebookF size={26} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-pink-600 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-pink-600 hover:text-white"
            >
              <FaInstagram size={26} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-red-600 hover:text-white"
            >
              <FaYoutube size={26} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactInfo;