import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ProgramCard({ program }) {
  const Icon = program.icon;

  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 flex flex-col">

      <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-700 flex items-center justify-center mb-6">
        <Icon
          size={42}
          className="text-white transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="text-2xl font-bold text-slate-800">
        {program.title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7 flex-grow">
        {program.shortDescription}
      </p>

      <Link
        to={program.link}
        className="mt-8 bg-sky-700 hover:bg-sky-800 text-white px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 w-fit"
      >
        Conocer más

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

    </div>
  );
}

export default ProgramCard;