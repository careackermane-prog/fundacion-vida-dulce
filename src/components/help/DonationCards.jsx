import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Calendar,
  Pill,
  Users,
  ArrowRight,
} from "lucide-react";

import Tilt from "react-parallax-tilt";

import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";

import OnceImg from "../../assets/images/help/donation-once.jpg";
import MonthlyImg from "../../assets/images/help/donation-monthly.jpg";
import MedicineImg from "../../assets/images/help/donation-medicine.jpg";
import PatientImg from "../../assets/images/help/donation-patient.jpg";

const donations = [
  {
    title: "Donación Única",
    description:
      "Realiza un aporte puntual para apoyar jornadas médicas, educación y prevención.",
    image: OnceImg,
    icon: Heart,
    color: "from-cyan-500 to-sky-700",
    link: "/donaciones",
  },
  {
    title: "Donación Mensual",
    description:
      "Conviértete en un aliado permanente y ayuda a sostener nuestros programas.",
    image: MonthlyImg,
    icon: Calendar,
    color: "from-blue-600 to-indigo-700",
    link: "/donaciones",
  },
  {
    title: "Donar Medicamentos",
    description:
      "Apoya con insulina, glucómetros, tiras reactivas e insumos médicos.",
    image: MedicineImg,
    icon: Pill,
    color: "from-sky-500 to-cyan-600",
    link: "/contacto",
  },
  {
    title: "Patrocinar un Paciente",
    description:
      "Contribuye para que una persona reciba atención, educación y seguimiento.",
    image: PatientImg,
    icon: Users,
    color: "from-indigo-600 to-sky-700",
    link: "/contacto",
  },
];

function DonationCards() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white py-32">

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-200/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Formas de Donar
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-800 md:text-5xl">
              Tú decides cómo ayudar
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Cada aporte representa esperanza para quienes viven con diabetes.
              Elige la forma de colaborar que mejor se adapte a ti.
            </p>

          </div>

        </Reveal>

        <div className="mt-20 grid items-stretch gap-10 md:grid-cols-2 xl:grid-cols-4">

          {donations.map((item, index) => {

            const Icon = item.icon;

            return (

              <Reveal
                key={index}
                animation="up"
                delay={index * 0.15}
                className="h-full"
              >

                <Tilt
                  glareEnable
                  glareMaxOpacity={0.12}
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  className="h-full"
                >

                  <SpotlightCard className="h-full">

                    <motion.div
                      whileHover={{ y: -10 }}
                      className="group flex h-full flex-col overflow-hidden rounded-[35px] bg-white shadow-xl"
                    >

                      <div className="h-64 overflow-hidden">

                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                        />

                      </div>

                      <div className="flex flex-1 flex-col p-8">

                        <div
                          className={`
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-gradient-to-br
                            ${item.color}
                            text-white
                            shadow-xl
                          `}
                        >

                          <Icon size={30} />

                        </div>

                        <h3 className="mt-6 text-2xl font-black text-slate-800">
                          {item.title}
                        </h3>

                        <p className="mt-5 flex-1 leading-8 text-gray-600">
                          {item.description}
                        </p>

                        <Link
                          to={item.link}
                          className="
                            mt-8
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-gradient-to-r
                            from-sky-600
                            to-cyan-500
                            px-6
                            py-3
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:gap-4
                          "
                        >

                          Quiero ayudar

                          <ArrowRight size={20} />

                        </Link>

                      </div>

                    </motion.div>

                  </SpotlightCard>

                </Tilt>

              </Reveal>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default DonationCards;