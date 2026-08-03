function ProgramInfo({ program }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Imagen */}
          <div className="relative">

            <img
              src={program.image}
              alt={program.title}
              className="w-full rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border px-8 py-6">

              <p className="text-4xl font-bold text-sky-700">
                {program.stats.number}
              </p>

              <p className="text-gray-500">
                {program.stats.text}
              </p>

            </div>

          </div>

          {/* Información */}

          <div>

            <span className="inline-block bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
              Programa Social
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-800">
              ¿En qué consiste?
            </h2>

            <div className="w-24 h-1 bg-sky-600 rounded-full mt-5"></div>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              {program.description}
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              {program.features.map((feature, index) => (

                <div
                  key={index}
                  className="bg-sky-50 rounded-2xl p-6 hover:bg-sky-100 transition duration-300"
                >

                  <h3 className="font-bold text-sky-700">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    {feature.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProgramInfo;