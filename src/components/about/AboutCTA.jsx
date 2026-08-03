import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-sky-700 to-blue-900 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Tú también puedes transformar vidas
        </h2>

        <p className="mt-8 text-xl text-sky-100">
          Cada aporte, voluntariado o colaboración nos ayuda a seguir llevando
          esperanza y bienestar a quienes más lo necesitan.
        </p>

        <div className="mt-10">

          <Link
            to="/ayudar"
            className="inline-block bg-white text-sky-700 px-10 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            Quiero Ayudar
          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutCTA;