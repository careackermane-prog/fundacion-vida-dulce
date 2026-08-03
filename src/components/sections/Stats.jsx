import {
  Users,
  HeartHandshake,
  Stethoscope,
  Building2,
} from "lucide-react";

function Stats() {
  const stats = [
    {
      icon: <Users size={42} />,
      number: "1,250+",
      title: "Personas Atendidas",
    },
    {
      icon: <Stethoscope size={42} />,
      number: "75",
      title: "Jornadas Médicas",
    },
    {
      icon: <HeartHandshake size={42} />,
      number: "120",
      title: "Voluntarios",
    },
    {
      icon: <Building2 size={42} />,
      number: "35",
      title: "Comunidades Beneficiadas",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-slate-800">
            Nuestro impacto
          </h2>

          <p className="text-gray-600 mt-4">
            Cada número representa una vida que hemos acompañado con amor y esperanza.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 text-center"
            >

              <div className="flex justify-center text-sky-600 mb-5">
                {item.icon}
              </div>

              <h3 className="text-5xl font-extrabold text-sky-700">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;