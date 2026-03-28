import React from 'react'

function Newsletter() {
    return (
        <div>
            <div className="bg-stone-900 px-8 py-10 text-center rounded-md">
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Stay in the loop</p>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Georgia, serif" }}>
                    New essays, every week.
                </h3>
                <p className="text-stone-400 text-sm mb-6">
                    No noise. Just thoughtful writing delivered to your inbox.
                </p>
                <div className="flex gap-2 max-w-sm mx-auto">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 bg-stone-800 text-white placeholder-stone-500 text-sm px-4 py-2 rounded border border-stone-700 "
                    />
                    <button className="bg-white active:scale-95  text-stone-900 text-sm font-semibold px-4 py-2 rounded-md hover:bg-stone-100">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter