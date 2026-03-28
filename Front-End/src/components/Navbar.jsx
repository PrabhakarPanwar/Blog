import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="border-b border-stone-200 bg-white">
            <div className=" px-6 py-4 flex items-center justify-between">
                <span className="text-xl font-bold tracking-tight text-stone-900" style={{ fontFamily: "Georgia, serif" }}>
                    Blog
                </span>
                <div className="flex items-center gap-6 text-sm text-stone-500">
                    <NavLink to="/" className="hover:text-stone-900 transition-colors">Home</NavLink>
                    <NavLink to="/topic" className="hover:text-stone-900 transition-colors">Topics</NavLink>
                    <NavLink to="/contact" className="hover:text-stone-900 transition-colors">Contact us</NavLink>
                    <NavLink to=""
                        className="bg-stone-900 text-white px-4 py-1.5 rounded text-xs font-medium hover:bg-stone-700 transition-colors"
                    >
                        Subscribe
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar