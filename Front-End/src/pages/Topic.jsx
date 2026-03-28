import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import { Link } from 'react-router-dom';

const tags = [
  "typography", "remote work", "css", "productivity", "systems thinking",
  "side projects", "burnout", "open source", "minimalism", "APIs",
  "storytelling", "feedback", "career", "focus", "tools",
];

function Topic() {

  const { blogData } = useContext(UserContext)
  if (!blogData) {
    return <p>Loading...</p>
  }
  return (

    <div>
      <section className="bg-stone-50 border-b border-stone-200 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Browse by topic</p>
          <h1 className="text-4xl font-bold text-stone-900 leading-snug mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Find what you're looking for.
          </h1>
          <p className="text-stone-500 max-w-lg text-base leading-relaxed">
            Every essay at blog lives under one of these topics. Pick what interests you and go deep.
          </p>
        </div>
      </section>
      <section className={"border rounded-lg p-6 flex flex-col justify-between my-6"}>
        {blogData.map((i, index) => (
          <Link to={`/topic/${i.id}`} className='border-y border-stone-200 p-2 active:bg-gray-200 hover:bg-amber-50 transition-transform' key={index}>
            <div className="flex items-center justify-between mb-4">
              <span className={"text-xs font-semibold  py-1 rounded"}>
                {i.title}
              </span>
              <span className="text-xs text-stone-400">{i.category} essays</span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mb-5">{i.description}</p>
          </Link>
        ))}
      </section>
      <section className="mt-14">
        <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-5">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <a
              key={tag}
              href="#"
              className="text-xs text-stone-600 bg-white border border-stone-200 px-3 py-1.5 rounded hover:border-stone-400 hover:text-stone-900 transition-colors"
            >
              #{tag}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Topic