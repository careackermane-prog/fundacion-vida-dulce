import {
  UserRound,
  Briefcase,
  HeartPulse,
  HandHeart,
} from "lucide-react";

import FadeIn from "../ui/FadeIn";

import mariaImg from "../../assets/images/about/presidenta.jpg";
import carlosImg from "../../assets/images/about/carlos.jpg";
import anaImg from "../../assets/images/about/ana.jpg";
import voluntariosImg from "../../assets/images/about/voluntarios.jpg";

function AboutTeam() {
  const team = [
    {
      name: "María López",
      role: "Presidenta",
      image: mariaImg,
      icon: UserRound,
    },
    {
      name: "Carlos Hernández",
      role: "Coordinador",
      image: carlosImg,
      icon: Briefcase,
    },
    {
      name: "Ana Martínez",
      role: "Nutricionista",
      image: anaImg,
      icon: HeartPulse,
    },
    {
      name: "Equipo de Voluntarios",
      role: "Apoyo Comunitario",
      image: voluntariosImg,
      icon: HandHeart,
    },
  ];

  return (
    <FadeIn delay={0.5}>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Encabezado */}

          <div className="text-center">

            <span className="inline-block bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
              Nuestro Equipo
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-800">
              Personas comprometidas con servir
            </h2>

            <div className="w-24 h-1 bg-sky-600 rounded-full mx-auto mt-6"></div>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              Nuestro equipo está conformado por profesionales y voluntarios
              comprometidos con mejorar la calidad de vida de las personas con
              diabetes y sus familias.
            </p>

          </div>

          {/* Tarjetas */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {team.map((member, index) => {

              const Icon = member.icon;

              return (

                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
                >

                  {/* Imagen */}

                  <div className="overflow-hidden">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                  </div>

                  {/* Información */}

                  <div className="p-8 text-center">

                    <div className="w-16 h-16 mx-auto rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-700 transition-all duration-300">

                      <Icon
                        size={30}
                        className="text-sky-700 group-hover:text-white transition-all duration-300"
                      />

                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-slate-800">
                      {member.name}
                    </h3>

                    <p className="mt-3 text-sky-700 font-semibold">
                      {member.role}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default AboutTeam;