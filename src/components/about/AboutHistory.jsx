import HistoryImg from "../../assets/images/about/AboutHistory.jpg";
import FadeIn from "../ui/FadeIn";

function AboutHistory() {
  return (
    <FadeIn delay={0.2}>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* Imagen */}

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <img
              src={HistoryImg}
              alt="Historia de Fundación Vida Dulce"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />

          </div>

          {/* Información */}

          <div>

            <span className="bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
              Nuestra Historia
            </span>

            <h2 className="text-5xl font-bold text-slate-800 mt-6">
              Trabajando por una mejor calidad de vida
            </h2>

            <div className="w-24 h-1 bg-sky-600 rounded-full mt-6"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Fundación Vida Dulce nace con el propósito de apoyar a las personas
              que viven con diabetes mediante programas educativos, prevención,
              acompañamiento y orientación para mejorar su bienestar.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nuestro compromiso es generar un impacto positivo en la comunidad,
              promoviendo hábitos saludables, educación continua y acceso a
              información confiable para pacientes y sus familias.
            </p>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default AboutHistory;