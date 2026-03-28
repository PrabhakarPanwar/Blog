import React, { useState } from 'react'
import AddBlog from '../components/AddBlog'
import AddTeamMember from '../components/AddTeamMember'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import RemoveBlog from '../components/RemoveBlog'
import RemoveTeamMember from '../components/RemoveTeamMember'

function Dashboard() {
    const [toggle, setToggle] = useState("blog")

    useEffect(() => {
        const verifyUser = async () => {
            let res = await axios.get("http://localhost:8000/dashboard", { withCredentials: true })
            if (res.data.success) {
                return toast.success(res.data.msg)
            }
            toast.error(res.data.msg)
            setTimeout(() => {
                window.location.href = "/"
            }, 1000);
        }
        verifyUser()
    }, [])

    return (
        <div>
            <div className='flex justify-evenly items-center p-5 bg-black text-white '>
                <h1 onClick={() => setToggle("blog")} className='border-1 p-2 rounded-md cursor-pointer active:scale:95 hover:text-amber-300' >Add Blog</h1>
                <h1 onClick={() => setToggle("remblog")} className='border-1 p-2 rounded-md cursor-pointer active:scale:95 hover:text-amber-300'>Remove Blog</h1>
                <h1 onClick={() => setToggle("team")} className='border-1 p-2 rounded-md cursor-pointer active:scale:95 hover:text-amber-300'>Add Team Member</h1>
                <h1 onClick={() => setToggle("remteam")} className='border-1 p-2 rounded-md cursor-pointer active:scale:95 hover:text-amber-300'>Remove Team Member</h1>
            </div>
            {toggle == "blog" && <AddBlog />}
            {toggle == "remblog" && <RemoveBlog />}
            {toggle == "team" && <AddTeamMember />}
            {toggle == "remteam" && <RemoveTeamMember />}
        </div>
    )
}

export default Dashboard