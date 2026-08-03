import { motion } from "framer-motion";
import {
  HeartHandshake,
  Users,
  Stethoscope,
  GraduationCap,
} from "lucide-react";

const impact = [
  {
    icon: HeartHandshake,
    value: 1500,
    suffix: "+",
    title: "Personas Beneficiadas",
    description:
      "Pacientes que han recibido apoyo, educación y acompañamiento.",
    color: "from-cyan-500 to-sky-600",
  },
  {
    icon: Users,
    value: 350,
    suffix: "+",
    title: "Familias Atendidas",
    description:
      "Familias fortalecidas mediante nuestros programas comunitarios.",
    color: "from-blue-600 to-indigo-700",
  },
  {
    icon: Stethoscope,
    value: 120,
    suffix: "+",
    title: "Jornadas Médicas",
    description:
      "Brigadas médicas realizadas en distintas comunidades.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: GraduationCap,
    value: 500,
    suffix: "+",
    title: "Personas Capacitadas",
    description:
      "Participantes en talleres de educación en diabetes.",
    color: "from-indigo-600 to-sky-700",
  },
];

function ProgramImpact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-32">
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, 60, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-cyan-500/20 px-6 py-2 font-semibold text-cyan-300">
            Nuestro Impacto
          </span>

          <h2 className="mt-6 text-5xl font-black text-white lg:text-6xl">
            Juntos hacemos la diferencia
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Cada cifra representa una historia de esperanza,
            aprendizaje y una oportunidad para vivir mejor.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-10 lg:grid-cols-2">
          {impact.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-20 -top-32 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>
                </div>

                <div className="relative">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} shadow-xl`}
                  >
                    <Icon size={38} className="text-white" />
                  </div>

                  <h3 className="mt-8 text-6xl font-black text-white">
                    {item.value}
                    {item.suffix}
                  </h3>

                  <h4 className="mt-4 text-2xl font-bold text-cyan-300">
                    {item.title}
                  </h4>

                  <p className="mt-5 leading-8 text-slate-300">
                    {item.description}
                  </p>
                </div>

                <div className="mt-10">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2 }}
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProgramImpact;