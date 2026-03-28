import React from 'react'

function Footer() {
    return (
        <footer className="border-t border-stone-200 mt-16 py-8 px-6">
            <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-stone-400">
                <span style={{ fontFamily: "Georgia, serif" }} className="font-semibold text-stone-600">
                    Blog
                </span>
                <div className="flex gap-5">
                    <a href="#" className="hover:text-stone-700 transition-colors">Home</a>
                    <a href="#" className="hover:text-stone-700 transition-colors">Topic</a>
                    <a href="#" className="hover:text-stone-700 transition-colors">Contact Us</a>
                </div>
                <span>© 2026 Blog</span>
            </div>
        </footer>
    )
}

export default Footer