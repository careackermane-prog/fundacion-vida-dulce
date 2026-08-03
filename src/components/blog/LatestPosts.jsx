import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock3,
  ArrowRight,
} from "lucide-react";

import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";

import blogPosts from "../../data/blogPosts";

function LatestPosts() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <Reveal animation="up">

          <div className="text-center">

            <span className="rounded-full bg-sky-100 px-6 py-2 font-semibold text-sky-700">
              Últimos artículos
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-800">
              Sigue aprendiendo
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Explora contenido educativo sobre diabetes, alimentación,
              prevención y bienestar para mejorar tu calidad de vida.
            </p>

          </div>

        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {blogPosts.map((post, index) => (

            <Reveal
              key={post.slug}
              animation="up"
              delay={index * 0.1}
            >

              <SpotlightCard>

                <motion.article
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-[32px] bg-white shadow-xl"
                >

                  <div className="overflow-hidden">

                    <img
                      src={post.image}
                      alt={post.title}
                      className="
                        h-64
                        w-full
                        object-cover
                        transition-all
                        duration-700
                        hover:scale-110
                      "
                    />

                  </div>

                  <div className="p-8">

                    <div className="flex items-center justify-between text-sm">

                      <span className="rounded-full bg-cyan-100 px-4 py-1 font-semibold text-cyan-700">

                        {post.category}

                      </span>

                      <span className="flex items-center gap-1 text-slate-500">

                        <Clock3 size={15} />

                        {post.readTime}

                      </span>

                    </div>

                    <h3 className="mt-6 text-2xl font-black leading-tight text-slate-800">

                      {post.title}

                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">

                      {post.content[0].text.substring(0, 140)}...

                    </p>

                    <div className="mt-8 flex items-center justify-between">

                      <span className="flex items-center gap-2 text-slate-500">

                        <Calendar size={16} />

                        {post.date}

                      </span>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          font-bold
                          text-sky-700
                          transition-all
                          duration-300
                          hover:gap-4
                        "
                      >

                        Leer artículo

                        <ArrowRight size={18} />

                      </Link>

                    </div>

                  </div>

                </motion.article>

              </SpotlightCard>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}

export default LatestPosts;