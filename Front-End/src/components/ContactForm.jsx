import React from 'react'

const contactReasons = [
    "Press & media inquiry",
    "Partnership or sponsorship",
    "General feedback",
    "Something else",
];


function ContactForm() {
    function sendData() {
        console.log("Hi")
    }
    return (
        <div className="my-3">

            <div className="bg-white border border-stone-200 rounded-lg p-8">
                <h2
                    className="text-lg font-bold text-stone-900 mb-6"
                    style={{ fontFamily: "Georgia, serif" }}
                >
                    Send us a message
                </h2>

                <div className="flex flex-col gap-5">
                    {/* Name row */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="w-full border border-stone-200 rounded px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-500 bg-stone-50"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="surname"
                                className="w-full border border-stone-200 rounded px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-500 bg-stone-50"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full border border-stone-200 rounded px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-500 bg-stone-50"
                        />
                    </div>

                    {/* Reason */}
                    <div>
                        <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                            Reason for reaching out
                        </label>
                        <select className="w-full border border-stone-200 rounded px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-stone-500 bg-stone-50">
                            <option value="" disabled selected>Select a reason…</option>
                            {contactReasons.map((r) => (
                                <option key={r} value={r}>{r}</option>
                            ))}
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                            Your Message
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Tell us what's on your mind…"
                            className="w-full border border-stone-200 rounded px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-500 bg-stone-50 resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <div>
                        <button onClick={sendData} className="bg-stone-900 text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-stone-700 transition-colors">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm