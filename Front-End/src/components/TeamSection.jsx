import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function TeamSection() {
    const { teamInfo } = useContext(UserContext)
    if (!teamInfo) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <section className="mt-14">
                <h2
                    className="text-xs uppercase tracking-widest text-stone-400 mb-5"
                >
                    Who you might hear from
                </h2>
                <div className="flex flex-wrap justify-evenly gap-4 ">
                    {teamInfo.map((member) => (
                        <div
                            key={member.name}
                            className="bg-white border border-stone-200 rounded-lg px-6 py-5 flex items-center gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                {member.initial}
                            </div>
                            <div className='overflow-hidden'>
                                <p className="text-sm font-bold text-stone-900" style={{ fontFamily: "Georgia, serif" }}>
                                    {member.name}
                                </p>
                                <p className="text-xs text-stone-400">{member.role}</p>
                                <a href={`mailto:${member.email}`} className="text-xs text-stone-500 hover:text-stone-800 transition-colors ">
                                    {member.email}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default TeamSection