import { useParams, Link } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  User,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

import blogPosts from "../data/blogPosts";

function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="py-32 text-center">
        <h1 className="text-5xl font-black text-slate-800">
          Artículo no encontrado
        </h1>

        <Link
          to="/blog"
          className="mt-8 inline-block rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white"
        >
          Volver al Blog
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-20">

      <div className="mx-auto max-w-5xl px-6">

        <Link
          to="/blog"
          className="mb-10 inline-flex items-center gap-2 font-semibold text-sky-700 hover:text-sky-900"
        >
          <ArrowLeft size={20} />
          Volver al Blog
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="h-[450px] w-full rounded-[35px] object-cover shadow-2xl"
        />

        <div className="mt-10">

          <span className="rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">
            {post.category}
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-slate-800">
            {post.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-8 text-slate-500">

            <div className="flex items-center gap-2">
              <CalendarDays size={20} />
              {post.date}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={20} />
              {post.readTime}
            </div>

            <div className="flex items-center gap-2">
              <User size={20} />
              {post.author}
            </div>

          </div>

        </div>

        <article className="prose prose-lg mt-16 max-w-none">

          {post.content.map((section, index) => (
            <div key={index} className="mb-12">

              <h2 className="mb-4 text-3xl font-black text-slate-800">
                {section.heading}
              </h2>

              <p className="text-lg leading-9 text-slate-700">
                {section.text}
              </p>

            </div>
          ))}

        </article>

        <div className="mt-20 rounded-[30px] bg-cyan-50 p-10">

          <h3 className="text-3xl font-black text-slate-800">
            Recomendaciones
          </h3>

          <div className="mt-8 space-y-5">

            {post.tips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  className="mt-1 text-cyan-600"
                  size={22}
                />

                <span className="text-lg text-slate-700">
                  {tip}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );


  
}

export default BlogPost;