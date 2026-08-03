import programs from "../../data/programs";
import ProgramCard from "../cards/ProgramCard";

function ProgramsSection() {
  return (
    <section className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
            Nuestros Programas
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            Cambiando vidas cada día
          </h2>

          <div className="w-24 h-1 bg-sky-600 rounded-full mx-auto mt-5"></div>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Desarrollamos programas enfocados en la prevención,
            educación y atención integral para personas con diabetes
            y sus familias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProgramsSection;