import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

function SingleBlog() {
    const { blogData } = useContext(UserContext)
    const { id } = useParams()
    if (!blogData || blogData.length === 0) {
        return <p>Loading...</p>
    }

    const data = blogData.find((i) => Number(i.id) === Number(id))


    if (!data) {
        return <p>Loading...</p>
    }

    return (
        <div>

            {console.log(data)}
            <section className="max-w-3xl mx-auto px-6 pt-8 pb-2">
                <p className="text-xs text-stone-400">
                    <Link to="/" className="hover:text-stone-700 transition-colors">Home</Link>
                    <span className="mx-2">›</span>
                    <Link to="/topic" className="hover:text-stone-700 transition-colors">Topic</Link>
                    <span className="mx-2">›</span>
                    <span className="text-stone-500">{data.title}</span>
                </p>
            </section>

            <section className="max-w-3xl mx-auto px-6 mb-10">
                <img
                    src={data.imagelink}
                    alt={data.title}
                    className="w-full h-72 object-cover rounded-lg border border-stone-200"
                />
            </section>

            <section className="max-w-3xl mx-auto px-6 mb-10">
                {data.blogcontent.map((block, index) => {
                    if (block.type === "heading") {
                        return (
                            <h2
                                key={index}
                                className="text-xl font-bold text-stone-900 mt-8 mb-3"
                                style={{ fontFamily: "Georgia, serif" }}
                            >
                                {block.text}
                            </h2>
                        );
                    }
                    if (block.type === "quote") {
                        return (
                            <blockquote
                                key={index}
                                className="border-l-4 border-amber-400 pl-5 py-1 my-6 text-stone-600 italic text-base leading-relaxed bg-amber-50 pr-4 rounded-r"
                            >
                                {block.text}
                            </blockquote>
                        );
                    }
                    return (
                        <p key={index} className="text-stone-600 text-base leading-relaxed mb-4">
                            {block.text}
                        </p>
                    );
                })}
            </section>


            {/* Realted Product */}

            <section className="max-w-3xl mx-auto">
                <h2 className="text-xs uppercase text-center tracking-widest text-stone-400 mb-5">More in Design</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
                    {blogData.slice(2, 8).map((i) => (
                        <Link
                            key={i.title}
                            to={`/topic/${i.id}`}
                            className="bg-white border border-stone-200 rounded-lg p-5 hover:border-stone-400 transition-colors block"
                        >
                            <span className={"text-xs font-semibold px-2 py-0.5 rounded "}>
                                {i.category}
                            </span>
                            <p
                                className="text-sm font-bold text-stone-900 mt-3 mb-3 leading-snug"
                                style={{ fontFamily: "Georgia, serif" }}
                            >
                                {i.title}
                            </p>
                            <p className="text-xs text-stone-400">{i.date} · {i.readTime}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default SingleBlog