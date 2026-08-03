import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "María Gómez",
      role: "Paciente",
      comment:
        "Gracias a Fundación Vida Dulce aprendí a controlar mi diabetes y mejorar mi alimentación. Hoy tengo una vida más saludable.",
    },
    {
      name: "José Hernández",
      role: "Padre de familia",
      comment:
        "Mi hija recibió educación sobre diabetes y ahora toda nuestra familia sabe cómo apoyarla diariamente.",
    },
    {
      name: "Ana Martínez",
      role: "Voluntaria",
      comment:
        "Ser parte de esta fundación me ha permitido ayudar a muchas personas y contribuir al bienestar de mi comunidad.",
    },
  ];

  return (
    <section className="py-24 bg-sky-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-slate-800">
            Historias que inspiran
          </h2>

          <p className="mt-4 text-gray-600">
            Cada historia refleja el impacto positivo de nuestro trabajo.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8"
            >

              <div className="flex gap-1 text-yellow-400 mb-5">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>

              <p className="text-gray-600 italic leading-7">
                "{item.comment}"
              </p>

              <div className="mt-8">

                <h4 className="font-bold text-slate-800">
                  {item.name}
                </h4>

                <span className="text-sky-700">
                  {item.role}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;