import { CheckCircle2 } from "lucide-react";
import logo from "../../assets/logo/logo.png";

function Mission() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Logo */}

          <div className="flex justify-center">

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100 min-h-[520px] flex items-center justify-center">

              <img
                src={logo}
                alt="Fundación Vida Dulce"
                className="w-[380px] mx-auto transition-transform duration-500 hover:scale-105"
              />

            </div>

          </div>

          {/* Texto */}

          <div>

            <span className="inline-block bg-sky-100 text-sky-700 font-semibold px-5 py-2 rounded-full">
              Nuestra Misión
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-800 leading-tight">

              Transformamos vidas mediante educación, prevención y esperanza.

            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">

              En Fundación Vida Dulce trabajamos para transformar vidas mediante
              la educación, la prevención y el acompañamiento integral a
              personas que viven con diabetes. Nuestro compromiso es brindar
              esperanza, apoyo y herramientas que permitan construir un futuro
              más saludable para cada familia.

            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-600" />
                <span>Educación para pacientes y sus familias.</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-600" />
                <span>Promoción de hábitos de vida saludables.</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-600" />
                <span>Jornadas médicas y campañas de prevención.</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-600" />
                <span>Apoyo comunitario y trabajo voluntario.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Mission;