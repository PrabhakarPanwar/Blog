import React from 'react'

function SideInfo() {
    return (
        <div className='my-3'>
            <div className="flex flex-col gap-6">
                {/* Response time */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                        <span className="text-amber-500 text-lg mt-0.5">⏱</span>
                        <div>
                            <h3 className="text-sm font-bold text-stone-800 mb-1">Response Time</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                We typically reply within 2–3 business days. For urgent matters, email us directly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Guest submissions */}
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                        <span className="text-sky-500 text-lg mt-0.5">✍️</span>
                        <div>
                            <h3 className="text-sm font-bold text-stone-800 mb-1">Guest Submissions</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                We welcome essays of 800–2,500 words on design, tech, culture, or writing craft. Pitches welcome.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideInfo