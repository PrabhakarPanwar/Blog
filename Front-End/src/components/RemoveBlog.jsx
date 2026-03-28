import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

function RemoveBlog() {
    const { blogData } = useContext(UserContext)
    const [remove, setRemove] = useState(null)

    function sentConfirm() {

    }

    async function RemoveBlog() {
        console.log(remove)
        const res = await axios.post("http://localhost:8000/removeblog", remove)
        if (!res.data.success) {
            return toast.error(res.data.msg)
        }
        toast.success(res.data.msg)
        // setTimeout(() => {
        //     window.location.href = "/admin/dashboard"
        // }, 1000);
    }


    return (
        <div>
            {blogData.map((i, index) => (
                <div key={index} onClick={() => setRemove(i.id)} className='hover:bg-red-500 p-2 my-4 active:scale-95 duration-300 ease-in-out'>
                    <div className="flex items-center justify-between ">
                        <span className="text-xs font-semibold  py-2 rounded">
                            {i.title}
                        </span>
                        <span className="text-xs text-stone-400">{i.category} essays</span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed mb-5">{i.description}</p>
                </div>
            ))}
            <button onClick={RemoveBlog}>lol</button>
        </div>
    )
}

export default RemoveBlog