import React from 'react'

function Hero() {
    return (
        <div style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} className='flex relative justify-center items-center h-[80vh] text-center'>
                <div className="max-w-5xl mx-auto rounded-md p-3 absolute top-1/3 right-6  text-white">
                <p className="text-xs uppercase tracking-widest  mb-3">A journal of ideas</p>
                <h1 className="text-4xl font-bold  leading-snug mb-4 " style={{ fontFamily: "Georgia, serif" }}>
                    Writing worth slowing down for.
                </h1>
                <p className=" max-w-xl text-base leading-relaxed">
                    Blog publishes essays on design, technology, and how we live — written by practitioners who think carefully before they type.
                </p>
            </div>
        </div>
    )
}

export default Hero