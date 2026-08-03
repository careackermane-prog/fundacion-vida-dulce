import { useParams, Link } from "react-router-dom";

import programs from "../../data/programs";

import ProgramHero from "../../components/program/ProgramHero";
import ProgramInfo from "../../components/program/ProgramInfo";
import ProgramObjectives from "../../components/program/ProgramObjectives";
import ProgramBenefits from "../../components/program/ProgramBenefits";
import ProgramGallery from "../../components/program/ProgramGallery";
import ProgramTestimonial from "../../components/program/ProgramTestimonial";
import ProgramCTA from "../../components/program/ProgramCTA";

function ProgramDetail() {
  const { id } = useParams();

  const program = programs.find((item) => item.id === id);

  if (!program) {
    return (
      <section className="py-32 text-center">
        <h1 className="text-4xl font-bold text-red-600">
          Programa no encontrado
        </h1>

        <Link
          to="/programas"
          className="mt-8 inline-block bg-sky-700 text-white px-6 py-3 rounded-xl hover:bg-sky-800 transition"
        >
          Volver a Programas
        </Link>
      </section>
    );
  }

  return (
    <main>
      <ProgramHero program={program} />

      <ProgramInfo program={program} />

      <ProgramObjectives program={program} />

      <ProgramBenefits program={program} />

      <ProgramGallery program={program} />

      <ProgramTestimonial program={program} />

      <ProgramCTA program={program} />
    </main>
  );
}

export default ProgramDetail;