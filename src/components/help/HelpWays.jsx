import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  Users,
  Pill,
  Building2,
  ArrowRight,
} from "lucide-react";

import Tilt from "react-parallax-tilt";

import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";

import DonationImg from "../../assets/images/help/help-donation.jpg";
import VolunteerImg from "../../assets/images/help/help-volunteer.jpg";
import MedicineImg from "../../assets/images/help/help-medicine.jpg";
import CompanyImg from "../../assets/images/help/help-company.jpg";

const ways = [
  {
    title: "Donaciones",
    description:
      "Con tu aporte económico ayudas a financiar jornadas médicas, educación y programas de prevención.",
    image: DonationImg,
    icon: HeartHandshake,
    link: "/donaciones",
  },
  {
    title: "Voluntariado",
    description:
      "Comparte tu tiempo y habilidades participando en actividades comunitarias y eventos solidarios.",
    image: VolunteerImg,
    icon: Users,
    link: "/contacto",
  },
  {
    title: "Donación de Insumos",
    description:
      "Puedes donar medicamentos, glucómetros, tiras reactivas y otros recursos necesarios.",
    image: MedicineImg,
    icon: Pill,
    link: "/contacto",
  },
  {
    title: "Empresas Aliadas",
    description:
      "Invitamos a empresas y organizaciones a convertirse en patrocinadores de nuestros programas.",
    image: CompanyImg,
    icon: Building2,
    link: "/contacto",
  },
];

function HelpWays() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white py-28">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-200/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Formas de Ayudar
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Hay muchas maneras de cambiar una vida
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">
              Cada acción cuenta. Descubre cómo puedes unirte a nuestra misión
              y contribuir al bienestar de las personas con diabetes.
            </p>

          </div>

        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">

          {ways.map((item, index) => {

            const Icon = item.icon;

            return (

              <Reveal
                key={index}
                animation="up"
                delay={index * 0.15}
              >

                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  glareEnable
                  glareMaxOpacity={0.12}
                >

                  <SpotlightCard>

                    <div className="group overflow-hidden rounded-[35px] bg-white shadow-xl">

                      <div className="overflow-hidden">

                        <img
                          src={item.image}
                          alt={item.title}
                          className="
                            h-64
                            w-full
                            object-cover
                            transition-all
                            duration-700
                            group-hover:scale-110
                          "
                        />

                      </div>

                      <div className="p-8">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-white shadow-lg">

                          <Icon size={30} />

                        </div>

                        <h3 className="mt-6 text-2xl font-black text-slate-800">
                          {item.title}
                        </h3>

                        <p className="mt-5 leading-8 text-gray-600">
                          {item.description}
                        </p>

                        <Link
                          to={item.link}
                          className="
                            mt-8
                            inline-flex
                            items-center
                            gap-2
                            font-bold
                            text-sky-700
                            transition-all
                            duration-300
                            hover:gap-4
                          "
                        >
                          Más información
                          <ArrowRight size={20} />
                        </Link>

                      </div>

                    </div>

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

export default HelpWays;