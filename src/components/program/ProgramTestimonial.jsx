import { motion } from "framer-motion";
import {
  Quote,
  Star,
} from "lucide-react";

import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";
import SpotlightCard from "../ui/SpotlightCard";

import person1 from "../../assets/images/programs/testimonial1.jpg";
import person2 from "../../assets/images/programs/testimonial2.jpg";
import person3 from "../../assets/images/programs/testimonial3.jpg";

const testimonials = [
  {
    name: "María Hernández",
    role: "Paciente",
    image: person1,
    text:
      "Gracias a los talleres aprendí a controlar mejor mi diabetes. Hoy tengo más confianza para cuidar mi salud y la de mi familia.",
  },
  {
    name: "Carlos Martínez",
    role: "Participante",
    image: person2,
    text:
      "Las jornadas médicas fueron una gran oportunidad para recibir atención y orientación profesional sin costo.",
  },
  {
    name: "Ana López",
    role: "Voluntaria",
    image: person3,
    text:
      "Ser parte de Fundación Vida Dulce me ha permitido ayudar a muchas personas y contribuir a una comunidad más saludable.",
  },
];

function ProgramTestimonial() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">

      {/* Fondo */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">

              Testimonios

            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">

              Historias que inspiran

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">

              Cada experiencia refleja el impacto positivo que nuestros
              programas generan en la vida de las personas y sus familias.

            </p>

          </div>

        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <Reveal
              key={index}
              animation="up"
              delay={index * 0.15}
            >

              <SpotlightCard>

                <GlassCard className="bg-white p-10 h-full">

                  <Quote
                    size={48}
                    className="text-sky-600"
                  />

                  <p className="mt-8 leading-8 text-gray-600 italic">

                    "{item.text}"

                  </p>

                  <div className="mt-8 flex">

                    {[1,2,3,4,5].map((star) => (

                      <Star
                        key={star}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />

                    ))}

                  </div>

                  <div className="mt-10 flex items-center gap-4">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-full object-cover ring-4 ring-sky-100"
                    />

                    <div>

                      <h3 className="text-lg font-bold text-slate-800">

                        {item.name}

                      </h3>

                      <p className="text-sky-700">

                        {item.role}

                      </p>

                    </div>

                  </div>

                </GlassCard>

              </SpotlightCard>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProgramTestimonial;