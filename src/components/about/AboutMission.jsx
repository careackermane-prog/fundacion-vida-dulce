import {
  Target,
  Eye,
  Heart,
  HandHeart,
  ShieldCheck,
  Users,
} from "lucide-react";

import FadeIn from "../ui/FadeIn";

function AboutMission() {
  return (
    <FadeIn delay={0.3}>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Encabezado */}

          <div className="text-center">

            <span className="inline-block bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
              Nuestra Esencia
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-800">
              Misión, Visión y Valores
            </h2>

            <div className="w-24 h-1 bg-sky-600 rounded-full mx-auto mt-6"></div>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
              Nuestra fundación trabaja cada día para brindar educación,
              prevención y acompañamiento a las personas con diabetes,
              fortaleciendo el bienestar de las familias y promoviendo una mejor
              calidad de vida.
            </p>

          </div>

          {/* Tarjetas */}

          <div className="grid lg:grid-cols-3 gap-8 mt-20">

            {/* MISIÓN */}

            <div className="group bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

              <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-700 transition-all duration-300">

                <Target
                  size={42}
                  className="text-sky-700 group-hover:text-white transition-all duration-300"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-800">
                Misión
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                Brindar educación, prevención y acompañamiento integral a las
                personas con diabetes, promoviendo hábitos saludables y
                fortaleciendo el bienestar de las familias.
              </p>

            </div>

            {/* VISIÓN */}

            <div className="group bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

              <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-700 transition-all duration-300">

                <Eye
                  size={42}
                  className="text-sky-700 group-hover:text-white transition-all duration-300"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-800">
                Visión
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                Ser una organización referente en Honduras por su compromiso
                con la prevención, educación y atención integral de las
                personas que viven con diabetes.
              </p>

            </div>

            {/* VALORES */}

            <div className="group bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

              <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-700 transition-all duration-300">

                <Heart
                  size={42}
                  className="text-sky-700 group-hover:text-white transition-all duration-300"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-800">
                Valores
              </h3>

              <div className="mt-6 space-y-5">

                <div className="flex items-center gap-3">

                  <HandHeart
                    size={22}
                    className="text-sky-700"
                  />

                  <span className="text-gray-600">
                    Solidaridad
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    size={22}
                    className="text-sky-700"
                  />

                  <span className="text-gray-600">
                    Compromiso
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Heart
                    size={22}
                    className="text-sky-700"
                  />

                  <span className="text-gray-600">
                    Empatía
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Users
                    size={22}
                    className="text-sky-700"
                  />

                  <span className="text-gray-600">
                    Respeto
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default AboutMission;