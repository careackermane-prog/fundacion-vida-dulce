import { Link } from "react-router-dom";
import { CalendarDays, Clock3, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";

const events = [
  {
    date: "15 MAR",
    title: "Jornada Médica Integral",
    location: "Hospital Escuela, Tegucigalpa",
    time: "8:00 AM - 1:00 PM",
    link: "/contacto",
  },
  {
    date: "28 ABR",
    title: "Charla Educativa sobre Diabetes",
    location: "Centro Cultural, San Pedro Sula",
    time: "2:00 PM - 5:00 PM",
    link: "/contacto",
  },
  {
    date: "12 JUN",
    title: "Caminata por la Salud",
    location: "Parque Central, Danlí",
    time: "7:00 AM",
    link: "/contacto",
  },
];

function EventCalendar() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Fondo decorativo */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-200/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Próximos Eventos
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Participa con nosotros
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Conoce las actividades programadas y acompáñanos en nuestras
              jornadas de educación, prevención y apoyo a la comunidad.
            </p>

          </div>

        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {events.map((event, index) => (

            <Reveal
              key={index}
              animation="up"
              delay={index * 0.15}
            >

              <motion.div
                whileHover={{ y: -10 }}
              >

                <GlassCard className="h-full rounded-[32px] bg-white p-8 shadow-xl">

                  <div className="flex items-center justify-between">

                    <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-700 px-5 py-4 text-center text-white shadow-lg">

                      <CalendarDays
                        size={28}
                        className="mx-auto mb-2"
                      />

                      <span className="text-xl font-black">
                        {event.date}
                      </span>

                    </div>

                  </div>

                  <h3 className="mt-8 text-2xl font-black text-slate-800">
                    {event.title}
                  </h3>

                  <div className="mt-8 space-y-5">

                    <div className="flex items-center gap-3 text-slate-600">

                      <MapPin
                        size={20}
                        className="text-sky-600"
                      />

                      <span>{event.location}</span>

                    </div>

                    <div className="flex items-center gap-3 text-slate-600">

                      <Clock3
                        size={20}
                        className="text-sky-600"
                      />

                      <span>{event.time}</span>

                    </div>

                  </div>

                  {/* BOTÓN FUNCIONAL */}

                  <Link
                    to={event.link}
                    className="
                      mt-10
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-sky-600
                      to-cyan-500
                      px-6
                      py-4
                      font-semibold
                      text-white
                      shadow-lg
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:gap-4
                      hover:shadow-2xl
                    "
                  >
                    Inscribirme

                    <ArrowRight size={20} />
                  </Link>

                </GlassCard>

              </motion.div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}

export default EventCalendar;