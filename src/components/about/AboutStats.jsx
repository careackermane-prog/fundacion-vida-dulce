import {
  HeartHandshake,
  Users,
  Stethoscope,
  CalendarDays,
} from "lucide-react";

import FadeIn from "../ui/FadeIn";

function AboutStats() {
  const stats = [
    {
      icon: HeartHandshake,
      number: "+1,500",
      text: "Personas beneficiadas",
    },
    {
      icon: Users,
      number: "+20",
      text: "Voluntarios activos",
    },
    {
      icon: Stethoscope,
      number: "+15",
      text: "Jornadas médicas",
    },
    {
      icon: CalendarDays,
      number: "+8",
      text: "Años de servicio",
    },
  ];

  return (
    <FadeIn delay={0.4}>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Encabezado */}

          <div className="text-center">

            <span className="inline-block bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
              Nuestro Impacto
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-800">
              Cambiando vidas cada día
            </h2>

            <div className="w-24 h-1 bg-sky-600 rounded-full mx-auto mt-6"></div>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
              Gracias al esfuerzo de nuestros voluntarios, aliados y donantes,
              hemos logrado transformar la vida de cientos de personas mediante
              programas de educación, prevención y acompañamiento.
            </p>

          </div>

          {/* Tarjetas */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {stats.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group bg-slate-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center"
                >

                  <div className="w-20 h-20 mx-auto rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-700 transition-all duration-300">

                    <Icon
                      size={40}
                      className="text-sky-700 group-hover:text-white transition-all duration-300"
                    />

                  </div>

                  <h3 className="mt-8 text-5xl font-bold text-sky-700">
                    {item.number}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {item.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default AboutStats;