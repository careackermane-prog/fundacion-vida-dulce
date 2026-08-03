import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

function HelpImpact() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-5 py-2 text-sky-700 font-semibold">
            <HeartHandshake size={18} />
            Nuestro Impacto
          </div>

          <h2 className="mt-6 text-5xl font-black text-slate-800">
            Cada ayuda cambia una historia
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-8">
            Gracias al apoyo de voluntarios, empresas y personas solidarias,
            Fundación Vida Dulce brinda educación, prevención y acompañamiento
            a cientos de familias hondureñas.
          </p>

        </div>

      </div>
    </section>
  );
}

export default HelpImpact;