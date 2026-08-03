import { Link } from "react-router-dom";
import {
  Activity,
  Apple,
  Syringe,
  Dumbbell,
  Newspaper,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";

const categories = [
  {
    title: "Metabolismo",
    description:
      "Aprende cómo funciona el metabolismo y su relación con la diabetes.",
    icon: Activity,
    color: "from-cyan-500 to-sky-700",
    link: "/blog/metabolismo",
  },
  {
    title: "Alimentación",
    description:
      "Consejos sobre alimentos recomendados y hábitos saludables.",
    icon: Apple,
    color: "from-emerald-500 to-green-600",
    link: "/blog/alimentos-diabetes",
  },
  {
    title: "Tratamientos",
    description:
      "Información sobre cirugía, insulina, medicamentos y nuevas terapias.",
    icon: Syringe,
    color: "from-indigo-500 to-sky-700",
    link: "/blog/cirugia-diabetes",
  },
  {
    title: "Ejercicio",
    description:
      "Descubre cómo la actividad física ayuda a controlar la glucosa.",
    icon: Dumbbell,
    color: "from-orange-500 to-red-500",
    link: "/blog/ejercicio-diabetes",
  },
  {
    title: "Noticias",
    description:
      "Eventos, campañas y novedades relacionadas con la diabetes.",
    icon: Newspaper,
    color: "from-violet-500 to-fuchsia-600",
    link: "/blog/dia-mundial-diabetes",
  },
  {
    title: "Prevención",
    description:
      "Hábitos para prevenir complicaciones y cuidar tu salud.",
    icon: ShieldCheck,
    color: "from-sky-600 to-cyan-500",
    link: "/blog/control-glucosa",
  },
];

function BlogCategories() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">
          <div className="text-center">
            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Explora el Blog
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Explora por categorías
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Encuentra fácilmente los temas que más te interesan y accede a
              información confiable para cuidar tu salud.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((item, index) => {

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
                    className="rounded-[30px] bg-white p-8 shadow-xl"
                  >

                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                    >
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-6 text-2xl font-black text-slate-800">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>

                    <Link
                      to={item.link}
                      className="mt-8 inline-flex items-center gap-2 font-bold text-sky-700 hover:gap-4 transition-all"
                    >
                      Ver artículos
                      <ArrowRight size={20} />
                    </Link>

                  </motion.div>

                </SpotlightCard>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default BlogCategories;