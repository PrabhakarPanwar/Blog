import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function RemoveTeamMember() {
    const { teamInfo } = useContext(UserContext)
    return (
        <div>
            {teamInfo.map((member) => (
                <div
                    key={member.name}
                    className="hover:bg-red-500 p-2 my-4  flex items-center gap-4 active:scale-95 duration-300 ease-in-out"
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
    )
}

export default RemoveTeamMember