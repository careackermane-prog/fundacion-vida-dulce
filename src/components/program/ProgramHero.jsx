import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/programs/programs-hero.jpg";

function ProgramHero() {
  return (
    <section className="bg-sky-800 py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <h1 className="text-6xl font-black text-white">
            Programas que
            <br />
            <span className="text-cyan-300">
              transforman vidas
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-200">
            Cada uno de nuestros programas está diseñado para brindar
            educación, prevención y acompañamiento integral.
          </p>

          <Link
            to="/contacto"
            className="inline-block mt-10 rounded-xl bg-white px-8 py-4 font-bold text-sky-700"
          >
            Solicitar Información
          </Link>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="Programas"
            className="rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
}

export default ProgramHero;